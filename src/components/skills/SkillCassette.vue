<script setup>
const props = defineProps({
  skill: {
    type: Object,
    required: true
  },
  skillLogo: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="bubble">
    <img :src="props.skillLogo" :alt="skill.name" class="logo" />
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
    rgba(99, 102, 241, 0.12) 60%,
    rgba(76, 29, 149, 0.2)
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
    0 10px 32px rgba(139, 92, 246, 0.4),
    0 0 20px rgba(139, 92, 246, 0.15),
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
