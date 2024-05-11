<template>
  <v-dialog
    v-model="open"
    max-width="500px"
  >
    <component :is="component" :project="project" />
  </v-dialog>
</template>

<script>
export default {
  name: 'ComponentDemoLayout',
  props: {
    component: {
      type: Object,
      required: true,
    },
    project: {
      type: Object,
      required: true,
    },
  },
  data () {
    return {
      open: false,
    }
  },
};
</script>

<style scoped>

</style>