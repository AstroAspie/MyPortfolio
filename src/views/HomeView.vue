<template>
  <HomeLayout>
    <template #primary>
      <AstroBanner />
    </template>
    <template #secondary>
      <ProjectsBanner ref="projects-banner"/>
    </template>
    <template #contact>
      <SkillsBanner />
    </template>
  </HomeLayout>
</template>

<script>
import HomeLayout from "@/layouts/HomeLayout.vue";
import ProjectsBanner from "@/components/projects/ProjectsBanner.vue";
import AstroBanner from "@/components/AstroBanner.vue";
import SkillsBanner from "@/components/skills/SkillsBanner.vue";
import BasicScene from "@/components/scenes/BasicScene.vue";

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { SkillsBanner, AstroBanner, HomeLayout, ProjectsBanner, BasicScene},
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

@media (max-width: 480px) {
  #myLogo {
    display: none;
  }
  .intro {
    left: 0;
  }
}
</style>