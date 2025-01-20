<template>
  <v-card class="cassette-card project-cassette" @mouseenter="mouseOver" @mouseleave="mouseOver" :style="hoverStyle()">
    <v-img :src="`/MyPortfolio/images/${project.image}`" class="project-image"></v-img>
    <v-card-title class="project-title">{{ project.title }}</v-card-title>
    <v-card-text class="project-desc">{{ project.description }}</v-card-text>
    <div class="project-langs">
      <img v-for="logo in incLogos" :key="logo.name" :src="logo.logo" :alt="logo.name" class="project-lang-item" />
    </div>
    <v-card-actions class="project-link-btn-container">
      <div>
        <v-btn :href="project.link" class="project-link-btn" target="_blank" rounded="xl">View Project</v-btn>
      </div>
      <div v-if="project.demo">
        <v-btn :href="project?.demo" class="project-link-btn" target="_blank" rounded="xl">View Demo</v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "ProjectCassette",
  props: {
    project: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      hovering: false,
      incLogos: [],
      logos: [
        { lang: "html", logo: "/MyPortfolio/images/html-5.svg" },
        { lang: "css", logo: "/MyPortfolio/images/css-3.svg" },
        { lang: "python", logo: "/MyPortfolio/images/python.svg" },
        { lang: "javascript", logo: "/MyPortfolio/images/javascript.svg" },
        { lang: "dotnet", logo: "/MyPortfolio/images/dotnet.svg" },
        { lang: "java", logo: "/MyPortfolio/images/java.svg" },
        { lang: "react", logo: "/MyPortfolio/images/react.svg" },
        { lang: "vue", logo: "/MyPortfolio/images/vue.svg" },
        { lang: "django", logo: "/MyPortfolio/images/django.svg" },
        { lang: "postgresql", logo: "/MyPortfolio/images/postgresql.svg" },
        { lang: "sqlite", logo: "/MyPortfolio/images/sqlite.svg" },
        { lang: "unity", logo: "/MyPortfolio/images/unity.svg" },
        { lang: "unreal engine", logo: "/MyPortfolio/images/unreal-engine.svg" },
        { lang: "docker", logo: "/MyPortfolio/images/docker.svg" },
        { lang: "sql", logo: "/MyPortfolio/images/sql.svg" },
        { lang: "nosql", logo: "/MyPortfolio/images/nosql.svg" },
        { lang: "git", logo: "/MyPortfolio/images/github-mark.png" },
        { lang: "raspberrypi", logo: "/MyPortfolio/images/raspberry-pi.svg" },
        { lang: "aws", logo: "/MyPortfolio/images/aws.svg" },
        { lang: "azure", logo: "/MyPortfolio/images/azure.svg" },
        { lang: "linux", logo: "/MyPortfolio/images/linux.svg" },
        { lang: "microsoft", logo: "/MyPortfolio/images/microsoft.svg" },
        { lang: "mac", logo: "/MyPortfolio/images/mac.svg" }
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
    };
  },
  computed: {
    skillLogos() {
      let imgs = [];
      for (let proj of this.projects) {
        for (let logo of this.logos) {
          if (logo.lang === proj.lan) {
            imgs.push(logo)
          }
        }
      }
      return imgs
    }
  },
  methods: {
    mouseOver() {
      this.hovering = !this.hovering;
    },
    hoverStyle() {
      if (this.hovering) {
        return {
          "box-shadow": "10px 10px #2c3c4c"
        }
      }
    },
    loadLogos() {
      for (let logo of this.logos) {
        for (let lang of this.project.language) {
          if (logo.lang == lang.toLowerCase()) {
            this.incLogos.push(logo)
          }
        }
      }
    }
  },
  mounted() {
    this.loadLogos();
  }
};
</script>

<style lang="scss" scoped>
.project-cassette {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin-bottom: 12px;
  border-radius: 10px;
  flex-shrink: 1;
  max-width: 300px;
  max-height: 600px;
  min-width: 300px;
  min-height: 450px;
}

.project-image {
  background-color: #2a2a2a;
  position: relative;
  max-height: 12rem;
  min-height: 12rem;
  min-width: 80%;
}

.project-title {
  font-size: 1.5rem;
}

.project-desc {
  font-size: 1rem;
}

.project-link-btn-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
}

.project-link-btn {
  background: transparent;
  color: black;
  border: 1px solid var(--color-border);
  border-radius: 0;
}

.project-cassette:hover {
  box-shadow: 0 0 20px 0 rgba(0, 0, 255, 0.5);
}

.project-link-btn:hover {
  background: #2a3a4a;
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: 0;
}

.project-langs {
  display: flex;
  flex-direction: row;
}

.project-lang-item {
  max-width: 40px;
  border-radius: 50%;
  margin: 5px;
}

/* Mobile devices */
@media (max-width: 480px) {
  .project-cassette {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-height: 200px;
    width: 180px;
    margin-bottom: 12px;
    border-radius: 10px;
    flex-shrink: 1;
    max-width: 300px;
    max-height: 600px;
    min-width: 300px;
    min-height: 450px;
  }

}

/* Tablet devices */
@media (max-width: 768px) {}
</style>