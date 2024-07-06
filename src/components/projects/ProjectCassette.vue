<template>
  <v-card class="cassette-card project-cassette" @mouseenter="mouseOver" @mouseleave="mouseOver" :style="hoverStyle()">
    <v-img :src="`/MyPortfolio/${project.image}`" class="project-image"></v-img>
    <v-card-title class="project-title">{{ project.title }}</v-card-title>
    <v-card-text class="project-desc">{{ project.description }}</v-card-text>
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
      hovering: false
    };
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
          "box-shadow": "10px 10px lightblue"
        }
      }
    }
  },
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
}

.project-image {
  background-color: #2a2a2a;
  position: relative;
  max-height: 50%;
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

</style>