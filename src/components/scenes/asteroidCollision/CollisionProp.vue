<template>
  <div>
    <v-img
      :src="getRandomImage()"
      :width="width"
      :height="height"
      :contain="true"
      :position="position"
    />
  </div>
</template>

<script>
export default {
  name: 'AsteroidProp',
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      width: 100,
      height: 100,
      position: 'center center',
      
      asteroid_image_list: [
        '@/assets/asteroid_images/asteroid_1.jpg',
        '@/assets/asteroid_images/asteroid_2.jpg',
        '@/assets/asteroid_images/asteroid_3.jpg',
        '@/assets/asteroid_images/asteroid_4.jpg',
        '@/assets/asteroid_images/asteroid_5.jpg',
        '@/assets/asteroid_images/asteroid_6.jpg',
        '@/assets/asteroid_images/asteroid_7.jpg',
        '@/assets/asteroid_images/asteroid_8.jpg',
      ]
    }
  },
  methods: {
    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    },
    getRandomImage() {
      return this.asteroid_image_list[this.getRandomInt(this.asteroid_image_list.length)];
    },
  },
}
</script>

<style scoped>
</style>