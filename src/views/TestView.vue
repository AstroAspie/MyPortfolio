<template>
  <div class="grid-container">
    <div 
      v-for="index in gridItems" 
      :key="index" 
      class="grid-item"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gridItems: 600  // Adjust this number for more or fewer items
    };
  }
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(24, 1fr);  /* 4 columns */
  gap: 10px;
  padding: 10px;
}

.grid-item {
  width: 100px;
  height: 100px;
  background-color: lightgray;
  transition: background-color 0.3s;
}

.grid-item:hover {
  background-color: blue;
}
</style>
