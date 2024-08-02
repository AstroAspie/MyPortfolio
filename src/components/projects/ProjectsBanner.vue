<template>
  <div class="banner-container">
    <div class="projects-container">
      <div v-for="project in projects" :key="project.title" class="cassette">
        <ProjectCassette
          :project="project"
        />
      </div>
    </div>
    <div class="page-link" @mouseenter="hoveringLink = !hoveringLink" @mouseleave="hoveringLink = !hoveringLink" @click="goToProjects()">
      <span v-if="hoveringLink">🚀</span>
      View All My Projects
      <span v-if="hoveringLink">🚀</span>
    </div>
  </div>
</template>


<script>
import Honeycomb from "../global/Honeycomb.vue";
import ProjectCassette from "./ProjectCassette.vue";
export default {
  name: "ProjectsBanner",
  components: {
    ProjectCassette,
    // eslint-disable-next-line vue/no-unused-components
    Honeycomb
  },
  data() {
    return {
      hoveringLink: false,
      projects: [
        {
          title: "Crypto Currency Tracker",
          description: "This is a crypto currency tracker using Nuxt.js and the CoinGecko API.",
          image: "/Crypto-Watcher-Screenshot.png",
          link: "https://github.com/AstroAspie/crypto-watcher",
          demo: "https://crypto-watcher-lou8f328b-astroaspies-projects.vercel.app",
          language: "JavaScript",
          type: "Web",
        },
        {
          title: "Space Invaders Clone",
          description: "Space Invaders clone using HTML, CSS, and JavaScript.",
          image: "/Space-Invaders-Clone-Screenshot.png",
          link: "https://github.com/AstroAspie/space_invaders_clone",
          demo: "https://astroaspie.github.io/space_invaders_clone",
          language: "HTML/CSS/JS",
          type: "Game",
        },
        {
          title: "2048 in Python",
          description: "2048 mathematical tile game made using PyGame.",
          image: "/2048_Pygame-screenshot.png",
          link: "https://github.com/AstroAspie/2048_pygame",
          language: "Python",
          type: "Game",
        },
        {
          title: "Text to Speech API",
          description: "Simple RestAPI using FastAPI to return mp3 files converted from a given text string",
          image: "",
          type: ["API"],
          language: ["Python", "FastAPI"]
        }
      ],
      selected_project: null,
    };
  },
  mounted() {
    this.alignBanner();
  },
  methods: {
    alignBanner() {
      if (this.$router.currentRoute == "Projects") {
        this.$refs["projects-banner"].style = {
          "margin-top": "12%"
        };
      }
    },
    goToProjects() {
      this.$router.push("/projects");
    }
  },
};
</script>

<style scoped>
.banner-container {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
}

#projects-background {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.2;
  z-index: -1;
}

.projects-container {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  text-align: center;
  margin-top: 2%;
  height: 90%;
  gap: 20px;
}

.page-link {
  position: relative;
  margin: 2rem auto;
  font-size: 36px;
  cursor: pointer;
}

.cassette {
  display: flex;
  max-width: 300px;
  max-height: 400px;
}
</style>