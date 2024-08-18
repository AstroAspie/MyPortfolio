<template>
  <div class="container">
    <h1 class="banner-title">Skills Board</h1>
    <div class="skills-nav">
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
        { name: 'Python', score: 98, type: 'BE' },
        { name: 'Java', score: 80, type: 'BE' },
        // { name: 'C/C++', score: 70, type: 'BE' },
        { name: 'SQL', score: 90, type: 'DB' },
        { name: 'NoSQL', score: 90, type: 'DB' },
        { name: 'Docker', score: 80, type: 'INF' },
        { name: 'Dotnet', score: 95, type: 'BE' },
        { name: 'Unity', score: 90, type: 'GD' },
        { name: 'Unreal Engine', score: 70, type: 'GD' },
        { name: 'Git', score: 100, type: 'INF' },
        { name: 'RaspberryPi', score: 80, type: 'IoT' },
        { name: 'AWS', score: 85, type: 'C'},
        { name: 'Azure', score: 80, type: 'C' },
        { name: 'Linux', score: 95, type: 'INF' },
        { name: 'Microsoft', score: 95, type: 'INF' },
        { name: 'Mac', score: 90, type: 'INF' },
      ],
      frameworks: [
        { name: 'React', score: 90, type: 'FE', lang: 'javascript' },
        { name: 'Vue', score: 95, type: 'FE', lang: 'javascript' },
        { name: 'Express', score: 90, type: 'BE', lang: 'javascript' },
        { name: 'MongoDB', score: 90, type: 'DB', lang: 'NoSQL' },
        { name: 'React Native', score: 70, type: 'Mobile', lang: 'javascript' },
        { name: 'Android Studio', score: 100, type: 'Mobile' },
        { name: 'Bootstrap', score: 90, type: 'FE', lang: 'css' },
        { name: 'Tailwind', score: 90, type: 'FE', lang: 'css' },
        { name: 'jQuery', score: 90, type: 'FE', lang: 'javascript' },
        { name: 'Django', score: 90, type: 'BE', lang: 'python' },
        { name: 'FastAPI', score: 90, type: 'BE', lang: 'python' },
        { name: 'PyGame', score: 80, type: 'GD', lang: 'python' }, 
        { name: 'Blazor', score: 90, type: 'FE', lang: '.NET' },
        { name: 'Electron', score: 60, type: 'FE', lang: 'javascript' },
        { name: 'GitHub', score: 100, type: 'INF', lang: 'git' },
      ],
      logos: [
        { lang: "html", logo: "/html-5.svg" },
        { lang: "css", logo: "/css-3.svg" },
        { lang: "python", logo: "/python.svg" },
        { lang: "javascript", logo: "/javascript.svg" },
        { lang: "dotnet", logo: "/dotnet.svg" }
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
  font-size: 2.2rem;
  font-weight: bold;
  text-wrap: nowrap;
  margin: 10px 45%;
}

.skills-nav {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0 auto;
}

.nav-bar {
  position: relative;
  margin: 20px auto;
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
  max-width: 65%;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 10px;
  margin-top: 2%;
  flex-wrap: wrap;
}

/* Mobile devices */
@media (max-width: 600px) {
  .banner-title {
    font-size: 2.2rem;
    font-weight: bold;
    text-wrap: nowrap;
    margin: 10px 30%;
  }

  .skills-container {
    display: flex;
    max-width: 65%;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 2%;
    flex-wrap: wrap;
  }
}

/* Tablet devices */
@media (max-width: 768px) {

}
</style>
