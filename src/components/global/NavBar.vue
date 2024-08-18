<template>
  <nav>
    <div class="container">
      <div class="nav-links" v-for="link in links" :key="link.name">
        <div :id="link.name" class="link-container" @mouseover="hoverLink(link.name)" @mouseout="mouseoutLink(link.name)" @click="openLink(link.path)">
          <div>
            <img v-if="link.name == 'Home' && hoverHome" src="@/assets/images/home-cyan.png" class="home-link" />
            <img v-if="link.name == 'Home' && !hoverHome" src="@/assets/images/home-white.png" class="home-link" />
            <span v-if="link.name != 'Home'"> {{ link.name }}</span>
          </div>
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
      hoverHome: false,
      links: [
        { name: "Home", path: "home" },
        { name: "Projects", path: "projects" },
        { name: "Skills", path: "skills" },
        { name: "Resume", path: "resume", }
        // { name: "Contact", path: "/contact" },
      ],
      activeLink: null,
    };
  },
  methods: {
    hoverLink(linkName) {
      if (linkName != "Home") {
        let link = document.getElementById(linkName);
        link.style.border = "solid 1px cyan";
      } else {
        this.hoverHome = true;
      }
    },
    mouseoutLink(linkName) {
      let link = document.getElementById(linkName);
      link.style.border = "";
      this.hoverHome = false;
    },
    openLink(link) {
      switch (link) {
        case "projects":
          scrollTo(0, 910)
          break;
        case "skills":
          scrollTo(0, 10000)
          break;
        case "resume":
          this.$nextTick(() => {
            this.$router.push('alex-smith-resume.pdf')
          })
          break;
        default:
          scrollTo(0, 0)
          break;
      }
    },
    loadHomeIcons() {
      let white = '@/assets/images/home-white.png';
      this.homeImages.push(white);
      let cyan = '@/assets/images/home-cyan.png';
      this.homeImages.push(cyan);
    }
  },
};
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  background: var(--color-background);
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 2rem;
}

.home-link {
  max-width: 2rem;
}

.container {
  display: flex;
  flex-direction: row;
  margin-left: 1%;
}

.nav-links {
  display: flex;
  text-align: right;
  align-items: flex-end;
  height: 4rem;
  width: 100px;

}

.nav-links a {
  text-decoration: none;
  color: var(--color-text);
  font-weight: bold;
  font-size: 1.2rem;
  transition: all 0.3s ease 0s;
}

.link-container {
  width: 90%;
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
