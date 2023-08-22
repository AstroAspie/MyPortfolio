<template>
  <header>
    <NavBar />
  </header>
  <main>
    <ColorChangingBox />
  </main>
  <!-- <RouterView /> -->
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
import ColorChangingBox from "./components/ColorChangingBox.vue";
export default {
  name: "App",
  components: {
    RouterLink,
    RouterView,
    NavBar,
  },
};
</script>

<style scoped></style>
