<script lang="js" setup>
import { ref } from 'vue';
// import data from '@/data/experience.json';

const yearString = new Date().getFullYear() - 2018;
const yearsExperience = ref(yearString);

</script>

<template>
  <div class="my-bio">
    <p>
      I am a Full-Stack Engineer and Cyber Security Researcher with over <span class="years-experience">{{ yearsExperience }}</span> years of experience.
      I have worked in a variety of industries including Mining and Logistics, Business Management, Gambling and Sporting.
        <ul class="industry-list">
          <li>Mining and Logistics; building Train ETA systems, Wear management systems, and other internal tools.</li>
          <li>Business Management; building and securing business management platforms.</li>
          <li>Gambling and Sporting; securing networks and applications, as well as containerisation and cloud integration.</li>
        </ul>
    </p>
  </div>
</template>

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