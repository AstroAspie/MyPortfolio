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
    <div class="hero-content">
      <div class="avatar-placeholder">
        <span class="avatar-initials">AS</span>
      </div>
      <h1>Alex Smith</h1>
      <p class="title">Full Stack Engineer</p>
      <p class="tagline">Building innovative solutions that make a difference.</p>
      <div class="page-links">
        <button @click="navigateTo('/about')">About Me</button>
        <button @click="navigateTo('/projects')">Projects</button>
        <button @click="navigateTo('/blog')">Blog</button>
      </div>
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
}

.socials {
  position: absolute;
  top: 24px;
  right: 24px;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.avatar-placeholder {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.4));
  border: 2px solid rgba(99, 102, 241, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}

.avatar-initials {
  font-size: 3rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.85);
}

h1 {
  font-size: 3.5rem;
  font-weight: bold;
  margin: 0 0 12px;
  color: rgba(255, 255, 255, 0.95);
}

.title {
  font-size: 1.5rem;
  color: rgba(139, 92, 246, 0.9);
  margin: 0 0 20px;
  font-weight: 500;
}

.tagline {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.75);
  margin: 0 0 40px;
}

.page-links {
  display: flex;
  gap: 16px;
}

.page-links button {
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  padding: 14px 36px;
  border: 1px solid rgba(99, 102, 241, 0.5);
  border-radius: 8px;
  font-size: 1.15rem;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
}

.page-links button:hover {
  background: rgba(139, 92, 246, 0.2);
  border-color: rgba(139, 92, 246, 0.8);
}

@media (max-width: 600px) {
  .page-links {
    flex-direction: column;
    gap: 12px;
  }
}
</style>
