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

export default {
  components: { SkillsBanner, AstroBanner, HomeLayout, ProjectsBanner},
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

.middle-banner {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  font-weight: bold;
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