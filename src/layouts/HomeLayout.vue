<template>
  <div>
    <div class="showNav-bubble" id="navBubble"></div>
    <div class="showNav" id="showNav" @click="triggerNav">{{ menuTrigger }}</div>
    <NavBar v-if="showNav" />
    <div class="top banner" ref="home">
      <slot name="primary">
      </slot>
    </div>
    <div class="middle banner" ref="projects">
      <slot name="secondary">
      </slot>
    </div>
    <div class="bottom banner" ref="skills">
      <slot name="contact">
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
      menuTrigger: '->'
    }
  },
  methods: {
    navEvent(e) {
      console.log(e)
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
      this.menuTrigger = this.showNav ? '<-' : '->';
    }
  },
  created() {
    document.addEventListener("nav", this.navEvent)
  },
  mounted() {
  }
};
</script>

<style scoped>
.showNav {
  position: fixed;
  top: 1px;
  left: 25px;
  padding: 10px;
  font-size: 2rem;
  cursor: pointer;
  z-index: 200;
  color: white;
}

.showNav-bubble {
  display: block;
  position: fixed;
  top: 9px;
  left: 25px;
  padding: 30px;
  border-radius: 50%;
  cursor: pointer;
  /* background-color: green; */
  z-index: 180;
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