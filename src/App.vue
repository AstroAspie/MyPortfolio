<template>
  <div class="app-shell">
    <BreadCrumbs />
    <RouterView />
    <AppFooter />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import BreadCrumbs from "@/components/global/BreadCrumbs.vue";
import AppFooter from "@/components/global/AppFooter.vue";
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-shell {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

input, textarea {
  user-select: auto;
}
</style>
