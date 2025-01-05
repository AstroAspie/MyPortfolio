<template>
  <div class="my-bio">
    <!-- General -->
    <p>
      I am a Full-Stack Engineer and Cyber Security Researcher with over <span class="years-experience">five</span> years of experience.
      I have worked in a variety of industries including Mining and Logistics, Business Management, Gambling and Sporting.
        <ul class="industry-list">
          <li>Mining and Logistics; building Train ETA systems, Wear management systems, and other internal tools.</li>
          <li>Business Management; building and securing business management platforms.</li>
          <li>Gambling and Sporting; securing networks and applications, as well as containerisation and cloud integration.</li>
        </ul>
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

.industry-list {
  margin-left: 4rem;
  padding: 0;
}
</style>