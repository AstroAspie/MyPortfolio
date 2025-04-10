<template>
    <main class="writeups-view">
        <div class="navbar">
            <NavBar />
        </div>
        <h1 class="title">Security & Ethical Hacking Write Ups</h1>
        <div class="container">
            <div class="writeup-types">
                <div v-for="(type, index) in writeupTypes" :key="index" class="writeup-type">
                    <h2>{{ type }}</h2>
                    <div v-for="(writeup, index) of groupedWriteups[type]" :key="index" class="writeup">
                        <WriteUpCard :writeup="writeup" @click="routeToWriteUp(writeup.id)" />
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import NavBar from "@/components/global/NavBar.vue";
import WriteUpCard from '@/components/projects/writeups/WriteUpCard.vue';

export default {
    name: "WriteUpsView",
    components: {
        NavBar,
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
.writeups-view {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background-color: #000000;
    color: #00ff00;
    font-family: 'Courier New', Courier, monospace;
    overflow-x: hidden;
    transition: margin-left 0.3s ease-in-out;
}

.navbar {
    width: 250px;
    background-color: #0d0d0d;
    color: #00ff00;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 255, 0, 0.5);
    position: fixed;
    top: 0;
    left: -250px;
    height: 100%;
    z-index: 10;
    transition: left 0.3s ease-in-out;
}

.navbar.active {
    left: 0;
}

.container {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
    background-color: #000000;
    width: 100%;
    box-sizing: border-box;
    margin-left: 80px;
    transition: margin-left 0.3s ease-in-out;
    z-index: 1;
    overflow: hidden;
    position: relative;
    height: 100vh;
}

.container.shifted {
    margin-left: 250px;
}

.title {
    position: fixed;
    top: 0;
    font-size: 2.5rem;
    color: #00ff00;
    font-weight: bold;
    text-align: center;
    animation: glitch 1.5s infinite;
    z-index: 2;
    width: 100%;
    text-shadow: 0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 20px #00ff00;
    background-color: #000000;
    padding: 10px 20px;
    box-shadow: 0 2px 5px rgba(0, 255, 0, 0.5);
    margin-left: 5%;
}

.container {
    margin-top: 80px;
}

.writeup-types {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;
}

.writeup-type {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.writeup {
    cursor: pointer;
    margin: 10px;
    padding: 20px;
    border: 1px solid #00ff00;
    border-radius: 10px;
    background-color: #0d0d0d;
    box-shadow: 0 4px 6px rgba(0, 255, 0, 0.5);
    transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s;
    width: 100%;
    max-width: 400px;
    text-align: center;
    color: #00ff00;
    font-family: 'Courier New', Courier, monospace;
}

.writeup:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 10px rgba(0, 255, 0, 0.7);
    background-color: #1a1a1a;
}

@media (max-width: 1024px) {
    .container {
        margin-left: 0;
        padding: 10px;
    }

    .navbar {
        width: 200px;
    }

    .writeup {
        max-width: 300px;
    }
}

@media (max-width: 768px) {
    .title {
        font-size: 2rem;
    }

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
        font-size: 1.8rem;
    }

    .writeup {
        font-size: 0.9rem;
        padding: 15px;
    }
}

@keyframes glitch {
    0% {
        text-shadow: 2px 2px #ff0000, -2px -2px #0000ff;
    }

    25% {
        text-shadow: -2px -2px #ff0000, 2px 2px #0000ff;
    }

    50% {
        text-shadow: 2px -2px #ff0000, -2px 2px #0000ff;
    }

    75% {
        text-shadow: -2px 2px #ff0000, 2px -2px #0000ff;
    }

    100% {
        text-shadow: 2px 2px #ff0000, -2px -2px #0000ff;
    }
}
</style>
