<template>
  <header>
    <NavBar />
  </header>

  <RouterView />
</template>

<script>
import { RouterView } from "vue-router";
import NavBar from "@/components/global/NavBar.vue";

export default {
  name: "App",
  components: {
    RouterView,
    NavBar,
  },
};
</script>

<style scoped></style>
