
<script setup>
import { computed } from 'vue'

const props = defineProps({
  skill: {
    type: Object,
    required: true
  }
})

const logoDir = "/MyPortfolio/images"

const logos = [
  { title: 'html', logo: `${logoDir}/html-5.svg` },
  { title: 'css', logo: `${logoDir}/css-3.svg` },
  { title: 'python', logo: `${logoDir}/python.svg` },
  { title: 'javascript', logo: `${logoDir}/javascript.svg` },
  { title: 'dotnet', logo: `${logoDir}/dotnet.svg` },
  { title: 'java', logo: `${logoDir}/java.svg` },
  { title: 'unity', logo: `${logoDir}/unity.svg` },
  { title: 'unreal engine', logo: `${logoDir}/unreal-engine.svg` },
  { title: 'docker', logo: `${logoDir}/docker.svg` },
  { title: 'postgresql', logo: `${logoDir}/postgresql.svg` },
  { title: 'git', logo: `${logoDir}/github-mark.png` },
  { title: 'raspberrypi', logo: `${logoDir}/raspberry-pi.svg` },
  { title: 'aws', logo: `${logoDir}/aws.svg` },
  { title: 'azure', logo: `${logoDir}/azure.svg` },
  { title: 'linux', logo: `${logoDir}/linux.svg` },
  { title: 'react', logo: `${logoDir}/react.svg`},
  { title: 'vue', logo: `${logoDir}/vue.svg` },
  { title: 'blazor', logo: `${logoDir}/blazor.svg`}
]

const skillLogo = computed(() => {
  const match = logos.find(
    (l) => l.title === props.skill.name.toLowerCase()
  )
  return match ? match.logo : ''
})
</script>

<template>
  <div class="bubble">
    <img :src="skillLogo" :alt="skill.name" class="logo" />
    <span class="label">{{ skill.name }}</span>
  </div>
</template>

<style lang="scss" scoped>
.bubble {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(255, 255, 255, 0.25),
    rgba(0, 128, 128, 0.12) 60%,
    rgba(0, 80, 80, 0.2)
  );
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow:
    0 6px 20px rgba(0, 0, 0, 0.15),
    inset 0 -3px 8px rgba(255, 255, 255, 0.2),
    inset 0 3px 8px rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: default;
  transition:
    box-shadow 0.25s ease,
    transform 0.25s ease;
}

.bubble:hover {
  transform: scale(1.25);
  box-shadow:
    0 10px 32px rgba(0, 128, 128, 0.4),
    0 0 20px rgba(0, 128, 128, 0.15),
    inset 0 -3px 8px rgba(255, 255, 255, 0.25),
    inset 0 3px 8px rgba(255, 255, 255, 0.15);
}

.logo {
  width: 36px;
  height: 36px;
  object-fit: contain;
  pointer-events: none;
}

.label {
  font-size: 9px;
  color: rgba(255, 255, 255, 0.85);
  margin-top: 3px;
  text-align: center;
  line-height: 1.1;
  max-width: 70px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
