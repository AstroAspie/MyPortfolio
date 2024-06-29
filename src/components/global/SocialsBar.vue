<template>
  <div class="header-socials">
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
</template>

<script>
import json from "@/assets/myStuff.json";

export default {
  name: "SocialsBar",
  data() {
    return {
      socials: null
    }
  },
  methods: {
    onHover(item) {
      // grow the size of the icon being hovered over
      const itemSelector = `#${item}`;
      const icon = this.$el.querySelector(itemSelector);

      // smoothly transition the icon to a larger size
      icon.style.transition = "width 0.5s, height 0.5s";
      this.$el.querySelector(itemSelector).style.width = "60px";
      this.$el.querySelector(itemSelector).style.height = "60px";
    },
    offHover(item) {
      const itemSelector = `#${item}`;
      // shrink the size of the icon being hovered over
      this.$el.querySelector(itemSelector).style.width = "50px";
      this.$el.querySelector(itemSelector).style.height = "50px";
    },
    openLink(link) {
      window.open(link, "_blank");
    },
    loadSocials() {
      this.socials = json["socials"];
    }
  }
}
</script>

<style scoped>
.icon {
  margin: 10px;
  width: 50px;
  height: 50px;
  background-color: white;
  font-size: 6px;
  border-radius: 50%;
  z-index: 1;
}
</style>