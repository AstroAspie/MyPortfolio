<template>
  <v-card class="cassette-card project-cassette" @mouseenter="mouseOver" @mouseleave="mouseOver" :style="hoverStyle()">
    <v-img :src="`/MyPortfolio/${project.image}`" class="project-image"></v-img>
    <v-card-title class="project-title">{{ project.title }}</v-card-title>
    <v-card-text class="project-desc">{{ project.description }}</v-card-text>
    <div class="project-langs">
      <img v-for="logo in incLogos" :key="logo.name" :src="logo.logo" :alt="logo.name" class="project-lang-item" />
    </div>
    <v-card-actions class="project-link-btn-container">
      <div>
        <v-btn :href="project.link" class="project-link-btn" target="_blank">View Project</v-btn>
      </div>
      <div v-if="project.demo">
        <v-btn :href="project?.demo" class="project-link-btn" target="_blank">View Demo</v-btn>
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
        { lang: "html", logo: "/MyPortfolio/html-5.svg" },
        { lang: "css", logo: "/MyPortfolio/css-3.svg" },
        { lang: "python", logo: "/MyPortfolio/python.svg" },
        { lang: "javascript", logo: "/MyPortfolio/javascript.svg" },
        { lang: "dotnet", logo: "/MyPortfolio/dotnet.svg" },
        { lang: "java", logo: "/MyPortfolio/java.svg" },
        { lang: "unity", logo: "/MyPortfolio/unity.svg" },
        { lang: "unreal engine", logo: "/MyPortfolio/unreal-engine.svg" },
        { lang: "docker", logo: "/MyPortfolio/docker.svg" },
        { lang: "sql", logo: "/MyPortfolio/sql.svg" },
        { lang: "nosql", logo: "/MyPortfolio/nosql.svg" },
        { lang: "git", logo: "/MyPortfolio/github-mark.png" },
        { lang: "raspberrypi", logo: "/MyPortfolio/raspberry-pi.svg"},
        { lang: "aws", logo: "/MyPortfolio/aws.svg" },
        { lang: "azure", logo: "/MyPortfolio/azure.svg" },
        { lang: "linux", logo: "/MyPortfolio/linux.svg" },
        { lang: "microsoft", logo: "/MyPortfolio/microsoft.svg" },
        { lang: "mac", logo: "/MyPortfolio/mac.svg" }
      ]
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
    likeProject(project) {
      console.log("Liked Project: ", project.title);
    },
    mouseOver() {
      this.hovering = !this.hovering;
    },
    hoverStyle() {
      if (this.hovering) {
        return {
          "box-shadow": "10px 10px #7c7c7c"
        }
      }
    },
    loadLogos() {
      for (let logo of this.logos) {
        for (let lang of this.project.language) {
          console.log(lang)
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
  background: var(--color-background);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: 0;
}

.project-cassette:hover {
  box-shadow: 0 0 20px 0 rgba(0, 0, 255, 0.5);
}

.project-link-btn:hover {
  background: var(--color-background);
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

/* mobile & tablet styling */

</style>