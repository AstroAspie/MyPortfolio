<template>
  <v-card class="project-cassette">
    <v-img :src="project.image" class="project-image"></v-img>
    <v-card-title class="project-title">{{ project.title }}</v-card-title>
    <v-card-text class="project-desc">{{ project.description }}</v-card-text>
    <v-card-actions>
      <div class="project-link-btn-container">
        <v-btn :href="project.link" class="project-link-btn" target="_blank">View Project</v-btn>
        <v-btn @click="likeProject(project)" class="project-link-btn">
          <v-icon icon="mdi-heart" color="white"></v-icon>
        </v-btn>
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
.project-cassette {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 24rem;
}

.project-image {
  margin-top: 3px;
  height: 10rem;
}

.project-title {
  font-size: 1.5rem;
}

.project-desc {
  font-size: 1rem;
}

.project-link-btn-container {
  display: flex;
  justify-content: center;
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