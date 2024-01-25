<template>
  <HomeLayout>
    <template #primary>
      <div class="top-banner-img"></div>
      <div class="top-banner-items">
        <h1>Alex (Astro) Smith</h1>
        <h2>Full Stack Web Developer</h2>
        <div class="header-socials">
          <img 
              src="../assets/github-mark/github-mark.png" 
              class="icon" 
              id="github"
              alt="github logo"
              @mouseover="onHover('github')"
              @mouseout="offHover('github')"
          />
          <img
              src="../assets/linkedin-logo.png" 
              class="icon"
              id="linkedin"
              alt="linkedin logo" 
              @mouseover="onHover('linkedin')"
              @mouseout="offHover('linkedin')"
          />
        </div>
      </div>
    </template>
    <template #secondary>
      <ProjectsBanner />
    </template>
    <template #contact>
      <ContactBanner />
    </template>
  </HomeLayout>
</template>

<script>
import HomeLayout from "@/layouts/HomeLayout.vue";
import ProjectsBanner from "@/components/projects/ProjectsBanner.vue";
import ContactBanner from "@/components/ContactBanner.vue";


export default {
  components: {ContactBanner, HomeLayout, ProjectsBanner },
  name: "HomeView",
  data() {
    return {
    };
  },
  methods: {
    // Icon interactions
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
  },
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

.image-cloak {
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: -1;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.top-banner-img {
  background-image: url("../assets/circuit-image.jpg");
  width: 100vw;
  height: 100%;
  opacity: 0.2;
  z-index: -1;
}

.top-banner-items {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
}

.header-socials {
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
  height: 8rem;
  width: 8rem;
}

.header-socials h1 {
  color: white;
  font-size: 25px;
  margin: 0;
}

.header-socials h2 {
  color: white;
  font-size: 4rem;
  margin: 0;
}
</style>