<template>
  <div class="projects-container" ref="projects-banner">
    <div v-for="project in projects" :key="project.title" class="cassette">
      <ProjectCassette
        :project="project"
      />
    </div>
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
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  width: 90%;
  margin: 120px auto;
}

.cassette {
  width: 400px;
  height: 500px;
  margin-bottom: 40px;
}
</style>