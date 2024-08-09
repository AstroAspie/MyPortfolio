<template>
  <div class="container">
    <h1 class="banner-title">Skills Board</h1>
    <div class="skills-nav">
      <div class="sort-container">
          <span class="sort-subtext">Sort:</span>
          <div class="sort-option">
            <button @click="sortByScore('score')">skill level</button>
            <div class="ascending" @click="ascending = !ascending">
              <span v-if="!ascending">⬇️</span>
              <span v-else>⬆️</span>
            </div>
          </div>
        </div>
        <div class="nav-bar">
          <ul>
            <li v-for="category in categories" :key="category" @click="setCategory(category.tags)">{{ category.name }}</li>
            <li @click="resetSort">🔃</li>
          </ul>
        </div>
    </div>
    <div class="banner-container">
      <div class="skills-container">
        <SkillCassette
          v-for="skill in sorted"
          :key="skill.name"
          :skill="skill"
          class="skill-item"
        />
      </div>
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
        misc: 'misc',
        game: "GD",
        cloud: "C"
      }],
      categories: [
        { name: "Web-Dev", tags: ["BE", "FE", "DB"] },
        { name: "Game-Dev", tags: ["GD"] },
        { name: "Systems & Arcitecture", tags: ["INF", "IOT"] },
        { name: "Cloud", tags: ["C"] },
      ],
      ascending: false,
      sorted: [],
      sortSelect: null,
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
        { name: 'AWS', score: 85, type: 'C'},
        { name: 'Azure', score: 80, type: 'C' }
      ]
    }
  },
  watch: {
    ascending() {
      this.sortByScore();
    }
  },
  methods: {
    sortByScore() {
      if (!this.ascending) {
        this.sorted = this.skills_list.slice().sort(function(a, b){
          return (a.score < b.score) ? 1 : -1;
        });
      } else {
        this.sorted = this.skills_list.slice().sort(function(a, b){
          return (a.score > b.score) ? 1 : -1;
        });
      }
    },
    setCategory(tags) {
      console.log(`Testing: ${tags}`)
      let temp = []
      for (let skill of this.skills_list) {
        for (let tag of tags) {
          console.log(`Skill type: ${skill.type} : Tag: ${tag}`)
          if (skill.type.toLowerCase() === tag.toLowerCase()) {
            temp.push(skill)
          }
        }
      }
      this.sorted = temp;
      console.log(`Sorted: ${this.sorted.length}`);
      console.log(`Skills: ${this.skills_list.length}`)
      // this.sorted = this.skills_list.filter(skill => {
      //   tags.includes(skill)
      // })
    },
    resetSort() {
      this.sorted = this.skills_list;
    }
  },
  created() {
    if (this.sorted.length == 0)
      this.sorted = this.skills_list;
  }
};
</script>

<style scoped>
hr {
  rotate: 90deg;
}

.container {
  height: 100%;
  width: 100%;
}


.banner-title {
  position: relative;
  font-size: 2rem;
  font-weight: bold;
  text-wrap: nowrap;
  margin: 10px 49%;
}

.skills-nav {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.nav-bar {
  position: relative;
  margin: 0 auto;
}

.nav-bar ul {
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.nav-bar li {
  text-decoration: none;
  list-style: none;
}

.nav-bar li:hover {
  color: green;
}

.sort-container {
  position: relative;
  left: 0;
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 0;
  margin-bottom: 5%;
}

.sort-option {
  display: flex;
  align-content: center;
  color: white;
  font-size: 14px;
  border: solid 1px white;
  border-radius: 10px;
  padding: 10px;
  min-width: 10%;
}

.ascending {
  display: inline;
  padding-left: 4px;
  cursor: pointer;
}

.banner-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
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
