<template>
  <div class="contact">
    <h1>Contact Me</h1>
    <p>Feel free to reach out to me on any of the following platforms:</p>
    <div class="socials">
      <a
        v-for="social in socials"
        :key="social.name"
        :href="social.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i :class="social.icon"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactView",
  data() {
    return {
      socials: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/brandon-lee-3b3b3b3b/",
          icon: "fab fa-linkedin",
        },
        {
          name: "GitHub",
          url: "www.github.com/astroaspie",
          icon: "fab fa-github",
        },
        {
          name: "Email",
          url: "mailto:alex.tekheartproductions@gmail.com",
          icon: "fas fa-envelope",
        },
      ]
    }
  }
};
</script>

<style scoped>
.contact {
  background-color: #35abbb;
  margin: 0 auto;
  overflow-x: hidden;
  height: 100vh;
}

.socials {
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
  height: 8rem;
  width: 8rem;
}


</style>