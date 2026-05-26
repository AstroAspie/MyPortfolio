<script lang="js" setup>
import { ref } from 'vue';
import NavBar from '@/components/global/NavBar.vue';

const showNav = ref(false);
const menuTrigger = ref('->');

const triggerNav = () => {
  showNav.value = !showNav.value;
  // let bubble = document.getElementById('navBubble');
  // bubble.style.display = showNav.value ? 'none' : 'block';
  let navTrigger = document.getElementById('showNav');
  navTrigger.style.left = showNav.value ? '225px' : '25px';
  menuTrigger.value = showNav.value ? '<-' : '->';
};
</script>


<template>
  <div class="layout-container">
    <div class="showNav" id="showNav" @click="triggerNav">{{ menuTrigger }}</div>
    <NavBar v-if="showNav" />
    <div class="projects-layout">
      <slot name="projects"></slot>
    </div>
  </div>
</template>

<style scoped>
.layout-container {
  display: flex;
  flex-direction: column;
}

.showNav {
  position: fixed;
  top: 1px;
  left: 25px;
  padding: 10px;
  font-size: 2rem;
  cursor: pointer;
  z-index: 200;
  color: white;
}

.showNav:hover {
  color: blue;
}

.banner {
  padding: 4px 20px;
  display: flex;
  flex-direction: row;
  margin-bottom: 5%;
}

.top {
  margin: 25px 0;
  border-bottom: 2px solid gray;
}

.middle {
  margin-bottom: 20px;
  border-bottom: 2px solid gray;
}

.bottom {}
</style>

<style scoped>
.layout-container {
  display: flex;
  flex-direction: column;
}

.showNav {
  position: fixed;
  top: 1px;
  left: 25px;
  padding: 10px;
  font-size: 2rem;
  cursor: pointer;
  z-index: 200;
  color: white;
}

.showNav:hover {
  color: blue;
}

.banner {
  padding: 4px 20px;
  display: flex;
  flex-direction: row;
  margin-bottom: 5%;
}

.top {
  margin: 25px 0;
  border-bottom: 2px solid gray;
}

.middle {
  margin-bottom: 20px;
  border-bottom: 2px solid gray;
}

.bottom {}
</style>