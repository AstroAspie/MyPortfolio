<template>
  <div 
    class="score-circle"
  >
    <v-progress-circular 
      :model-value="baseScore" 
      :size="size" 
      :width="width"
      :color="teal"
      @mouseenter="animateCircle(skill, true)"
      @mouseout="animateCircle(skill, false)"
    >
      {{ skill.name }}
    </v-progress-circular>
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
      size: 100,
      width: 12,
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
    animateCircle(skill, fill)
    {
      if (fill === true)
      {
        while (this.baseScore <= skill.score) {
          this.baseScore++;
          if (this.size <= 140)
            this.size++;
          if (this.width <= 18)
            this.width++;
        }
      }
      else if (fill === false)
      {
        setInterval(() => {
          while (this.baseScore > 1)
          {
            this.baseScore--;
            if (this.size >= 100)
              this.size--;
            if (this.width >= 12)
              this.width--;
          }
        }, 5000)
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
  color: teal;
}

.percentage {
  display: none;
}
</style>