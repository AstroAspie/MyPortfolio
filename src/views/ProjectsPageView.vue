<script lang="js" setup>
  import { computed } from 'vue';

  import projectData from "@/data/projects.json";
  import SimpleCarousel from "@/components/global/SimpleCarousel.vue";
  import ProjectsLayout from "@/layouts/ProjectsLayout.vue";
  
  const gameProjects = computed(() => {
    return projectData["Game"]  // (Unreal Engine, Unity, Web, Python etc.)
  });
  const webMobProjects = computed(() => {
    const web = projectData["Web"]
    const mobile = projectData["Mobile"]

    return { web, mobile }
  })  // Web & Mobile Projects
  const securityProjects = computed(() => {
    return projectData["Security"]
  }); // Security (Offensive, Defensive, Networking etc.)
 
</script>

<template>
  <ProjectsLayout>
    <template #first>
      <h1>Game Projects</h1>
      <SimpleCarousel :projects="gameProjects" />
    </template>
    <template #second>
      <h1>Web & Mobile Projects</h1>
      <SimpleCarousel :projects="webMobProjects" />
    </template>
    <template #third>
      <h1>Security Projects</h1>
      <SimpleCarousel :projects="securityProjects" />
    </template>
  </ProjectsLayout>
</template>

<style scoped></style>