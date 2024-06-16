<template>
  <div class="score-circle" @mouseenter="hoverCassette">
    <v-progress-circular :model-value="baseScore" :size="100" :width="12" @mouseenter="animateCircle(skill)">{{ skill.name }}</v-progress-circular>
    <div class="percentage" ref="skill-score">{{ skill.score }}%</div>
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
      baseScore: 1
    };
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
    animateCircle(skill)
    {
      while (this.baseScore <= skill.score) {
        this.baseScore++;
      }
    },
    isVisible(el) {
      var rect = el.getBoundingClientRect();

      return (
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && 
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      )
    }
  },
  updated() {
    if (this.isVisible(this.$el)) {
      this.animateCircle(this.skill);
    }
  }
};
</script>

<style lang="scss" scoped>
.score-circle {
  margin-left: 4px;
  margin-right: 4px;
}

.percentage {
  display: none;
}
</style>