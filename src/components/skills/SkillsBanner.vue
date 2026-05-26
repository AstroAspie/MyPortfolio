
<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'
import SkillCassette from './SkillCassette.vue'

const containerRef = ref(null)
const containerWidth = ref(800)
const containerHeight = ref(600)
const sortSelect = ref(false)
const activeTags = ref(null)

const BUBBLE_RADIUS = 24   // collision radius for each bubble (px)
const SPEED = 1.2          // base speed multiplier for random initial velocity
const CURSOR_RADIUS = 120  // distance within which cursor repels bubbles (px)
const CURSOR_FORCE = 0.4   // strength of cursor repulsion impulse

const mouseX = ref(null)
const mouseY = ref(null)

// const categories = reactive([
//   { name: 'Web-Dev', tags: ['BE', 'FE', 'DB'] },
//   // { name: 'Game-Dev', tags: ['GD'] },
//   { name: 'Systems & Arcitecture', tags: ['INF', 'IOT'] },
//   { name: 'Cloud', tags: ['C'] }
// ])

const skills_list = reactive([
  { name: 'HTML', type: 'FE' },
  { name: 'CSS', type: 'FE' },
  { name: 'JavaScript', type: 'FS' },
  { name: 'Python', type: 'BE' },
  { name: 'Java', type: 'BE' },
  { name: 'C/C++', type: 'BE' },
  { name: 'SQL', type: 'DB' },
  { name: 'NoSQL', type: 'DB' },
  { name: 'Docker', type: 'INF' },
  { name: 'Dotnet', type: 'BE' },
  { name: 'Git', type: 'INF' },
  { name: 'RaspberryPi', type: 'IoT' },
  { name: 'AWS', type: 'C' },
  { name: 'Azure', type: 'C' },
  { name: 'Linux', type: 'INF' },
  { name: 'React', type: 'FE', lang: 'javascript' },
  { name: 'Vue', type: 'FE', lang: 'javascript' },
  { name: 'Django', type: 'BE', lang: 'python' },
  { name: 'FastAPI', type: 'BE', lang: 'python' },
  { name: 'Blazor', type: 'FE', lang: '.NET' },
  { name: 'MongoDB', type: 'DB', lang: 'NoSQL' }
])

const bubbles = reactive([])

// Spawn each bubble at a random position (clamped inside walls) with a
// random velocity (±SPEED on each axis) and a random depth layer.
const initBubbles = () => {
  bubbles.length = 0
  const w = containerWidth.value - BUBBLE_RADIUS * 2
  const h = containerHeight.value - BUBBLE_RADIUS * 2
  for (const skill of skills_list) {
    bubbles.push({
      skill,
      x: Math.random() * w + BUBBLE_RADIUS,
      y: Math.random() * h + BUBBLE_RADIUS,
      vx: (Math.random() - 0.5) * SPEED * 2,
      vy: (Math.random() - 0.5) * SPEED * 2,
      zIndex: Math.floor(Math.random() * 10)
    })
  }
}

const visibleBubbles = computed(() => {
  if (!activeTags.value) return bubbles
  const tags = activeTags.value.map((t) => t.toLowerCase())
  return bubbles.filter((b) => tags.includes(b.skill.type.toLowerCase()))
})

let animFrameId = null

// Main physics loop — runs every frame via requestAnimationFrame.
// Each tick: integrate velocity, resolve walls, apply cursor repulsion,
// then resolve bubble-bubble collisions with elastic reflection.
const animate = () => {
  const w = containerWidth.value
  const h = containerHeight.value
  for (let i = 0; i < bubbles.length; i++) {
    const b = bubbles[i]

    // --- integrate velocity ---
    b.x += b.vx
    b.y += b.vy

    // --- wall collisions: clamp position and reverse the offending axis ---
    if (b.x - BUBBLE_RADIUS < 0) {
      b.x = BUBBLE_RADIUS
      b.vx *= -1
    }
    if (b.x + BUBBLE_RADIUS > w) {
      b.x = w - BUBBLE_RADIUS
      b.vx *= -1
    }
    if (b.y - BUBBLE_RADIUS < 0) {
      b.y = BUBBLE_RADIUS
      b.vy *= -1
    }
    if (b.y + BUBBLE_RADIUS > h) {
      b.y = h - BUBBLE_RADIUS
      b.vy *= -1
    }

    // --- cursor repulsion: push bubbles away from mouse pointer ---
    // Force decays linearly from CURSOR_RADIUS down to zero at contact.
    // Applied as an impulse to velocity each frame (mass is uniform).
    if (mouseX.value !== null && mouseY.value !== null) {
      const dx = b.x - mouseX.value
      const dy = b.y - mouseY.value
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < CURSOR_RADIUS && dist > 0) {
        const force = (CURSOR_RADIUS - dist) / CURSOR_RADIUS * CURSOR_FORCE
        const nx = dx / dist
        const ny = dy / dist
        b.vx += nx * force
        b.vy += ny * force
      }
    }

    // --- gentle bubble-bubble repulsion ---
    // When two bubbles overlap, apply a soft spring-like push that
    // scales with overlap depth. No hard elastic reflection — they
    // smoothly nudge apart instead of sharply bouncing.
    for (let j = i + 1; j < bubbles.length; j++) {
      const o = bubbles[j]
      const dx = o.x - b.x
      const dy = o.y - b.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      const minDist = BUBBLE_RADIUS * 2
      if (dist < minDist && dist > 0) {
        const overlap = minDist - dist
        const nx = dx / dist
        const ny = dy / dist
        const push = overlap * 0.3
        b.x -= nx * push
        b.y -= ny * push
        o.x += nx * push
        o.y += ny * push
        // transfer a small velocity nudge along the collision normal
        const nudge = overlap * 0.05
        b.vx -= nx * nudge
        b.vy -= ny * nudge
        o.vx += nx * nudge
        o.vy += ny * nudge
      }
    }
  }
  animFrameId = requestAnimationFrame(animate)
}

const setCategory = (tags) => {
  activeTags.value = tags
  sortSelect.value = true
}

const resetSort = () => {
  activeTags.value = null
  sortSelect.value = false
}

const onMouseMove = (e) => {
  const rect = containerRef.value?.getBoundingClientRect()
  if (rect) {
    mouseX.value = e.clientX - rect.left
    mouseY.value = e.clientY - rect.top
  }
}

const onMouseLeave = () => {
  mouseX.value = null
  mouseY.value = null
}

onMounted(() => {
  if (containerRef.value) {
    containerWidth.value = containerRef.value.offsetWidth
    containerHeight.value = containerRef.value.offsetHeight
    containerRef.value.addEventListener('mousemove', onMouseMove)
    containerRef.value.addEventListener('mouseleave', onMouseLeave)
  }
  initBubbles()
  animFrameId = requestAnimationFrame(animate)
})

onUnmounted(() => {
  if (animFrameId) cancelAnimationFrame(animFrameId)
  containerRef.value?.removeEventListener('mousemove', onMouseMove)
  containerRef.value?.removeEventListener('mouseleave', onMouseLeave)
})
</script>

<template>
  <div class="container">
    <h1 class="banner-title">Skills Board</h1>
    <div class="skills-nav">
      <div class="nav-bar">
        <ul class="skill-items">
          <li
            v-for="category in categories"
            :key="category.name"
            @click="setCategory(category.tags)"
          >
            {{ category.name }}
          </li>
          <li v-if="sortSelect" @click="resetSort">&#x1f504;</li>
        </ul>
      </div>
    </div>
    <div class="banner-container">
      <div class="skills-container" ref="containerRef">
        <div
          v-for="bubble in visibleBubbles"
          :key="bubble.skill.name"
          class="bubble-wrapper"
          :style="{ left: bubble.x + 'px', top: bubble.y + 'px', zIndex: bubble.zIndex }"
        >
          <SkillCassette :skill="bubble.skill" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.banner-title {
  font-size: 2.2rem;
  font-weight: bold;
  text-wrap: nowrap;
  margin: 10px auto;
}

.skills-nav {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0 auto;
}

.nav-bar {
  position: relative;
  margin: 10px auto;
}

.nav-bar ul {
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 0;
}

.nav-bar li {
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  color: white;
  font-size: 14px;
}

.nav-bar li:hover {
  color: #02465b;
}

.banner-container {
  flex: 1;
  min-height: 0;
  width: 100%;
  position: relative;
}

.skills-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.bubble-wrapper {
  position: absolute;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
  pointer-events: auto;
  will-change: transform;
}

.skill-items li {
  cursor: pointer;
  color: white;
  font-size: 14px;
}

@media (max-width: 600px) {
  .banner-title {
    font-size: 2.2rem;
    margin: 10px auto;
  }
}

@media (max-width: 400px) {
  .banner-title {
    font-size: 1.2rem;
    margin: 10px auto;
  }

  .skills-nav {
    font-size: 12px;
  }
}
</style>
