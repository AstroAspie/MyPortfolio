<template>
  <div class="container">
    <div class="about">
      <div class="contact">
        <h1>Alex Smith</h1>
        <h3>Full-Stack Developer | Web Tech & Security Enthusiast</h3>
        <p>
          <strong>Location:</strong> Perth, Western Australia
        </p>
        <v-btn
          color="primary"
          prepend-icon="mdi-file-download"
          @click.prevent="downloadResume"
        >download my resume</v-btn>
      </div>
      <MyBio />
    </div>
    <Honeycomb :width="4200" :height="4200" class="background"/>  
  </div>
</template>

<script>
import Honeycomb from '@/components/global/Honeycomb.vue';

export default {
  name: 'AboutView',
  components: { Honeycomb },
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    downloadResume() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
      
      const localString = '/resume/My_Resume.pdf';
      fetch(localString)
        .then((response) => response.blob())
        .then((blob) => {
          const url = window.URL.createObjectURL(new Blob([blob]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'Alex_Smith_FullStack_Dev-Resume.pdf');
          document.body.appendChild(link);
          link.click();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
}
</script>

<style>
.container {
  width: 100%;
  height: 100%;
  max-height: 700px;
  overflow: hidden;
}

.background {
  position: absolute;
  top: 0;
  z-index: -1;
  max-height: 100vh;
}

.about {
  margin: 80px auto;
  display: flex;
  flex-direction: column;
  max-width: 72%;
  gap: 2rem;
  border-left: solid 1px gray;
  border-right: solid 1px gray;
  background-color: var(--color-background);
  opacity: 1;
  z-index: 100;
}

.contact {
  gap: 1rem;
  margin: 0 auto;
  text-align: center;
}

.bio {
  gap: 1rem;
  margin: 0 auto;
  text-align: justify;
  max-width: 75%;
}


@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
