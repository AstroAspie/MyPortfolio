<template>
    <div class="certificates">
        <h1>Certificates</h1>
        <p>
            I have a number of certificates from various online platforms such as; Udemy, Coursera, and Pluralsight.
            I have certificates in a variety of topics including; Cyber Security, Full-Stack Development, and Cloud
            Computing.
        </p>
        <br />
        <p>
            I am always looking to learn new things and improve my skills. I like to think myself a quick
            learner and hard worker and am always looking for new and exciting opportunities to spread my
            wings, learn something interesting and grow in the development world.
        </p>
        <div class="certs-container">
            <div v-for="cert in certs" :key="cert.id" class="cert">
                <img v-if="!cert.img.includes('pdf')" :src="cert.img" :alt="cert.title" />
                <embed v-else :src="cert.img" type="application/pdf" width="100%" height="100%" />
            </div>
        </div>
    </div>
</template>

<script>
// import data from '../assets/myStuff.json';

export default {
    name: "CertificatesView",
    data() {
        return {
            certs: []
        }
    },
    methods: {
        getCertificates() {
            import('../assets/myStuff.json').then(data => {
                this.certs = data["certificates"];
            });
        }
    },
    mounted() {
        this.getCertificates();
    }
}
</script>

<style scoped>
.certificates {
    max-height: 500px;
    min-height: 45%;
    max-width: 80%;
    color: #fcfeff;
    opacity: 1;
    text-decoration: solid;
    font-size: larger;
}

.certs-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin: 0 10%;
}
</style>