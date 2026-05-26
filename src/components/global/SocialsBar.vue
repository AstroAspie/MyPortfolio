<script lang="js" setup>
import { ref, onMounted } from "vue";
import json from "@/data/socials.json";

const socials = ref([]);

const onHover = (item) => {
  // grow the size of the icon being hovered over
  const itemSelector = `#${item}`;
  const icon = document.querySelector(itemSelector);

  // smoothly transition the icon to a larger size
  icon.style.transition = "width 0.5s, height 0.5s";
  icon.style.width = "60px";
  icon.style.height = "60px";
}

const offHover = (item) => {
  const itemSelector = `#${item}`;
  const icon = document.querySelector(itemSelector);
  // smoothly transition the icon back to its original size
  icon.style.transition = "width 0.5s, height 0.5s";
  icon.style.width = "50px";
  icon.style.height = "50px";
}

const openLink = (link) => {
  window.open(link, "_blank");
}

const loadSocials = () => {
  socials.value = json;
}

onMounted(() => {
  loadSocials();
})
</script>

<template>
  <div class="header-socials">
    <div class="social-icons">
      <img
          v-for="social in socials"
          :key="social"
          :src="social.source"
          class="icon" 
          :id="social.name"
          :alt="social.name + ' logo'"
          @mouseover="onHover(social.name)"
          @mouseout="offHover(social.name)"
          @click="openLink(social.link)"
      />
    </div>
  </div>
</template>

<style scoped>
.box-container {
  position: absolute;
  left: 170px;
  top: 140px;
}


#box {
  display: relative;
  border-radius: 50%;
  background-color: transparent;
}

.social-icons {
  display: flex;
  flex-direction: row;
}

.icon {
  margin: 10px;
  width: 50px;
  height: 50px;
  background-color: white;
  font-size: 6px;
  border: 1px solid white;
  border-radius: 50%;
  z-index: 1;
}

.download-resume-btn {
  text-align: center;
  padding-right: 40px;
  margin-left: 10px;
}

.icon:hover {
  cursor: pointer;
}

@media (max-width: 600px) {
  .icon {
    margin: 0 40px;
  }

  .box-container {
    position: absolute;
    top: 5%;
    left: 20px;
    height: 100%;
  }
}
</style>