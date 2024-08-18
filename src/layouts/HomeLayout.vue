<template>
  <div>
    <NavBar />
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
    return {}
  },
  methods: {
    navEvent(e) {
      console.log(e)
      this.$nextTick(() => {
        scrollTo(e.NavTo)
      })
      scrollTo(0, 1000);
    }
  },
  created() {
    document.addEventListener("nav", this.navEvent)
  }
};
</script>

<style scoped>
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