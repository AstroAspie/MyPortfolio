<template>
  <div class="container">{{ welcome_msg }}</div>
</template>

<script>
export default {
  name: "AstroBanner",
  data() {
    return {
      welcome_msg_array: ["Howdy", "Hello, There", "Welcome"],
      welcome_msg: "",
    };
  },
  methods() {},
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
