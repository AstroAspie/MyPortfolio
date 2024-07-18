<template>
  <div class="astro">
    <div class="bio-container">
      <MyBio class="bio"/>
      <img src="/mylogo.png" class="myLogo" />
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
import MyBio from './global/MyBio.vue';
import SocialsBar from './global/SocialsBar.vue';

export default {
  name: "AstroBanner",
  components: {MyBio, SocialsBar},
  data() {
    return {
      welcome_msg_array: [
          "Full Stack Web Developer",
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
.bio-container {
  position: relative;
  display: flex;
  top: 20%;
  max-height: 90%;
  align-content: center;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.bio {
  position: relative;
  top: 20%;
  left: 2%;
  z-index: 10;
}

.myLogo {
  position: relative;
  width: 100%;
  height: 80%;
  z-index: -1;
  opacity: 0.04;
  bottom: 34%;
}


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
  margin: 0 5%;
  font-size: 1.5rem;
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

.nickname {
  font-style: italic;
  text-decoration: underline;
}
</style>
