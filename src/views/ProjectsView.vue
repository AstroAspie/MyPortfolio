<template>
  <div>
    <h1>Projects</h1>
    <ul>
      <li v-for="project in projects" :key="project.id">
        <router-link :to="{ name: 'ProjectDetails', params: { id: project.id } }">
          {{ project.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data () {
    return {
      projects: [
        { id: 1, name: 'Project 1', type: 'Web'  },
        { id: 2, name: 'Project 2', type: 'Web'  },
        { id: 3, name: 'Project 3', type: 'Game' },
        { id: 4, name: 'Project 4', type: 'Game' },
      ]
    }
  },
}
</script>