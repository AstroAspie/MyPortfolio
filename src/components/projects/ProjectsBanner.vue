<template>
  <div class="projects">
    <div class="project-cassette">
      <ProjectCassette
        v-for="project in projects"
        :key="project.title"
        :project="project"
      />
    </div>
  </div>
</template>


<script>
export default {
  name: "ProjectsBanner",
  data() {
    return {
      projects: [
        {
          title: "Project 1",
          description: "This is a description of project 1",
          image: "https://via.placeholder.com/150",
          link: "https://www.google.com",
        },
        {
          title: "Project 2",
          description: "This is a description of project 2",
          image: "https://via.placeholder.com/150",
          link: "https://www.google.com",
        },
        {
          title: "Project 3",
          description: "This is a description of project 3",
          image: "https://via.placeholder.com/150",
          link: "https://www.google.com",
        },
        {
          title: "Project 4",
          description: "This is a description of project 4",
          image: "https://via.placeholder.com/150",
          link: "https://www.google.com",
        },
        {
          title: "Project 5",
          description: "This is a description of project 5",
          image: "https://via.placeholder.com/150",
          link: "https://www.google.com",
        },
        {
          title: "Project 6",
          description: "This is a description of project 6",
          image: "https://via.placeholder.com/150",
          link: "https://www.google.com",
        },
        {
          title: "Project 7",
          description: "This is a description of project 7",
          image: "https://via.placeholder.com/150",
          link: "https://www.google.com",
        },
        {
          title: "Project 8",
          description: "This is a description of project 8",
          image: "https://via.placeholder.com/150",
          link: "https://www.google.com",
        },
        {
          title: "Project 9",
          description: "This is a description of project 9",
          image: "https://via.placeholder.com/150",
          link: "https://www.google.com",
        },
        {
          title: "Project 10",
          description: "This is a description of project 10",
          image: "https://via.placeholder.com/150",
          link: "https://www.google.com",
        }
      ],
      selected_project: null,
    };
  },
  methods: {},
};
</script>

<style scoped>
</style>