<template>
  <div class="header-socials">
    <img
        v-for="social in socials"
        :key="social"
        :src="social.source"
        class="icon" 
        :id="social.name"
        :alt="social.name + ' logo'"
        @mouseover="onHover(social.name)"
        @mouseout="offHover(social.name)"
        @click="openLink(social.link)"
    />
    <div class="box-container">
      <div id="box">
      </div>
    </div>
  </div>
</template>

<script>
import json from "@/assets/myStuff.json";
import * as THREE from 'three';
// import BasicScene from "../scenes/BasicScene.vue";

export default {
  name: "SocialsBar",
  data() {
    return {
      socials: null
    }
  },
  methods: {
    onHover(item) {
      // grow the size of the icon being hovered over
      const itemSelector = `#${item}`;
      const icon = this.$el.querySelector(itemSelector);

      // smoothly transition the icon to a larger size
      icon.style.transition = "width 0.5s, height 0.5s";
      this.$el.querySelector(itemSelector).style.width = "60px";
      this.$el.querySelector(itemSelector).style.height = "60px";
    },
    offHover(item) {
      const itemSelector = `#${item}`;
      // shrink the size of the icon being hovered over
      this.$el.querySelector(itemSelector).style.width = "50px";
      this.$el.querySelector(itemSelector).style.height = "50px";
    },
    openLink(link) {
      window.open(link, "_blank");
    },
    loadSocials() {
      this.socials = json["socials"];
    },
    downloadResume() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
      
      const localString = "src/assets/Alex-Smith_Resume.pdf";

      fetch(localString)
        .then((response) => response.blob())
        .then((blob) => {
          const url = window.URL.createObjectURL(new Blob([blob]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'Alex-Smith_Resume.pdf');
          document.body.appendChild(link);
          link.click();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    loadThree() {
      // import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
      // import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

      // const controls = new OrbitControls( camera, renderer.domElement );
      // const loader = new GLTFLoader();

      const scene = new THREE.Scene();
      
      const appHeight = 200;
      const appWidth = 200;

      // Camera 
      const fov = 75;
      const near = 0.1;
      const far = 1000;
      const camera = new THREE.PerspectiveCamera( fov, appWidth / appHeight, near, far );


      const renderer = new THREE.WebGLRenderer();
      renderer.setClearColor(0, 0, 0, 0.5)
      renderer.setSize( appWidth, appHeight );
      renderer.setAnimationLoop( animate );
      const container = document.getElementById('box')
      renderer.domElement.style.backgroundColor = "transparent"
      container.appendChild( renderer.domElement );

      // Set cube geometry
      const geometry = new THREE.BoxGeometry( 3.4, 3.4, 3.4 );
      const wireGeometry = new THREE.WireframeGeometry(geometry);
      const material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );

      const line = new THREE.LineSegments(wireGeometry, material);
      line.material.depthTest = true;
      line.material.opacity = 0.5;
      line.material.transparent = false;
      // const cube = new THREE.Mesh( geometry, material );
      // scene.add( cube );
      scene.add( line );

      camera.position.z = 5;


      function animate() {
        renderer.render( scene, camera );
        line.rotation.x += 0.01;
        line.rotation.y += 0.01;
      }
    }
  },
  mounted() {
    this.loadSocials();
    this.loadThree();
  }
}
</script>

<style scoped>
.box-container {
  position: absolute;
  left: 170px;
  top: 140px;
}


#box {
  display: relative;
  border-radius: 50%;
  background-color: transparent;
}

.icon {
  margin: 10px;
  width: 50px;
  height: 50px;
  background-color: white;
  font-size: 6px;
  border: 1px solid white;
  border-radius: 50%;
  z-index: 1;
}

.download-resume-btn {
  text-align: center;
  padding-right: 40px;
  margin-left: 10px;
}
</style>