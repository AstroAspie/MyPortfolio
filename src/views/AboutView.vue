<script setup lang="js">
import SocialsBar from '@/components/global/SocialsBar.vue'
</script>

<template>
  <div class="about-page">
    <section class="hero-section">
      <div class="hero-content">
        <div class="avatar-placeholder">
          <span class="avatar-initials">AS</span>
        </div>
        <h1 class="hero-name">Alex Smith</h1>
        <p class="hero-title">Full Stack Engineer</p>
        <p class="hero-bio">
          I'm a passionate full stack engineer with a love for creating innovative solutions
          that make a difference. With experience in both frontend and backend development,
          I enjoy tackling complex problems and building applications that are not only
          functional but also user-friendly. My goal is to continuously learn and grow as a
          developer while contributing to projects that have a positive impact on users and
          the community.
        </p>
      </div>
    </section>

    <section class="socials-section">
      <h2 class="section-title">Connect With Me</h2>
      <SocialsBar />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.about-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 24px;
}

.hero-section {
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 720px;
  margin-bottom: 64px;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.avatar-placeholder {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.4));
  border: 2px solid rgba(99, 102, 241, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}

.avatar-initials {
  font-size: 2.5rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.85);
}

.hero-name {
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0 0 8px;
  color: rgba(255, 255, 255, 0.95);
}

.hero-title {
  font-size: 1.2rem;
  color: rgba(139, 92, 246, 0.9);
  margin: 0 0 24px;
  font-weight: 500;
}

.hero-bio {
  font-size: 1.05rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.75);
  max-width: 600px;
  margin: 0;
}

.socials-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
  margin: 0 0 16px;
}
</style>
