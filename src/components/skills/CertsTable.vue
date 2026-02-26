<script lang="js" setup>
    import { ref } from 'vue';
    import certData from '@/data/certifications.json';
    
    const certs = ref(certData);
</script>

<template>
    <div>
        Certs Table Component
        {{ certs }}
    </div>
</template>

<style scoped></style>