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
        { name: "Projects", path: "/projects" },
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
  z-index: 1;
  width: 100%;
  background: var(--color-background);
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 2rem;
}

.nav-links {
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
  height: 4rem;
}
</style>
