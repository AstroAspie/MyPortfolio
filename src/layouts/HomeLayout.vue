<template>
  <div>
    <div class="top banner">
      <div class="image"></div>
      <slot name="primary">
      </slot>
    </div>
    <div class="middle banner">
      <slot name="secondary">
      </slot>
    </div>
    <div class="bottom banner">
      <slot name="contact">
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeLayout",
};
</script>

<style scoped>
.image {
  background-image: url(/circuit-image.jpg);
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
  opacity: 0.5;
}

.banner {
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  width: 99vw;
  height: 98vh;
  margin: auto 0;
}

.top {
  padding: 20px;
  margin: 30px 10px 10px;
  overflow-x: hidden;
}

.middle {
  display: flex;
  flex-direction: row;
  padding: 20px;
  margin: 10px;
  overflow-x: hidden;
}

.bottom {
  margin: 10px;
  overflow-x: hidden;
}
</style>