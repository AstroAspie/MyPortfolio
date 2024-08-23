<template>
  <div class="my-bio">
    <!-- General -->
    <p>
      I am a full-stack developer with over <span class="years-experience">five</span> years experience and a passion for all things technology, 
      programming and cybersecurity. I have quite a broad range of experience ranging from web based projects with ReactJS, Vue and Angular
      with varying backend technologies including FastAPI, Express, Asp.Net, Django, and more. My cybersecurity experience is more niche based in 
      offensive security although I am well versed in architecturual security and defensive techniques.
    </p>
    <br />
    <!-- Current Work -->
    <p class="current-work">
      Currently, I work full time as a freelance developer with a small number of on-going clients whilst developing internal tools for my small team @ Tekheart Productions such as; a Business Tracker to manage invoices and team tasks for each client.
    </p>
    <br />
    <p>
      I am always looking to learn new things and improve my skills. I like to think myself a quick
      learner and hard worker and am always looking for new and exciting opportunities to spread my 
      wings, learn something interesting and grow in the development world.
    </p>
    <!-- <p>
      In my spare time, I mostly enjoy spending time with my twin daughters and
      my wife. I also enjoy refining my development skills, bug bounty hunting, watching movies, 
      and reading various genres of books.
    </p> -->
  </div>
</template>

<script>
export default {
  name: "MyBio",
  data() {
    return {}
  }
}
</script>

<style scoped>
.my-bio {
  max-height: 500px;
  min-height: 45%;
  max-width: 80%;
  color: #fcfeff;
  opacity: 1;
  text-decoration: solid;
  font-size: larger;
  margin: 40% 0;
}

.years-experience { 
  font-weight: bold;
  text-decoration: underline;
}
</style>