<template>
  <HomeLayout>
    <template #primary>
      <h1>Alex (Astro) Smith</h1>
      <h2>Full Stack Web Developer</h2>
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
    </template>
    <template #secondary>
      <ProjectsBanner />
    </template>
    <template #contact>
      <ContactBanner />
    </template>
  </HomeLayout>
</template>

<script>
import HomeLayout from "@/layouts/HomeLayout.vue";
import ProjectsBanner from "@/components/ProjectsBanner.vue";
import ContactBanner from "@/components/ContactBanner.vue";


export default {
  components: { HomeLayout, ProjectsBanner },
  name: "HomeView",
  data() {
    return {
    };
  },
  methods: {
    onhover(item) {
      // grow the size of the icon being hovered over
      const icon = this.$el.querySelector(item);
      
      // smoothly transition the icon to a larger size
      icon.style.transition = "width 0.5s, height 0.5s";
      this.$el.querySelector(item).style.width = "60px";
      this.$el.querySelector(item).style.height = "60px";
    },
    offhover(item) {
      // shrink the size of the icon being hovered over
      this.$el.querySelector(item).style.width = "50px";
      this.$el.querySelector(item).style.height = "50px";
    }
  },
}
</script>

<style scoped>
.icon {
  margin: 10px;
  width: 50px;
  height: 50px;
  color: white;
  z-index: 1;
}
</style>