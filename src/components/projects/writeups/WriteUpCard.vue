<template>
    <div class="card-container">
        <!-- <img :src="writeup.image" alt="writeup.title" class="card-img" /> -->
        <div class="card-content">
            <h3>{{ writeup.title }}</h3>
        </div>
        <div></div>
    </div>
</template>


<script>
export default {
    name: "WriteUpCard",
    props: {
        writeup: {
            type: Object,
            required: true
        }
    }
}

</script>

<style scoped>
.card-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 2%;
    background-color: #35abbb;
    color: #fcfeff;
    opacity: 1;
    text-decoration: solid;
    font-size: larger;
    margin: 0 auto;
    padding: 2%;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
}

.card-img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
}

.card-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 2%;
    background-color: #35abbb;
    color: #fcfeff;
    opacity: 1;
    text-decoration: solid;
    font-size: larger;
    margin: 0 auto;
    padding: 2%;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
}

.card-container:hover {
    background-color: #fcfeff;
    color: #000;
    cursor: pointer;
    transition: all 0.3s ease 0s;
}

.card-content:hover {
    background-color: #fcfeff;
    color: #000;
    cursor: pointer;
    transition: all 0.3s ease 0s;
}
</style>