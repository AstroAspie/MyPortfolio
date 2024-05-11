<template>
  <div class="contact">
    <div class="socials">
      <img 
          src="../assets/github-mark/github-mark.png" 
          class="icon" 
          id="github"
          alt="github logo"
          @mouseover="onhover('#github')"
          @mouseout="offhover('#github')"
      />
      <img
          src="../assets/linkedin-logo.png" 
          class="icon"
          id="linkedin"
          alt="linkedin logo" 
          @mouseover="onhover('#linkedin')"
          @mouseout="offhover('#linkedin')"
      />
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.contact {
  background-color: #35abbb;
  margin: 0 auto;
  overflow-x: hidden;
  height: 100vh;
}

.socials {
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
  height: 8rem;
  width: 8rem;
}


</style>