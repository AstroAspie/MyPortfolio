<template>
  <HomeLayout>
    <template #primary>
      <h1>Alex (Astro) Smith</h1>
      <h2>Full Stack Web Developer</h2>
      <img src="../assets/github-mark/github-mark.png" class="icon" alt="github logo" />
      <img src="../assets/linkedin-logo.png" class="icon" alt="linkedin logo" />
    </template>
    <template #secondary>
      <h1>Testing secondary</h1>
    </template>
    <template #contact>
      
    </template>
  </HomeLayout>
</template>

<script>
import HomeLayout from "@/layouts/HomeLayout.vue";
import ProjectsBanner from "@/components/ProjectsBanner.vue";

export default {
  components: { HomeLayout, ProjectsBanner },
  name: "HomeView",
}
</script>

<style scoped>
.icon {
  margin: 10px;
  width: 50px;
  height: 50px;
  color: white;
  z-index: 1;
}
</style>