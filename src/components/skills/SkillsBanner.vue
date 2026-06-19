
<script setup>
import { ref, reactive, computed, onMounted, onUnmounted, nextTick } from 'vue'
import SkillCassette from './SkillCassette.vue'
import logos from '@/data/logos.json'

const containerRef = ref(null)
const gridRef = ref(null)
const gridItemRefs = {}
const containerWidth = ref(800)
const containerHeight = ref(600)
const sortSelect = ref(false)
const activeTags = ref(null)
const interactive = ref(false)

const BUBBLE_RADIUS = 24   // collision radius for each bubble (px)
const SPEED = 1.2          // base speed multiplier for random initial velocity
const CURSOR_RADIUS = 120  // distance within which cursor repels bubbles (px)
const CURSOR_FORCE = 0.4   // strength of cursor repulsion impulse

const mouseX = ref(null)
const mouseY = ref(null)

const categories = reactive([
  { name: 'Web-Dev', tags: ['BE', 'FE', 'DB'] },
  { name: 'Systems & Architecture', tags: ['INF', 'IOT'] },
  { name: 'Cloud', tags: ['C'] }
])

const skills_list = reactive([
  { name: 'Dotnet', type: 'BE' },
  { name: 'Python', type: 'BE' },
  { name: 'Vue', type: 'FE', lang: 'javascript' },
  { name: 'React', type: 'FE', lang: 'javascript' },
  { name: 'JavaScript', type: 'FS' },
  { name: 'GitHub', type: 'INF' },
  { name: 'Docker', type: 'INF' },
  { name: 'Java', type: 'BE' },
  // { name: 'C/C++', type: 'BE' },
  { name: 'RaspberryPi', type: 'IoT' },
  { name: 'AWS', type: 'C' },
  { name: 'Azure', type: 'C' },
  { name: 'Linux', type: 'INF' },
  // { name: 'Django', type: 'BE', lang: 'python' },
  { name: 'FastAPI', type: 'BE', lang: 'python' },
  { name: 'Blazor', type: 'FE', lang: '.NET' },
  { name: 'MongoDB', type: 'DB', lang: 'NoSQL' },
  { name: 'PostgreSQL', type: 'DB', lang: 'SQL' },
])

const bubbles = reactive([])

const logoMap = computed(() => {
  const map = {}
  for (const entry of logos) {
    const [key, value] = Object.entries(entry)[0]
    map[key.toLowerCase()] = value
  }
  return map
})

const initBubbles = (positions = {}) => {
  bubbles.length = 0
  const w = containerWidth.value - BUBBLE_RADIUS * 2
  const h = containerHeight.value - BUBBLE_RADIUS * 2
  for (const skill of skills_list) {
    const pos = positions[skill.name]
    bubbles.push({
      skill,
      x: pos ? pos.x : Math.random() * w + BUBBLE_RADIUS,
      y: pos ? pos.y : Math.random() * h + BUBBLE_RADIUS,
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

const filteredSkills = computed(() => {
  if (!activeTags.value) return skills_list
  const tags = activeTags.value.map((t) => t.toLowerCase())
  return skills_list.filter((s) => tags.includes(s.type.toLowerCase()))
})

const toggleInteractive = async () => {
  if (interactive.value) {
    interactive.value = false
    if (animFrameId) cancelAnimationFrame(animFrameId)
    containerRef.value?.removeEventListener('mousemove', onMouseMove)
    containerRef.value?.removeEventListener('mouseleave', onMouseLeave)
  } else {
    const positions = {}
    if (gridRef.value) {
      const bannerRect = gridRef.value.parentElement.getBoundingClientRect()
      for (const skill of filteredSkills.value) {
        const el = gridItemRefs[skill.name]
        if (el) {
          const rect = el.getBoundingClientRect()
          positions[skill.name] = {
            x: rect.left - bannerRect.left + rect.width / 2,
            y: rect.top - bannerRect.top + rect.height / 2
          }
        }
      }
    }
    interactive.value = true
    await nextTick()
    if (containerRef.value) {
      containerWidth.value = containerRef.value.offsetWidth
      containerHeight.value = containerRef.value.offsetHeight
      containerRef.value.addEventListener('mousemove', onMouseMove)
      containerRef.value.addEventListener('mouseleave', onMouseLeave)
    }
    initBubbles(positions)
    animFrameId = requestAnimationFrame(animate)
  }
}

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

let observer = null

onMounted(() => {
  if (containerRef.value) {
    containerWidth.value = containerRef.value.offsetWidth
    containerHeight.value = containerRef.value.offsetHeight
    if (interactive.value) {
      containerRef.value.addEventListener('mousemove', onMouseMove)
      containerRef.value.addEventListener('mouseleave', onMouseLeave)
    }
  }
  if (interactive.value) {
    initBubbles()
    animFrameId = requestAnimationFrame(animate)
  }

  observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      if (interactive.value && !animFrameId) {
        animFrameId = requestAnimationFrame(animate)
      }
    } else {
      if (animFrameId) {
        cancelAnimationFrame(animFrameId)
        animFrameId = null
      }
    }
  }, { threshold: 0 })
  observer.observe(containerRef.value || gridRef.value?.parentElement)
})

onUnmounted(() => {
  if (animFrameId) cancelAnimationFrame(animFrameId)
  containerRef.value?.removeEventListener('mousemove', onMouseMove)
  containerRef.value?.removeEventListener('mouseleave', onMouseLeave)
  if (observer) observer.disconnect()
})
</script>

<template>
  <div class="container">
    <div class="header-row">
      <h1 class="banner-title">Skills Board</h1>
      <button class="toggle-btn" @click="toggleInteractive">
        {{ interactive ? 'Interactive' : 'Grid' }}
      </button>
    </div>
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
    <div v-if="interactive" class="banner-container">
      <div class="skills-container" ref="containerRef">
        <div
          v-for="bubble in visibleBubbles"
          :key="bubble.skill.name"
          class="bubble-wrapper"
          :style="{ left: bubble.x + 'px', top: bubble.y + 'px', zIndex: bubble.zIndex }"
        >
          <SkillCassette :skill="bubble.skill" :skillLogo="logoMap[bubble.skill.name.toLowerCase()]"/>
        </div>
      </div>
    </div>
    <div v-else class="banner-container">
      <div class="skills-grid" ref="gridRef">
        <div
          v-for="skill in filteredSkills"
          :key="skill.name"
          :ref="(el) => { if (el) gridItemRefs[skill.name] = el }"
          class="grid-item"
        >
          <SkillCassette
            :skill="skill"
            :skillLogo="logoMap[skill.name.toLowerCase()]"
          />
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

.header-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin: 10px auto;
}

.banner-title {
  font-size: 2.2rem;
  font-weight: bold;
  text-wrap: nowrap;
  margin: 0;
}

.toggle-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 6px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 13px;
  transition: background 0.2s, border-color 0.2s;
}

.toggle-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
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
  color: #6d28d9;
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

.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
  width: 100%;
  height: 100%;
  align-content: start;
  justify-items: center;
}

@media (max-width: 600px) {
  .banner-title {
    font-size: 2.2rem;
    margin: 10px auto;
  }

  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
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
