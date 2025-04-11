<template>
  <HomeLayout>
    <template #primary>
      <AstroBanner name="bio" />
    </template>
    <template #secondary>
      <SkillsBanner ref="skills" />
    </template>
  </HomeLayout>
</template>

<script>
import HomeLayout from "@/layouts/HomeLayout.vue";
import AstroBanner from "@/components/AstroBanner.vue";
import SkillsBanner from "@/components/skills/SkillsBanner.vue";
import ContactBanner from "@/components/ContactBanner.vue";

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { SkillsBanner, AstroBanner, HomeLayout, ContactBanner },
  name: "HomeView",
  data() {
    return {
      BasicScene: import("@/components/scenes/BasicScene.vue"),
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
}
</script>

<style scoped>
.image {
  width: 100%;
  height: 100%;
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