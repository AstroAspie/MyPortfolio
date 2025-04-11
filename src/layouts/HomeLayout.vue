<template>
  <div>
    <div class="showNav-bubble" id="navBubble"></div>
    <div class="showNav" id="showNav" @click="triggerNav">
      <span class="menu-icon">{{ menuTrigger }}</span>
    </div>
    <NavBar v-if="showNav" />
    <div class="top banner" ref="home">
      <slot name="primary">
      </slot>
      <svg class="down-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <polyline points="19 12 12 19 5 12"></polyline>
      </svg>
    </div>
    <div class="middle banner" ref="projects">
      <slot name="secondary">
      </slot>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/global/NavBar.vue";
export default {
  name: "HomeLayout",
  components: { NavBar },
  data() {
    return {
      showNav: false,
      menuTrigger: 'Menu'
    }
  },
  methods: {
    navEvent(e) {
      this.$nextTick(() => {
        scrollTo(e.NavTo)
      })
      scrollTo(0, 1000);
    },
    triggerNav() {
      this.showNav = !this.showNav
      let bubble = document.getElementById('navBubble');
      bubble.style.display = this.showNav ? 'none' : 'block';
      let navTrigger = document.getElementById('showNav');
      navTrigger.style.left = this.showNav ? '225px' : '25px';
      this.menuTrigger = this.showNav ? '<-' : 'Menu';
    }
  },
  created() {
    document.addEventListener("nav", this.navEvent)
  },
};
</script>

<style scoped>
.down-arrow {
  width: 50px;
  height: 50px;
  margin: 20px auto;
  display: block;
  cursor: pointer;
  animation: bounce 2s infinite;
  color: white;
}

@keyframes bounce {

  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-10px);
  }

  60% {
    transform: translateY(-5px);
  }
}

.showNav {
  position: fixed;
  top: 10px;
  left: 20px;
  padding: 8px;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 200;
  color: white;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  border-radius: 8px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.showNav:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.15);
}

.showNav-bubble:hover {
  transform: scale(1.1);
  opacity: 0.9;
}

.image {
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
  opacity: 0.5;
}

.banner {
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  width: 99vw;
  height: 98vh;
  margin: auto 0;
}

.top {
  padding: 20px;
  margin: 30px 10px 10px;
  overflow-x: hidden;
}

.middle {
  display: flex;
  flex-direction: row;
  padding: 20px;
  margin: 10px;
  overflow-x: hidden;
}

.bottom {
  margin: 10px;
  overflow-x: hidden;
}

@media (max-width: 480px) {
  .top {
    margin: auto 0;
    overflow-x: hidden;
  }
}
</style>