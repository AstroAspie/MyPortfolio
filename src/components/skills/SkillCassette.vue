<template>
  <v-card
    class="skill-container"
    max-width="344"
    outlined
    tile
  >
    <v-card-title>
      <span class="skill-title">{{ skill.name }}</span>
    </v-card-title>
    <v-card-text>
      {{ skill.score }}
    </v-card-text>
  </v-card>
</template>

<script>

export default {
  name: "SkillCassette",
  props: {
    skill: {
      type: Object,
      required: true,
    },
  },
  data() {
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.skill-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  width: 100px;
  border-radius: 50px;
  border: solid 5px var(--color-border);
}

.skill-title {
  font-size: 70%;
  font-weight: bold;
}

.skill-container:hover {
  border: solid 5px var(--color-background);
}
</style>