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
}
</script>

<style scoped>

</style>