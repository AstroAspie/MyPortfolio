<template>
    <div class="write-up">
        <vue-markdown :source="content" />
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown-render'

export default {
    name: "WriteupDisplay",
    components: {
        VueMarkdown
    },
    props: {
        writeupId: {
            type: Number,
            required: false
        }
    },
    data() {
        return {
            writeup: "",
            content: ""
        }
    },
    methods: {
        getWriteUp() {
            let id = this.$route.params.id;
            import('../../../assets/myStuff.json').then(data => {
                this.writeup = data["writeups"][id - 1].file;
            }).finally(() => {
                fetch(`/MyPortfolio/${this.writeup}`)
                    .then(response => response.text())
                    .then(text => {
                        this.content = text;
                    });
            });
        },
        readMarkDown() {
        }
    },
    mounted() {
        this.getWriteUp();
        // this.readMarkDown();
    }
}
</script>

<style scoped>
.write-up {
    max-width: 80%;
    color: #fcfeff;
    opacity: 1;
    text-decoration: solid;
    font-size: larger;
    margin: 0 auto;
    padding: 2%;
}

.writeup-file {
    width: 100%;
    height: 100%;
}
</style>