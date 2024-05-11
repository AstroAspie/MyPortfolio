<template>
  <HomeLayout>
    <template #primary>
      <div class="top-banner-items">
        <AstroBanner />
        <div class="header-socials">
          <SocialsBar />
        </div>
      </div>
    </template>
    <template #secondary>
      <ProjectsBanner />
    </template>
    <template #contact>
      <SkillsBanner />
    </template>
  </HomeLayout>
</template>

<script>
import HomeLayout from "@/layouts/HomeLayout.vue";
import ProjectsBanner from "@/components/projects/ProjectsBanner.vue";
import ContactBanner from "@/components/ContactBanner.vue";
import SocialsBar from "@/components/global/SocialsBar.vue";
import AstroBanner from "@/components/AstroBanner.vue";
import SkillsBanner from "@/components/skills/SkillsBanner.vue";

export default {
  components: { SkillsBanner, AstroBanner, ContactBanner, HomeLayout, ProjectsBanner, SocialsBar },
  name: "HomeView",
  data() {
    return {
      image: "./circuit-image.jpg",
    };
  },
  methods: {},
  
  computed: {
    ScreenDimensions() {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  }
}
</script>

<style scoped>
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
  background-image: url("/circuit-image.jpg");
  z-index: -1;
  opacity: 0.2;
}

.top-banner-img {
  width: 100%;
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