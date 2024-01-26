<template>
  <div>
    <h1>Alex <span class="nickname">(Astro)</span> Smith</h1>
    <h2 @mouseenter="nextMessage">{{ welcome_msg }}</h2>
  </div>
</template>

<script>
export default {
  name: "AstroBanner",
  data() {
    return {
      welcome_msg_array: [
          "Welcome aboard!",
          "Full Stack Web Developer",
          "Welcome to my portfolio!",
      ],
      welcome_msg: "",
    };
  },
  methods: {
    nextMessage() {
      this.welcome_msg =
        this.welcome_msg_array[
          Math.floor(Math.random() * this.welcome_msg_array.length)
        ];
    },
  },
  mounted() {
    this.welcome_msg =
      this.welcome_msg_array[
        Math.floor(Math.random() * this.welcome_msg_array.length)
      ];
  },
};
</script>

<style scoped>
.container {
  color: white;
  display: flex;
  position: relative;
  justify-content: center;
  min-height: auto;
}
</style>
