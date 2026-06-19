<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sections = ['Web Projects', 'Mobile Projects', 'Game Projects']
const activeSection = ref(0)
const sectionRefs = ref([])
const containerRef = ref(null)

const setSectionRef = (el) => {
  if (el) sectionRefs.value.push(el)
}

const scrollTo = (index) => {
  const el = sectionRefs.value[index]
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const idx = sectionRefs.value.indexOf(entry.target)
          if (idx >= 0) activeSection.value = idx
        }
      }
    },
    { threshold: 0.4, rootMargin: '-80px 0px 0px 0px' }
  )
  for (const el of sectionRefs.value) observer.observe(el)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <div class="layout-root" ref="containerRef">
    <nav class="nav-dots">
      <button
        v-for="(_, index) in sections"
        :key="index"
        class="nav-dot"
        :class="{ active: activeSection === index }"
        @click="scrollTo(index)"
        :aria-label="`Scroll to ${sections[index]}`"
      />
    </nav>

    <section
      v-for="(slotName, index) in ['first', 'second', 'third']"
      :key="slotName"
      :ref="setSectionRef"
      class="section"
      :class="`section-${index}`"
    >
      <div class="section-inner">
        <slot :name="slotName" />
      </div>
    </section>
  </div>
</template>

<style scoped>
.layout-root {
  position: relative;
  width: 100%;
  scroll-behavior: smooth;
}

.section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 24px 60px;
  border-bottom: 1px solid var(--color-border);
}

.section:last-child {
  border-bottom: none;
}

.section-inner {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

/* Side navigation dots */
.nav-dots {
  position: fixed;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 100;
}

.nav-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid var(--color-text);
  background: transparent;
  cursor: pointer;
  padding: 0;
  transition: background 0.3s, transform 0.3s, border-color 0.3s;
  opacity: 0.5;
}

.nav-dot:hover {
  opacity: 1;
  transform: scale(1.4);
}

.nav-dot.active {
  background: var(--color-text);
  opacity: 1;
  transform: scale(1.2);
  border-color: var(--color-text);
}

/* Responsive */
@media (max-width: 768px) {
  .section {
    padding: 60px 16px 40px;
    min-height: auto;
  }

  .nav-dots {
    right: 12px;
    gap: 10px;
  }

  .nav-dot {
    width: 8px;
    height: 8px;
  }
}
</style>