<template>
  <!-- <Honeycomb id="projects-background" /> -->
  <div class="projects-container" ref="projects-banner">
    <ProjectCassette
      v-for="project in projects"
      :key="project.title"
      :project="project"
    />
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
        // {
        //   title: "Weather App",
        //   description: "This is a description of project 3",
        //   image: "https://via.placeholder.com/150",
        //   link: "https://www.google.com",
        //   language: "JavaScript",
        //   type: "Web",
        // },
        {
          title: "2048 in Python",
          description: "2048 mathematical tile game made using PyGame.",
          image: "/2048_Pygame-screenshot.png",
          link: "https://github.com/AstroAspie/2048_pygame",
          language: "Python",
          type: "Game",
        },
        {
          title: "William's Water Sport Rentals",
          description: "Client Website for William's Water Sport Rentals. Built using Vue.js and Vuetify.",
          image: "/Williams-Water-Sport-Rentals-Screenshot.png",
          inProgress: true,
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
    }
  },
};
</script>

<style scoped>
#projects-background {
  position: absolute;
  width: 100vw;
  height: 100%;
  opacity: 0.2;
  z-index: -1;
}

.projects-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
  gap: 20px;
}
</style>