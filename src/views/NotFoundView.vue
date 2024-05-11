<template>
  <div class="not-found">
    <h1>404</h1>
    <p>Oops, the page you're looking for does not exist.</p>
    <router-link to="/">Go back to home</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFoundView'
}
</script>

<style scoped>
.not-found {
  text-align: center;
}
</style>