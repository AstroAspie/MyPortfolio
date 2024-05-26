<template>
  <div class="astro">
    <div id="myLogo">
      <img src="/mylogo.png" class="myLogo"/>
    </div>
    <div class="intro">
      <h1>Alex <span class="nickname">(Astro)</span> Smith</h1>
      <h2 @mouseenter="nextMessage">{{ welcome_msg }}</h2>
      <div class="header-socials">
        <SocialsBar />
      </div>
    </div>
  </div>
</template>

<script>
import SocialsBar from './global/SocialsBar.vue';

export default {
  name: "AstroBanner",
  components: {SocialsBar},
  data() {
    return {
      welcome_msg_array: [
          "Welcome aboard!",
          "Full Stack Web Developer",
          "Welcome to my portfolio!",
      ],
      welcome_msg: "",
    };
  },
  methods: {
    nextMessage() {
      this.welcome_msg =
        this.welcome_msg_array[
          Math.floor(Math.random() * this.welcome_msg_array.length)
        ];
    },
  },
  mounted() {
    this.welcome_msg =
      this.welcome_msg_array[
        Math.floor(Math.random() * this.welcome_msg_array.length)
      ];
  },
};
</script>

<style scoped>
.astro {
  color: white;
  display: flex;
  position: relative;
  justify-content: space-around;
  overflow: hidden;
}

.intro {
  position: relative;
  top: 30%;
  min-width: 500px;
  font-size: 1.5rem;
}

.myLogo {
  position: relative;
  top: 10%;
  width: 100%;
  height: 80%;
}

.header-socials {
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
  height: 8rem;
  width: 8rem;
}

.header-socials h1 {
  color: white;
  font-size: 25px;
}

.header-socials h2 {
  color: white;
  font-size: 4rem;
}
</style>
