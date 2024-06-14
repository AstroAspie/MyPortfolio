<template>
  <svg :width="width" :height="height" xmlns="http://www.w3.org/2000/svg">
    <g>
      <polygon
        v-for="(hex, index) in hexagons"
        :key="index"
        :points="hex.points"
        :stroke="strokeColor"
        :fill="fillColor"
        :stroke-width="strokeWidth"
      />
    </g>
  </svg>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Honeycomb',
  props: {
    width: {
      type: Number,
      default: 4200,
    },
    height: {
      type: Number,
      default: 1200,
    },
    hexRadius: {
      type: Number,
      default: 70,
    },
    strokeColor: {
      type: String,
      default: 'cyan',
    },
    fillColor: {
      type: String,
      default: 'none',
    },
    strokeWidth: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    rows() {
      return Math.ceil(this.height / (this.hexRadius * 1.5));
    },
    cols() {
      return Math.ceil(this.width / (this.hexRadius * Math.sqrt(3)));
    },
    hexagons() {
      const hexagons = [];
      for (let row = 0; row < this.rows; row++) {
        for (let col = 0; col < this.cols; col++) {
          const points = this.getHexagonPoints(col, row);
          hexagons.push({ points });
        }
      }
      return hexagons;
    },
  },
  methods: {
    getHexagonPoints(col, row) {
      const r = this.hexRadius;
      const w = Math.sqrt(3) * r;
      const h = 2 * r;
      const x = col * w + (row % 2) * (w / 2);
      const y = row * (h * 3 / 4);

      return [
        [x + r * Math.cos(0), y + r * Math.sin(0)],
        [x + r * Math.cos(Math.PI / 3), y + r * Math.sin(Math.PI / 3)],
        [x + r * Math.cos(2 * Math.PI / 3), y + r * Math.sin(2 * Math.PI / 3)],
        [x + r * Math.cos(Math.PI), y + r * Math.sin(Math.PI)],
        [x + r * Math.cos(4 * Math.PI / 3), y + r * Math.sin(4 * Math.PI / 3)],
        [x + r * Math.cos(5 * Math.PI / 3), y + r * Math.sin(5 * Math.PI / 3)],
      ]
        .map(point => point.join(','))
        .join(' ');
    },
  },
};
</script>

<style scoped>
svg {
  display: block;
  margin: auto;
  width: 100%;
}
</style>
