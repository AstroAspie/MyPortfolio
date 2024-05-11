<template>
  <div class="projects-container">
    <ProjectCassette
      v-for="project in projects"
      :key="project.title"
      :project="project"
    />
  </div>
</template>


<script>
import ProjectCassette from "./ProjectCassette.vue";
export default {
  name: "ProjectsBanner",
  components: {
    ProjectCassette,
  },
  data() {
    return {
      projects: [
        {
          title: "Crypto Currency Tracker",
          description: "This is a crypto currency tracker using Nuxt.js and the CoinGecko API.",
          image: "/images/Crypto-Watcher-Screenshot.png",
          link: "https://github.com/AstroAspie/crypto-watcher",
          language: "JavaScript",
          type: "Web",
        },
        {
          title: "Space Invaders Clone",
          description: "Space Invaders clone using HTML, CSS, and JavaScript.",
          image: "/images/Space-Invaders-Clone-Screenshot.png",
          link: "https://github.com/AstroAspie/space_invaders_clone",
          demo: "@/demos/space-invaders-clone/index.html",
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
          image: "/images/2048_Pygame-screenshot.png",
          link: "https://github.com/AstroAspie/2048_pygame",
          language: "Python",
          type: "Game",
        },
        {
          title: "William's Water Sport Rentals",
          description: "Client Website for William's Water Sport Rentals. Built using Vue.js and Vuetify.",
          image: "/images/Williams-Water-Sport-Rentals-Screenshot.png",
          inProgress: true,
        }
      ],
      selected_project: null,
    };
  },
  mounted() {
    // this.drawBackground();
  },
  methods: {
    // draw fancy svg background
    drawBackground() {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("width", "100%");
      svg.setAttribute("height", "100%");
      svg.setAttribute("viewBox", "0 0 100 100");
      svg.setAttribute("preserveAspectRatio", "none");
      svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
      svg.innerHTML = `
        <defs>
          <pattern id="pattern" width="1" height="1" patternUnits="objectBoundingBox">
            <image xlink:href="/images/abstract-background.jpg" width="100" height="100" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#pattern)" />
      `;
      document.querySelector(".projects-container").prepend(svg);
    },
  },
};
</script>

<style scoped>
.projects-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
  gap: 20px;
}
</style>