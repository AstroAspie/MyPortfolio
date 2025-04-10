<template>
    <div class="container">
        <h1 class="title">Write Ups</h1>
        <div class="writeup-types">
            <div v-for="(type, index) in writeupTypes" :key="index" class="writeup-type">
                <h2>{{ type }}</h2>
                <div v-for="(writeup, index) of groupedWriteups[type]" :key="index" class="writeup"
                    @click="routeToWriteUp(writeup.id)">
                    <WriteUpCard :writeup="writeup" />
                </div>
            </div>
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
            writeups: [],
            writeupTypes: ["Hacker101", "Portswigger"]
        }
    },
    computed: {
        groupedWriteups() {
            return this.groupWriteUPs();
        }
    },
    methods: {
        getWriteUps() {
            import('../assets/myStuff.json').then(data => {
                this.writeups = data["writeups"];
            });
        },
        groupWriteUPs() {
            let group = {};
            for (const type of this.writeupTypes) {
                group[type] = this.writeups.filter(writeup => writeup.source === type);
            };
            console.log(group);
            return group;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}

.title {
    font-size: 3rem;
    margin-bottom: 20px;
}

.writeup-types {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
}

.writeup-type {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.writeup {
    cursor: pointer;
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: background-color 0.3s;
    width: 400px;
    text-align: center;
}

@media (max-width: 768px) {
    .writeup-types {
        flex-direction: column;
        align-items: center;
    }

    .writeup {
        width: 90%;
    }
}

@media (max-width: 480px) {
    .title {
        font-size: 2rem;
    }

    .writeup {
        font-size: 0.9rem;
        padding: 8px;
    }
}
</style>