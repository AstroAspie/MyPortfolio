<template>
  <v-card
    class="skill-container"
    max-width="344"
    outlined
    tile
  >
    <v-card-text>
      {{ skill_score }}
    </v-card-text>
  </v-card>
</template>

<script>
import skillsBanner from "./SkillsBanner.vue";

export default {
  name: "SkillCassette",
  props: {
    skill_score: {
      type: Number,
      required: true,
    },
  },
  data() {
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>