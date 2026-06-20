<template>
  <v-card class="cassette-card project-cassette" @mouseenter="mouseOver" @mouseleave="mouseOver" :style="hoverStyle()">
    <v-img :src="`/MyPortfolio/images/project-thumbnails/${project.image}`" class="project-image"></v-img>
    <v-card-title class="project-title">{{ project.title }}</v-card-title>
    <v-card-text class="project-desc">{{ project.description }}</v-card-text>
    <div class="project-langs">
      <img v-for="logo in incLogos" :key="logo.name" :src="logo.logo" :alt="logo.name" class="project-lang-item" />
    </div>
    <v-card-actions class="project-link-btn-container">
      <div>
        <v-btn :href="project.link" class="project-link-btn" target="_blank" rounded="xl">View Project</v-btn>
      </div>
      <div v-if="project.demo">
        <v-btn :href="project?.demo" class="project-link-btn" target="_blank" rounded="xl">View Demo</v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import logos from '@/data/logos.json'


const props = defineProps({
  project: {
    type: Object,
    required: true,
  }
});

const hovering = ref(false);

const logoMap = computed(() => {
  const map = {}
  for (const entry of logos) {
    const [key, value] = Object.entries(entry)[0]
    map[key.toLowerCase()] = value
  }
  return map
})

onMounted(() => {
  console.log(logoMap.value)
})

const incLogos = ref(
  (props.project.techStack || [])
    .map(l => l.toLowerCase())
    .filter(l => logoMap.value[l])
    .map(l => ({ name: l, logo: logoMap.value[l] }))
);

const mouseOver = () => {
  hovering.value = !hovering.value;
};

const hoverStyle = () => {
  if (hovering.value) {
    return { boxShadow: "10px 10px #4c1d95" }
  }
};
</script>

<style lang="scss" scoped>
.project-cassette {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin-bottom: 12px;
  border-radius: 10px;
  flex-shrink: 1;
  max-width: 300px;
  max-height: 600px;
  min-width: 300px;
  min-height: 450px;
}

.project-image {
  background-color: #2a2a2a;
  position: relative;
  max-height: 12rem;
  min-height: 12rem;
  min-width: 80%;
}

.project-title {
  font-size: 1.5rem;
}

.project-desc {
  font-size: 1rem;
}

.project-link-btn-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
}

.project-link-btn {
  background: transparent;
  color: black;
  border: 1px solid var(--color-border);
  border-radius: 0;
}

.project-cassette:hover {
  box-shadow: 0 0 20px 0 rgba(139, 92, 246, 0.5);
}

.project-link-btn:hover {
  background: #3b0764;
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: 0;
}

.project-langs {
  display: flex;
  flex-direction: row;
}

.project-lang-item {
  max-width: 40px;
  border-radius: 50%;
  margin: 5px;
}

/* Mobile devices */
@media (max-width: 480px) {
  .project-cassette {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-height: 200px;
    width: 180px;
    margin-bottom: 12px;
    border-radius: 10px;
    flex-shrink: 1;
    max-width: 300px;
    max-height: 600px;
    min-width: 300px;
    min-height: 450px;
  }

}

/* Tablet devices */
@media (max-width: 768px) {}
</style>