<template>
  <ProjectsLayout>
    <template #first>
      <h1>Game Projects</h1>
      <SimpleCarousel :projects="gameProjects" />
    </template>
    <template #second>
      <h1>Web Projects</h1>
      <SimpleCarousel :projects="webProjects" />
    </template>
    <template #third>
      <h1>Mobile Projects</h1>
      <SimpleCarousel :projects="mobileProjects" />
    </template>
  </ProjectsLayout>
</template>

<script>
import demoData from "@/assets/myStuff.json";
import SimpleCarousel from "@/components/global/SimpleCarousel.vue";
import ProjectsLayout from "@/layouts/ProjectsLayout.vue";

export default {
  name: 'Projects-View',
  components: { ProjectsLayout, SimpleCarousel },
  data() {
    return {
      projects: null,
    }
  },
  computed: {
    gameProjects() {
      let test = demoData["projects"].filter(project => project.type.includes("Game"));
      console.log(`test game: ${test}`);
      return test
    },
    webProjects() {
      return demoData["projects"].filter(project => project.type.includes("Web"));
    },
    mobileProjects() {
      return demoData["projects"].filter(project => project.type.includes("Mobile"));
    }
  },
  methods: {
    LoadProjects() {
      this.projects = demoData["projects"];
    }
  },
  mounted() {
    this.LoadProjects()
  }
}
</script>

<style scoped></style>