<template>
  <v-card class="cassette-card project-cassette">
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
    return {};
  },
  methods: {
    likeProject(project) {
      console.log("Liked Project: ", project.title);
    }
  },
};
</script>

<style lang="scss" scoped>
.cassette-card:hover front-side {
  transform: rotateY('180deg');
}

.cassette-card {
  width: 24rem;
  height: 28rem;
  transform-style: preserve-3d;
  transition: transform 0.5s;
  border-radius: 10px;
  perspective: 1000px;
}

.project-cassette {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 28rem;
  width: 24rem;
  margin-bottom: 12px;
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
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
}

.project-link-btn:hover {
  background: var(--color-background);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: 0;
}
</style>