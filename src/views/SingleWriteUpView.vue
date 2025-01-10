<template>
    <div class="write-up">
        <WriteupDisplay />
    </div>
</template>

<script>
import WriteupDisplay from '@/components/projects/writeups/WriteupDisplay.vue';

export default {
    name: "SingleWriteUpView",
    components: {
        WriteupDisplay
    },
}

</script>

<style scoped>
.write-up {
    max-width: 80%;
    color: #fcfeff;
    opacity: 1;
    text-decoration: solid;
    font-size: larger;
}
</style>