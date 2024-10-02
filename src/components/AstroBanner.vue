<template>
  <div class="astro">
    <div class="bio-container">
      <MyBio class="bio"/>
      <div class="myLogo"></div>
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
          "Full Stack Developer",
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
  top: 35%;
  left: 2%;
  z-index: 10;
}

.myLogo {
  position: relative;
  max-width: 100%;
  min-width: 90%;
  max-height: 70%;
  min-height: 50%;
  z-index: -1;
  opacity: 0.04;
  bottom: 80%;
  background-image: url("/  MyPortfolio/myLogo.png")
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
  color: teal;
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

/* Tablet devices */
@media (max-width: 768px) {
  .bio-container {
    flex-direction: column;
    top: 10%;
    max-height: auto;
  }

  .bio {
    top: 10%;
    left: 0;
    display: none;
  }

  .myLogo {
    height: 60%;
    bottom: 20%;
  }

  .intro {
    top: 20%;
    min-width: 100%;
    margin: 0 2%;
    font-size: 1.2rem;
  }

  .header-socials h1 {
    font-size: 20px;
  }

  .header-socials h2 {
    font-size: 3rem;
  }
}

/* Mobile devices */
@media (max-width: 600px) {
  .bio-container {
    flex-direction: column;
    top: 5%;
    max-height: auto;
    display: none;
  }

  .bio {
    top: 5%;
    left: 0;
  }

  .myLogo {
    height: 50%;
    bottom: 10%;
  }

  .intro {
    top: 10%;
    min-width: 100%;
    margin: 0 1%;
    font-size: 1rem;
  }

  .header-socials {
    display: relative;
  }

  .header-socials h1 {
    font-size: 18px;
  }

  .header-socials h2 {
    font-size: 2.5rem;
  }
}

@media (max-width: 486px) {
  .bio-container {
    flex-direction: column;
    top: 5%;
    max-height: auto;
    display: none;
  }

  .bio {
    top: 5%;
    left: 0;
  }

  .myLogo {
    height: 50%;
    bottom: 10%;
  }

  .intro {
    top: 10%;
    min-width: 100%;
    margin: 0 1%;
    font-size: 1rem;
  }

  .header-socials {
    display: relative;
  }

  .header-socials h1 {
    font-size: 18px;
  }

  .header-socials h2 {
    font-size: 2.5rem;
  }
}
</style>
