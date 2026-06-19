<script setup>
import SocialsBar from './SocialsBar.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateTo = (path) => {
  router.push(path)
}
</script>

<template>
  <footer class="app-footer">
    <div class="footer-inner">
      <div class="footer-section">
        <h3 class="footer-heading">Navigation</h3>
        <nav class="footer-nav">
          <button @click="navigateTo('/')">Home</button>
          <button @click="navigateTo('/about')">About</button>
          <button @click="navigateTo('/projects')">Projects</button>
          <button @click="navigateTo('/blog')">Blog</button>
        </nav>
      </div>
      <div class="footer-section">
        <h3 class="footer-heading">Connect</h3>
        <SocialsBar />
      </div>
      <div class="footer-section">
        <h3 class="footer-heading">Colophon</h3>
        <p class="footer-text">
          Built with Vue 3, Vite &amp; Vuetify.
        </p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; {{ new Date().getFullYear() }} Alex Smith. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  border-top: 1px solid rgba(99, 102, 241, 0.2);
  padding: 48px 24px 24px;
  margin-top: auto;
}

.footer-inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto 32px;
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 160px;
}

.footer-heading {
  font-size: 0.9rem;
  font-weight: 600;
  color: rgba(139, 92, 246, 0.7);
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-nav button {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.95rem;
  text-align: left;
  padding: 0;
  cursor: pointer;
  transition: color 0.2s;
}

.footer-nav button:hover {
  color: rgba(139, 92, 246, 0.8);
}

.footer-text {
  color: rgba(255, 255, 255, 0.55);
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.5;
}

.footer-bottom {
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 20px;
}

.footer-bottom p {
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.85rem;
  margin: 0;
}
</style>
