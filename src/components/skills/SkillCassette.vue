<template>
  <div 
    class="score-circle"
  >
    <!-- <img :src="img_ref" :alt="skillLogo" class="logo" /> -->
    <!-- <img src="" alt="test" class="logo" /> -->
    <img :src="skillLogo" :alt="skill.name" class="logo"/>
    <!-- <v-progress-circular 
      :model-value="skill.score" 
      :size="size" 
      :width="width"
      :color="circleColour"
      @mouseenter="animateCircle(skill, true)"
      @mouseout="animateCircle(skill, false)"
    > -->
    <!-- </v-progress-circular> -->
  </div>
</template>

<script>
export default {
  name: "SkillCassette",
  props: {
    skill: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      size: 100,
      width: 12,
      baseScore: 1,
      circleColour: "#008080",
      img_ref: null,
      logos: [
        { lang: "html", logo: "/MyPortfolio/html-5.svg" },
        { lang: "css", logo: "/MyPortfolio/css-3.svg" },
        { lang: "python", logo: "/MyPortfolio/python.svg" },
        { lang: "javascript", logo: "/MyPortfolio/javascript.svg" },
        { lang: "dotnet", logo: "/MyPortfolio/dotnet.svg" },
        { lang: "java", logo: "/MyPortfolio/java.svg" },
        { lang: "unity", logo: "/MyPortfolio/unity.svg" },
        { lang: "unreal engine", logo: "/MyPortfolio/unreal-engine.svg" },
        { lang: "docker", logo: "/MyPortfolio/docker.svg" },
        { lang: "sql", logo: "/MyPortfolio/sql.svg" },
        { lang: "nosql", logo: "/MyPortfolio/nosql.svg" },
        { lang: "git", logo: "/MyPortfolio/github-mark.png" },
        { lang: "raspberrypi", logo: "/MyPortfolio/raspberry-pi.svg"},
        { lang: "aws", logo: "/MyPortfolio/aws.svg" },
        { lang: "azure", logo: "/MyPortfolio/azure.svg" },
        { lang: "linux", logo: "/MyPortfolio/linux.svg" },
        { lang: "microsoft", logo: "/MyPortfolio/microsoft.svg" },
        { lang: "mac", logo: "/MyPortfolio/mac.svg" }
      ]
    };
  },
  computed: {
    skillLogo() {
      let img = "";
      for (let logo of this.logos) {
        if (logo.lang === this.skill.name.toLowerCase()) {
          img = logo.logo
        }
      }
      return img
    }
  },
  methods: {
    hoverCassette() {
      let score = this.$refs['skill-score'];
      score.style.visibility = 'visible';
    },
    mouseout() {
      let score = this.$refs['skill-score'];
      score.style.visibility = 'hidden';
    },
    getLogo(name) {
      for (let logo of this.logos) {
        if (logo.lang === name.toLowerCase()) {
          return logo.logo
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.score-circle {
  margin-left: 14px;
  margin-right: 14px;
}

.percentage {
  display: none;
}

.logo {
  display: relative;
  width: 80px;
  border-radius: 50%;
}
</style>