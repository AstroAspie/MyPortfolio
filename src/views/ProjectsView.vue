<template>
  <div>
    <ProjectsBanner />
  </div>
</template>

<script>
import ProjectsBanner from '@/components/projects/ProjectsBanner.vue';
export default {
  name: 'Projects-View',
  components: {ProjectsBanner},
  data () {
    return {
      projects: [
        { id: 1, name: 'Project 1', type: 'Web'  },
        { id: 2, name: 'Project 2', type: 'Web'  },
        { id: 3, name: 'Project 3', type: 'Game' },
        { id: 4, name: 'Project 4', type: 'Game' },
      ]
    }
  },
}
</script>