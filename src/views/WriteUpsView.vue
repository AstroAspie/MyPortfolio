<template>
    <div class="writeups-container">
        <h1>Write Ups</h1>
        <div v-for="writeup in writeups" :key="writeup.id" class="writeup" @click="routeToWriteUp(writeup.id)">
            <h2>{{ writeup.title }}</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: "WriteUpsView",
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
.writeups-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.writeup {
    max-height: 200px;
    min-height: 45%;
    max-width: 80%;
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