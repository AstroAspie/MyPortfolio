<template>
  <nav>
    <div class="container">
      <div class="nav-links" v-for="link in links" :key="link.name">
        <div :id="link.name" class="link-container" @mouseover="hoverLink(link.name)"
          @mouseout="mouseoutLink(link.name)" @click="openLink(link.path)">
          <img v-if="link.name == 'Home' && hoverHome" src="@/assets/images/home-cyan.png" class="home-link" />
          <img v-if="link.name == 'Home' && !hoverHome" src="@/assets/images/home-white.png" class="home-link" />
          <span v-if="link.name != 'Home'" class="link">{{ link.name }}</span>
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
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: "Skills", path: "/skills" },
        { name: "Write Ups", path: "/writeups" },
        { name: "About Me", path: "/about", },
        { name: "Contact", path: "/contact" },
      ],
      activeLink: null,
    };
  },
  methods: {
    hoverLink(linkName) {
      if (linkName != "Home") {
        // let link = document.getElementById(linkName);
        // link.style.border = "solid 1px cyan";
        return;
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
        case "/projects":
          this.$nextTick(() => {
            this.$router.push('/projects');
          })
          break;
        case "/skills":
          this.$nextTick(() => {
            this.$router.push('/skills');
          })
          break;
        case "resume":
          this.$nextTick(() => {
            this.$router.push('alex-smith-resume.pdf')
          })
          break;
        case "/certificates":
          this.$router.push('/certificates')
          break;
        default:
          // this.$router.push('/');
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

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 15%;
  height: 100%;
  background: var(--color-background);
  border-right: 1px solid var(--color-border);
}

.home-link {
  max-width: 2.5rem;
  min-height: 30px;
}

.container {
  display: flex;
  flex-direction: column;
  margin-left: 1%;
}

.nav-links {
  display: absolute;
  left: 0;
  height: 4rem;
}

.nav-links a {
  text-decoration: none;
  color: var(--color-text);
  font-weight: bold;
  font-size: 1.2rem;
  transition: all 0.3s ease 0s;
}

.link-container {
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px 0;
  padding: 1.2rem 60px;
}

.link-container:hover {
  cursor: pointer;
  border: solid 1px cyan;
}

.link {
  margin: 0 auto;
}

@media (max-width: 600px) {
  .nav-links {
    display: absolute;
    left: 0;
    height: 4rem;
    min-width: 4%;
    max-width: 23%;
  }

  .link-container {
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .link-container:hover {
    cursor: pointer;
  }

  .link {
    margin-right: 5px;
  }
}
</style>
