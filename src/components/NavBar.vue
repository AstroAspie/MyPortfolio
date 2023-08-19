<template>
  <nav>
    <div class="container">
      <div class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  z-index: 1;
  background: var(--color-background);
  border-bottom: 1px solid var(--color-border);
}

.nav-links {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
