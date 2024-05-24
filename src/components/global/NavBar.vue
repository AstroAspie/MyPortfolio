<template>
  <nav>
    <div class="container">
      <div class="nav-links" v-for="link in links" :key="link.name">
        <router-link
          :to="link.path"
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
      projectsBanner: "",
      links: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: `#${this.projectsBanner}` },
        { name: "Contact", path: "/contact" },
      ],
    };
  },
  mounted() {
    this.projectsBanner = this.$refs["projects-banner"]
  },
  methods: {
    hoverLink(link) {
      return this.$router.path === link.path
        ? { color: "var(--color-accent)" }
        : {};
    },
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

.container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

.nav-links {
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
  height: 4rem;
  width: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: var(--color-text);
  font-weight: bold;
  font-size: 1.2rem;
  transition: all 0.3s ease 0s;
}

.nav-links:hover {
  background-color: var(--color-accent);
  cursor: pointer;
}

.active-link {
  color: var(--color-accent);
  cursor: pointer;
}
</style>
