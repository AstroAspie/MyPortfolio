<template>
  <div class="layout-container">
    <div class="showNav" id="showNav" @click="triggerNav">{{ menuTrigger }}</div>
    <NavBar v-if="showNav" />
    <div class="top banner">
      <slot name="first"></slot>
    </div>
    <div class="middle banner">
      <slot name="second"></slot>
    </div>
    <div class="bottom banner">
      <slot name="third"></slot>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/global/NavBar.vue';

export default {
  name: 'Projects-Layout',
  components: { NavBar },
  data() {
    return {
      showNav: false,
      menuTrigger: '->'
    }
  },
  methods: {
    triggerNav() {
      this.showNav = !this.showNav
      // let bubble = document.getElementById('navBubble');
      // bubble.style.display = this.showNav ? 'none' : 'block';
      let navTrigger = document.getElementById('showNav');
      navTrigger.style.left = this.showNav ? '225px' : '25px';
      this.menuTrigger = this.showNav ? '<-' : '->';
    }
  }
}
</script>

<style scoped>
.layout-container {
  display: flex;
  flex-direction: column;
}

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

.showNav:hover {
  color: blue;
}

.banner {
  padding: 4px 20px;
  display: flex;
  flex-direction: row;
  margin-bottom: 5%;
}

.top {
  margin: 25px 0;
  border-bottom: 2px solid gray;
}

.middle {
  margin-bottom: 20px;
  border-bottom: 2px solid gray;
}

.bottom {}
</style>