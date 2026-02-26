<script lang="js" setup>
import { computed } from 'vue';
import HomeLayout from "@/layouts/HomeLayout.vue";
import AstroBanner from "@/components/AstroBanner.vue";
import SkillsBanner from "@/components/skills/SkillsBanner.vue";

computed(() => {
  return {
    ScreenDimensions: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
  };
})
</script>


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