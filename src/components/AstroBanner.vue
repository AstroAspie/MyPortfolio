<template>
  <div class="welcome">
    <h1>{{ welcome_msg }}</h1>
    <v-buutton
      color="primary"
      class="mx-auto"
      @click="$router.push({ name: 'About' })"
    ></v-buutton>
  </div>
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

<style lang="scss" scoped>
.welcome {
  position: relative;
  top: 0;
  width: 100%;
  height: 80px;
  z-index: 1;
  background: var(--color-background);
  border-bottom: 1px solid var(--color-border);

  h1 {
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
    margin: 0 auto;
    top: 65%;
  }
}
</style>
