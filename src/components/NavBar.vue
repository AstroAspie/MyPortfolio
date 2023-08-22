<template>
  <nav>
    <div class="container">
      <div class="nav-links">
        <router-link
          v-for="link in links"
          :key="link.name"
          :to="link.path"
          exact
          active-class="active"
        >
          {{ link.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      links: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
      ],
    };
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
