<template>
  <div class="project-cassette">
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>
    <img :src="project.image" alt="project image" />
    <a :href="project.link" target="_blank">View Project</a>
  </div>
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
};
</script>

<style lang="scss" scoped>
.project-cassette {
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
  height: 4rem;
}
</style>