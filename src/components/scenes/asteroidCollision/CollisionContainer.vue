<template>
  <div>
    <v-img
        :src="galaxy_image"
        :width="width"
        :height="height"
        :contain="true"
        :position="position"
    />
    <AsteroidProp
        v-for="n in asteroidCount"
        :key="n"
    />
  </div>
</template>

<script>
import AsteroidProp from "@/components/scenes/asteroidCollision/CollisionProp.vue";
export default {
  name: 'CollisionContainer',
  components: {
    AsteroidProp,
  },
  props: {
    width: {
      type: Number,
      default: 1000,
    },
    height: {
      type: Number,
      default: 1000,
    },
    position: {
      type: String,
      default: 'center center',
    },
  },
  data () {
    return {
      galaxy_image: '@/assets/images/galaxy.jpg',
      asteroidCount: 10,
    }
  },
};
</script>

<style scoped>
</style>