<!-- <script  setup  lang="ts">
import  { TresCanvas }  from  '@tresjs/core';
import { OrbitControls } from '@tresjs/cientos';
</script> -->

<template>
  <TresCanvas>
    <OrbitControls/>
    <TresPerspectiveCamera />
    <TresMesh class="box-one">
      <TresBoxGeometry  :args="[1,  1,  1]" />
      <TresMeshBasicMaterial  :color="'#2412FF'"  :transparent="true"  :opacity="0.25" />
    </TresMesh>
  </TresCanvas>
</template>

<script>
import  { TresCanvas }  from  '@tresjs/core';
import { OrbitControls } from '@tresjs/cientos';

export default {
  name: 'BasicScene',
  components: { TresCanvas, OrbitControls },
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.box-one {
  position: absolute;
  left: 20px;
}
</style>

