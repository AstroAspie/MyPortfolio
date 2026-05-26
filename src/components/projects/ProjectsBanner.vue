<template>
  <div class="banner-container" ref="projectsBanner">
    <h1 class="banner-title">Projects</h1>
    <img id="projects-background" src="/images/projects-backdrop.png" alt="project-background" />
    <div class="projects-bio"></div>
    <div class="projects-container">
      <ProjectCarousel />
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import ProjectCarousel from './ProjectCarousel.vue';

const router = useRouter();
const hoveringLink = ref(false);
const selected_project = ref(null);
const projectsBanner = ref(null);

const alignBanner = () => {
  if (router.currentRoute.value.name === "Projects") {
    if (projectsBanner.value) {
      projectsBanner.value.style.marginTop = "12%";
    }
  }
};

const goToProjects = () => {
  router.push("/projects");
};

onMounted(() => {
  alignBanner();
});
</script>

<style scoped>
.banner-container {
  position: relative;
  top: 0;
  display: flex;
  overflow-y: hidden;
  width: 100%;
  height: 100%;
}

.banner-title {
  font-style: italic;
  font-weight: bold;
  position: relative;
  margin: 0 auto;
  font-size: 3rem;
}

#projects-background {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.2;
  z-index: -1;
}

.projects-container {
  position: relative;
  z-index: 10;
}

.page-link {
  position: relative;
  margin: 2rem auto;
  font-size: 36px;
  cursor: pointer;
}

.cassette {
  display: flex;
  max-width: 300px;
  max-height: 400px;
}

.banner-container {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
}

#projects-background {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.2;
  z-index: -1;
}

.projects-container {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  text-align: center;
  margin-top: 2%;
  height: 90%;
  gap: 20px;
}

.page-link {
  position: relative;
  margin: 2rem auto;
  font-size: 36px;
  cursor: pointer;
}

.cassette {
  display: flex;
  max-width: 300px;
  max-height: 400px;
}

/* Tablet devices */
@media (max-width: 768px) {
  .banner-container {
    position: relative;
    top: 0;
    display: flex;
    overflow-y: hidden;
    width: 100%;
    height: 80%;
  }

  .projects-container {
    flex-direction: column;
    justify-content: center;
    height: auto;
    margin-top: 5%;
  }

  .page-link {
    font-size: 28px;
  }

  .cassette {
    max-width: 100%;
    max-height: 300px;
  }
}

/* Mobile devices */
@media (max-width: 600px) {
  .banner-container {
    position: relative;
    top: 0;
    display: flex;
    overflow-y: hidden;
    width: 100%;
    height: 80%;
  }

  .projects-container {
    flex-direction: column;
    justify-content: center;
    height: auto;
    margin-top: 5%;
  }

  .page-link {
    font-size: 24px;
  }

  .cassette {
    max-width: 100%;
    max-height: 250px;
  }
}
</style>