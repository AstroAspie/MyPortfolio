<template>
    <div class="container">
        <h1 class="title">Write Ups</h1>
        <div class="writeup-container">
            <WriteUpCard v-for="writeup in writeups" :key="writeup.id" :writeup="writeup"
                @click="routeToWriteUp(writeup.id)" />
        </div>
    </div>
</template>

<script>
import WriteUpCard from '@/components/projects/writeups/WriteUpCard.vue';

export default {
    name: "WriteUpsView",
    components: {
        WriteUpCard
    },
    data() {
        return {
            writeups: []
        }
    },
    methods: {
        getWriteUps() {
            import('../assets/myStuff.json').then(data => {
                this.writeups = data["writeups"];
            });
        },
        routeToWriteUp(writeupId = 1) {
            this.$router.push('/writeup/' + writeupId);
        }
    },
    mounted() {
        this.getWriteUps();
    }
}
</script>

<style scoped>
.container {
    overflow-x: hidden;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.title {
    color: #fcfeff;
    font-size: 3rem;
    text-align: center;
    position: absolute;
    top: 5%;
    width: 90%;
    border-bottom: 1px solid #fcfeff;
}

.writeups-container {
    display: flex;
    flex-direction: row;
    /* flex-wrap: wrap; */
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 1rem;
}

.writeup {
    position: relative;
    max-height: 200px;
    min-height: 45%;
    width: 100%;
    color: #fcfeff;
    opacity: 1;
    text-decoration: solid;
    font-size: larger;
    margin: 1rem;
    padding: 1rem;
    border: 1px solid #fcfeff;
    border-radius: 25%;
}

.writeup:hover {
    background-color: #fcfeff;
    color: #000;
    cursor: pointer;
    transition: all 0.3s ease 0s;
}
</style>