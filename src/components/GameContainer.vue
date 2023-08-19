<template>
  <div>
    <canvas id="canvas" width="800" height="600"></canvas>
  </div>
</template>

<script>
export default {
  name: "GameContainer",
  props: {
    game: {
      title: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    startGame() {
      console.log("Game Started");
    },
  },
};
</script>

<style></style>
