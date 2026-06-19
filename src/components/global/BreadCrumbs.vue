<template>
  <nav class="breadcrumbs">
    <router-link to="/" :class="{ active: isHome }">Home</router-link>
    <template v-for="(crumb, index) in crumbs" :key="crumb.path">
      <span class="separator">/</span>
      <router-link :to="crumb.path" :class="{ active: index === crumbs.length - 1 }">
        {{ crumb.label }}
      </router-link>
    </template>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isHome = computed(() => route.path === '/')

const crumbs = computed(() => {
  const pathParts = route.path.split('/').filter(Boolean)
  const breadcrumbs = []
  let accumulated = ''

  for (const part of pathParts) {
    accumulated += '/' + part
    const matched = route.matched.find(r => {
      const rPath = r.path.replace(/\/:id$/, '')
      return r.path === accumulated || rPath === accumulated
    })
    breadcrumbs.push({
      label: matched?.meta?.breadcrumb || part.charAt(0).toUpperCase() + part.slice(1),
      path: accumulated,
    })
  }

  return breadcrumbs
})
</script>

<style scoped>
.breadcrumbs {
  padding: 12px 24px;
  font-size: 0.95rem;
}

.breadcrumbs a {
  color: var(--color-text);
  text-decoration: none;
  opacity: 0.75;
  transition: opacity 0.2s;
}

.breadcrumbs a:hover {
  opacity: 1;
  text-decoration: underline;
}

.breadcrumbs a.active {
  opacity: 1;
  font-weight: 600;
  pointer-events: none;
}

.separator {
  margin: 0 8px;
  opacity: 0.4;
}
</style>
