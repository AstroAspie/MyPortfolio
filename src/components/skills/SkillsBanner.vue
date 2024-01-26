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
        { name: 'Java', score: 80 },
        { name: 'C++', score: 70 },
        { name: 'C', score: 70 },
        { name: 'C#', score: 70 },
        { name: 'SQL', score: 80 },
        { name: 'Docker', score: 80 },
        { name: 'React Native', score: 80 },
        { name: 'Bootstrap', score: 90 },
        { name: 'Vuetify', score: 90 },
        { name: 'Material UI', score: 70 },
        { name: 'Tailwind CSS', score: 90 },
        { name: 'jQuery', score: 90 },
        { name: 'Django', score: 90 },
        { name: 'Flask', score: 90 },
        { name: 'Spring', score: 90 },
        { name: 'ASP.NET', score: 90 },
        { name: 'ASP.NET Core', score: 90 },
        { name: 'Blazor', score: 90 },
        { name: 'Electron', score: 90 },
        { name: 'Unity', score: 90 },
        { name: 'Unreal Engine', score: 70 },
        { name: 'React', score: 90 },
        { name: 'Vue', score: 95 },
        { name: 'Node', score: 90 },
        { name: 'Express', score: 85 },
        { name: 'MongoDB', score: 90 },
        { name: 'Git', score: 95 },
        { name: 'GitHub', score: 95 },
        { name: 'Linux', score: 95 },
        { name: 'Windows', score: 95 },
        { name: 'MacOS', score: 90 },
        { name: 'Arduino', score: 60 },
        { name: 'Raspberry Pi', score: 80 },
        { name: 'GIMP', score: 75 },
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
  flex-wrap: wrap;
  width: 100%;
}

.banner-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.skills-container {
  display: flex;
  max-width: 85%;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 10px;
  flex-wrap: wrap;
}
</style>
