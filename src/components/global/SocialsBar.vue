<script lang="js" setup>
import json from "@/data/socials.json";
import { ref } from "vue";

const socials = ref(json);

const openLink = (link) => {
  window.open(link, "_blank", "noopener");
}
</script>

<template>
  <div class="header-socials">
    <div class="social-icons">
      <img
          v-for="social in socials"
          :key="social.name"
          :src="social.source"
          class="icon"
          :alt="social.name + ' logo'"
          @click="openLink(social.link)"
      />
    </div>
  </div>
</template>

<style scoped>
.social-icons {
  display: flex;
  flex-direction: row;
}

.icon {
  margin: 10px;
  width: 50px;
  height: 50px;
  background-color: white;
  border: 1px solid white;
  border-radius: 50%;
  z-index: 1;
  cursor: pointer;
  transition: width 0.5s, height 0.5s;
}

.icon:hover {
  width: 60px;
  height: 60px;
}

@media (max-width: 600px) {
  .icon {
    margin: 0 40px;
  }
}
</style>