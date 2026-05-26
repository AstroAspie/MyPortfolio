<script setup>
import { ref } from 'vue';
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

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};

const nextSlide = () => {
  currentIndex.value += props.projectsToShow;
  if (currentIndex.value > props.projects.length) {
    currentIndex.value = 0;
  }
  // if (currentIndex.value < props.projects.length - props.projectsToShow) {
  //   currentIndex.value++;
  // } else {
  //   currentIndex.value = 0;
  // }
};
</script>

<template>
  <div class="slider-container">
    <button @click="prevSlide" class="nav-btn prev-btn">‹</button>
    <div class="slider">
      <div class="slider-track" :style="{ transform: `translateX(-${currentIndex * 11}%)` }">
        <div class="slide" v-for="(project, index) in projects" :key="index">
          <div class="card">
            <ProjectCassette :project="project" />
          </div>
        </div>
      </div>
    </div>
    <button @click="nextSlide" class="nav-btn next-btn">›</button>
  </div>
</template>

<style scoped>
.slider-container {
  position: relative;
  width: 80%;
  margin: auto;
  overflow: hidden;
  background: none;
  /* No background color */
}

.slider {
  display: flex;
  width: 100%;
  overflow: hidden;
  background: none;
  /* No background color */
  margin: 0 30px;
}

.slider-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  flex: 0 0 calc(100% / var(--projectsToShow));
  /* Flex basis for number of projects to show */
  box-sizing: border-box;
}

.card {
  padding: 20px;
  background: none;
  /* border: 1px solid #ddd; */
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
  color: teal;
  z-index: 10;
}

.nav-btn:hover {
  border: solid 1px teal;
}

.prev-btn {
  left: 10px;
}

.next-btn {
  right: 10px;
}
</style>
