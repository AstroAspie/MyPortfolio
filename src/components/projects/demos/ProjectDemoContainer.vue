<template>
  <v-dialog
    v-model="open"
    max-width="500px"
  >
    <slot name="featured" />
    <slot name="project" />
  </v-dialog>
</template>

<script>
export default {
  name: 'ProjectDemoContainer',
  data () {
    return {
      open: false,
    }
  },
};
</script>