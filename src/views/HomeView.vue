<template>
  <HomeLayout>
    <template #primary>
      <AstroBanner name="bio" />
    </template>
    <template #secondary>
      <ProjectsBanner ref="projects" />
    </template>
    <template #contact>
      <SkillsBanner ref="skills" />
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
  },
  mounted() {
    document.addEventListener("nav", e => {
      console.log(`Event ${e.NavTo}`)
      this.$refs[e.NavTo].focus()
    })
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