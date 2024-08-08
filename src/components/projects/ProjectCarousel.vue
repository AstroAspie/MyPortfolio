<template>
  <SimpleCarousel :projects="projects" />
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
      projects: []
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

<style></style>
