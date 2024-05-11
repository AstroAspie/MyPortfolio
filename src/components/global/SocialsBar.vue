<template>
  <div class="header-socials">
    <img 
        v-for="social in socials"
        :src="social.img" 
        class="icon" 
        :id="social.name"
        :alt="social.name + ' logo'"
        @mouseover="onHover(social.name)"
        @mouseout="offHover(social.name)"
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
          img: "src/assets/github-mark/github-mark.png"
        },
        {
          name: "LinkedIn",
          img: "src/assets/linkedin-logo.png"
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
  }
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