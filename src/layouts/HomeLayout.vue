<script lang="js" setup>
</script>

<template>
  <div>
    <div class="top" ref="home">
      <slot name="primary">
      </slot>
    </div>
    <div class="middle" ref="projects">
      <slot name="secondary">
      </slot>
    </div>
  </div>
</template>

<style scoped>
.top {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.middle {
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  padding: 40px 24px;
  border-top: 1px solid rgba(99, 102, 241, 0.2);
}

@media (max-width: 480px) {
  .top {
    margin: auto 0;
    overflow-x: hidden;
  }
}
</style>
