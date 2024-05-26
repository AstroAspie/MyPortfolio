<template>
  <nav>
    <div class="container">
      <div class="nav-links" v-for="link in links" :key="link.name">
        <div :id="link.name" class="link-container" @mouseover="hoverLink(link.name)" @mouseout="mouseoutLink(link.name)" @click="openLink(link)">
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
        { name: "Projects", path: "Projects" },
        // { name: "Contact", path: "/contact" },
      ],
      activeLink: null,
    };
  },
  mounted() {
    this.projectsBanner = this.$refs["projects-banner"];
    this.links[2].path = this.projectsBanner;
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
      if (link.name === "Projects") {
        console.log("Projects: ", this.projectsBanner);
        this.$router.push(`/${this.projectsBanner}`)
      } else {
        this.$router.push(link.path);
      }
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
  justify-content: flex-end;
  text-align: right;
  align-items: flex-end;
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
  margin: 0 auto;
  width: 60%;
  height: 70%;
  text-align: right;
  display: flex;
}

.link-container:hover {
  cursor: pointer;
}

.link {
  margin: 0 auto;
}
</style>
