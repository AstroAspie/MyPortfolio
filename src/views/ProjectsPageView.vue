<script lang="js" setup>
import { ref, computed } from 'vue'
import projectData from '@/data/projects.json'
import ProjectCassette from '@/components/projects/ProjectCassette.vue'

const allTypes = computed(() => {
  const types = new Set()
  projectData.forEach(p => p.type.forEach(t => types.add(t)))
  return Array.from(types)
})

const activeFilter = ref('All')

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') return projectData
  return projectData.filter(p => p.type.includes(activeFilter.value))
})
</script>

<template>
  <div class="projects-page">
    <div class="filter-bar">
      <v-btn
        v-for="type in ['All', ...allTypes]"
        :key="type"
        :variant="activeFilter === type ? 'flat' : 'outlined'"
        @click="activeFilter = type"
      >
        {{ type }}
      </v-btn>
    </div>
    <div class="projects-grid">
      <ProjectCassette
        v-for="(project, index) in filteredProjects"
        :key="project.title + index"
        :project="project"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
}

.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-bottom: 32px;
}

.projects-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  max-width: 1280px;
  width: 100%;
}
</style>
