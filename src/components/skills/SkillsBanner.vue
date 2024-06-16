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
import SkillCassette from './SkillCassette.vue';

export default {
  name: "SkillsBanner",
  components: { SkillCassette },
  data() {
    return {
      tags: [{
        backend: 'BE',
        frontend: 'FE',
        infrastructure: 'INF', 
        database: 'DB',
        IoT: 'IoT',
        midc: 'misc'
      }],
      skills_list: [
        { name: 'HTML', score: 100, type: 'FE'},
        { name: 'CSS', score: 95, type: 'FE' },
        { name: 'JavaScript', score: 98, type: 'FS' },
        { name: 'Python', score: 95, type: 'BE' },
        { name: 'Java', score: 80, type: 'BE' },
        { name: 'C/C++', score: 70, type: 'BE' },
        { name: 'C#', score: 95, type: 'FS' },
        { name: 'SQL', score: 90, type: 'DB' },
        { name: 'Docker', score: 80, type: 'INF' },
        { name: 'React\nNative', score: 70, type: 'FE' },
        { name: 'Bootstrap', score: 90, type: 'FE' },
        { name: 'Vuetify', score: 98, type: 'FE' },
        { name: 'Material UI', score: 70, type: 'FE' },
        { name: 'Tailwind CSS', score: 90, type: 'FE' },
        { name: 'jQuery', score: 90, type: 'FE' },
        { name: 'Django', score: 90, type: 'BE' },
        { name: 'ASP.NET', score: 95, type: 'BE' },
        { name: 'Blazor', score: 90, type: 'FE' },
        { name: 'Electron', score: 60, type: 'FE' },
        { name: 'Unity', score: 90, type: 'GD' },
        { name: 'Unreal\nEngine', score: 70, type: 'GD' },
        { name: 'React', score: 90, type: 'FE' },
        { name: 'Vue', score: 95, type: 'FE' },
        { name: 'Node', score: 90, type: 'BE' },
        { name: 'Express', score: 90, type: 'BE' },
        { name: 'MongoDB', score: 90, type: 'DB' },
        { name: 'Git', score: 100, type: 'INF' },
        { name: 'GitHub', score: 100, type: 'INF' },
        { name: 'Linux', score: 95, type: 'INF' },
        { name: 'Windows', score: 95, type: 'INF' },
        { name: 'MacOS', score: 90, type: 'INF' },
        { name: 'Arduino', score: 60, type: 'IoT' },
        { name: 'Raspberry Pi', score: 80, type: 'IoT' },
        { name: 'GIMP', score: 75, type: 'misc' },
      ]
    }
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
