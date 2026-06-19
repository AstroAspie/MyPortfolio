<script setup lang="js">
import { ref, onMounted } from 'vue';
import SimpleCarousel from '@/components/global/SimpleCarousel.vue';
import json from "@/data/projects.json";

const projects = ref([]);
const displayCount = ref(4);

const LoadProjects = () => {
  projects.value = json;
  if (window.innerWidth <= 610) {
    displayCount.value = 1;
  }
};

onMounted(() => {
  LoadProjects();
});
</script>

<template>
  <SimpleCarousel :projects="projects" :projectsToShow="displayCount" />
</template>

<style></style>
