<template>
  <div class="astro">
    <div class="socials">
      <SocialsBar />
    </div>
    <h1>Hi I'm Alex</h1>
    <p>Full Stack Engineer & Ethical Hacker</p>
    <p>My passion is to create and secure the future of technology</p>
    <div class="page-links">
      <button @click="this.$router.push('/about')">About Me</button>
      <button @click="this.$router.push('/projects')">Projects</button>
      <button @click="this.$router.push('/writeups')">Write-Ups</button>
    </div>
  </div>
</template>

<script>
// import MyBio from './global/MyBio.vue';
import SocialsBar from './global/SocialsBar.vue';

export default {
  name: "AstroBanner",
  components: { SocialsBar },
  data() {
    return {
      welcome_msg_array: [
        "Full Stack Engineer",
      ],
      welcome_msg: "",
    };
  },
  methods: {
  },
  mounted() {
    this.welcome_msg =
      this.welcome_msg_array[
      Math.floor(Math.random() * this.welcome_msg_array.length)
      ];
  },
};
</script>

<style scoped>
.astro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.5em;
}

.page-links {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
}

.page-links button {
  text-decoration: none;
  color: var(--text-color);
  padding: 3px 40px;
  border: 1px solid blue;
  border-radius: 5px;
}

.page-links button:hover {
  background-color: blue;
  color: white;
}

/* Tablet devices */
@media (max-width: 768px) {}

/* Mobile devices */
@media (max-width: 600px) {}

@media (max-width: 486px) {}
</style>
