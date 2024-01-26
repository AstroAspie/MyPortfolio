<template>
  <div class="banner-container">
    <h1 class="banner-title">Skills</h1>
    <div class="skills-container">
      <SkillCassette
        v-for="skill in skills_list"
        :key="skill.name"
        :skill="skill"
      />
    </div>
  </div>
</template>

<script>
import SkillCassette from "./SkillCassette.vue";

export default {
  name: "SkillsBanner",
  components: { SkillCassette },
  data() {
    return {
      skills_list: [
        { name: 'HTML', score: 98 },
        { name: 'CSS', score: 90 },
        { name: 'JavaScript', score: 95 },
        { name: 'Python', score: 90 },
      ]
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.banner-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
}

.banner-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.skills-container {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
</style>
