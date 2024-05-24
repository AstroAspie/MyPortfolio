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
export default {
  name: "SocialsBar",
  data() {
    return {
      socials: [
        {
          name: "Github",
          source: "/github-mark.png",
          link: "https://github.com/astroaspie"
        },
        {
          name: "LinkedIn",
          source: "/linkedin-logo.png",
          link: "https://www.linkedin.com/in/alex-astro-smith/"
        }
      ]
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
    }
  }
}
</script>

<style scoped>
.icon {
  margin: 10px;
  width: 50px;
  height: 50px;
  color: white;
  font-size: 6px;
  z-index: 1;
}
</style>