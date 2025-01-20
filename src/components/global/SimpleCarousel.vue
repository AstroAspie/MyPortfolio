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

<script>
import ProjectCassette from '../projects/ProjectCassette.vue';

export default {
  props: {
    projects: {
      type: Array,
      required: true
    },
    projectsToShow: {
      type: Number,
      default: 4
    }
  },
  components: { ProjectCassette },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
    nextSlide() {
      this.currentIndex += this.projectsToShow;
      if (this.currentIndex > this.projects.length) {
        this.currentIndex = 0;
      }
      // if (this.currentIndex < this.projects.length - this.projectsToShow) {
      //   this.currentIndex++;
      // } else {
      //   this.currentIndex = 0;
      // }
    }
  }
};
</script>

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
