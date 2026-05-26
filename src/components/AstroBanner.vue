<script lang="js" setup>
import SocialsBar from './global/SocialsBar.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateTo = (path) => {
  router.push(path);
}
</script>

<template>
  <div class="astro">
    <div class="socials">
      <SocialsBar />
    </div>
    <h1>Hi I'm Alex</h1>
    <p>Full Stack Engineer & Ethical Hacker</p>
    <p>My passion is to create and secure the future of technology</p>
    <div class="page-links">
      <button @click="navigateTo('/about')">About Me</button>
      <button @click="navigateTo('/projects')">Projects</button>
      <button @click="navigateTo('/writeups')">Write-Ups</button>
    </div>
  </div>
</template>

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
