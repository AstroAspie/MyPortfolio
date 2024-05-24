<template>
  <nav>
    <div class="container">
      <div class="nav-links" v-for="link in links" :key="link.name">
        <div :id="link.name" class="link-container" @mouseover="hoverLink(link.name)" @mouseout="mouseoutLink(link.name)" @click="openLink(link.path)">
          <router-link
            class="link"
            :to="link.path"
            >
            {{ link.name }}
          </router-link>
        </div>
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
      activeLink: null,
    };
  },
  mounted() {
    this.projectsBanner = this.$refs["projects-banner"]
  },
  methods: {
    hoverLink(linkName) {
      let link = document.getElementById(linkName);
      link.style.border = "solid 1px green";
    },
    mouseoutLink(linkName) {
      let link = document.getElementById(linkName);
      link.style.border = "";
    },
    openLink(link) {
      window.open(link);
    }
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
  width: 100%;
}

.nav-links a {
  text-decoration: none;
  color: var(--color-text);
  font-weight: bold;
  font-size: 1.2rem;
  transition: all 0.3s ease 0s;
}

.link-container {
  width: 70%;
  height: 70%;
  text-align: center;
  display: flex;
}

.link {

}
</style>
