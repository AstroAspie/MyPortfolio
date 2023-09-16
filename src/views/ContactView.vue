<template>
  <div class="contact">
    <div class="socials">
      <v-icon
          class="icon"
          large
          color="white"
          @click="window.open('github.com/astroaspie', '_blank')"
      >
        mdi-github
      </v-icon>
      <v-icon
          class="icon"
          large
          color="white"
          @click="window.open('https://www.linkedin.com/in/alex-smith-astroaspie/', '_blank')"
      >
        mdi-linkedin
      </v-icon>
    </div>
    <v-icon
      class="icon"
      large
      color="white"
      @click="window.open('mailto:astro.cybersmith@gmail.com', '_blank')"
    >
      mdi-email
    </v-icon>
  </div>
</template>

<script>

</script>

<style scoped>
.contact {
  background-color: #35abbb;
  margin: 10px;
  overflow-x: hidden;
}

.socials {
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
  height: 4rem;
}
</style>