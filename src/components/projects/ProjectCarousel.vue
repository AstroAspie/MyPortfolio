<template>
  <SimpleCarousel :projects="projects" :projectsToShow="displayCount"/>
</template>

<script>
import json from "@/assets/myStuff.json";
// import ProjectCassette from "@/components/projects/ProjectCassette.vue";
import SimpleCarousel from "../global/SimpleCarousel.vue";

export default {
  name: 'Project-Carousel',
  components: {SimpleCarousel},
  data() {
    return {
      selectedProject: null,
      projects: [],
      displayCount: 4,
    }
  },
  methods: {
    LoadProjects() {
      this.projects = json["projects"];
      console.log(window.innerWidth)
      if (window.innerWidth <= 610) {
        this.displayCount = 1;
      }
    }
  },
  mounted() {
    this.LoadProjects()
  }
}
</script>

<style></style>
