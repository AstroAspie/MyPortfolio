<template>
  <div class="contact-container">
    <h1 class="title">Contact</h1>
    <form class='contact-form'>
      <input placeholder="Name" class='contact-name' />
      <input placeholder="Email" class='contact-email' />
      <input placeholder="Reason for Contact" class="reason" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactBanner',
};
</script>

<style scoped>
.contact-container {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.title {}

.contact-form {
  width: 80%;
}

input {
  border: 1px solid white;
  margin: 10px 5px;
  padding: 5px;
}

.contact-name {
  width: 80%;
}

.contact-email {
  width: 80%;
}

.reason {
  width: 97%;
  height: 200px;
}
</style>
