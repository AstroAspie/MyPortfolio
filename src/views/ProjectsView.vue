<template>
  <div class="projects-container" ref="projects-banner">
    <ProjectCassette
      v-for="project in projects"
      :key="project.title"
      :project="project"
    />
  </div>
</template>

<script>
import json from "@/assets/myStuff.json";
import ProjectCassette from '@/components/projects/ProjectCassette.vue';

export default {
  name: 'Projects-View',
  components: { ProjectCassette},
  data () {
    return {
      projects: null
    }
  },
  methods: {
    LoadProjects() {
      this.projects = json["projects"];
    }
  },
  mounted() {
    this.LoadProjects()
  }
}
</script>

<style scoped>
.projects-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 30px;
  width: 90%;
  margin: 0 auto;
}
</style>