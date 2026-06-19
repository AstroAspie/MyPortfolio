<script setup>
import { ref, computed } from 'vue';
import ProjectCassette from '../projects/ProjectCassette.vue';

const props = defineProps({
  projects: {
    type: Array,
    required: true
  },
  projectsToShow: {
    type: Number,
    default: 4
  }
});

const currentIndex = ref(0);
const totalSlides = computed(() => Math.max(props.projects.length, 1));

const prevSlide = () => {
  const step = props.projectsToShow;
  currentIndex.value = Math.max(currentIndex.value - step, 0);
};

const nextSlide = () => {
  const step = props.projectsToShow;
  const next = currentIndex.value + step;
  if (next >= props.projects.length) {
    currentIndex.value = 0;
  } else {
    currentIndex.value = next;
  }
};

const translateX = computed(() => {
  return -(currentIndex.value / totalSlides.value) * 100;
});
</script>

<template>
  <div class="slider-container">
    <button @click="prevSlide" class="nav-btn prev-btn">&#8249;</button>
    <div class="slider">
      <div class="slider-track" :style="{ transform: `translateX(${translateX}%)`, '--projectsToShow': projectsToShow }">
        <div class="slide" v-for="(project, index) in projects" :key="project.title + index">
          <div class="card">
            <ProjectCassette :project="project" />
          </div>
        </div>
      </div>
    </div>
    <button @click="nextSlide" class="nav-btn next-btn">&#8250;</button>
  </div>
</template>

<style scoped>
.slider-container {
  position: relative;
  width: 80%;
  margin: auto;
  overflow: hidden;
  background: none;
}

.slider {
  display: flex;
  width: 100%;
  overflow: hidden;
  background: none;
  margin: 0 30px;
}

.slider-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  flex: 0 0 calc(100% / var(--projectsToShow));
  box-sizing: border-box;
}

.card {
  padding: 20px;
  background: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: solid 1px white;
  border-radius: 50px;
  padding-bottom: 20px;
  font-size: 4rem;
  cursor: pointer;
  color: #8b5cf6;
  z-index: 10;
}

.nav-btn:hover {
  border: solid 1px #8b5cf6;
}

.prev-btn {
  left: 10px;
}

.next-btn {
  right: 10px;
}
</style>
