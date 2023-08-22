<template>
  <div class="color-changing-box" :style="rgbLastReplaced(test_bag)"></div>
</template>

<script>
export default {
  data() {
    return {
      test_bag: {
        row: 1,
        col: 1,
        time: "2021-05-01T00:00:00.000Z",
      },

      test_bag2: {
        row: 1,
        col: 2,
        time: "2021-05-01T00:00:00.000Z",
      },

      test_bag3: {
        row: 1,
        col: 3,
        time: "2021-05-01T00:00:00.000Z",
      },

      test_bag4: {
        row: 1,
        col: 4,
        time: "2021-05-01T00:00:00.000Z",
      },
    };
  },
  created() {
    console.log("created");
  },
  methods: {
    trimTime(time) {
      // Check if date obj
      if (time instanceof Date) {
        return time.toISOString()?.split("T")[0] ?? "";
      }
      return time?.split("T")[0] ?? "";
    },
    defaultTime() {
      baseTime = new Date();
      baseTime.setDate(baseTime.getDate() - 14);
      return trimTime(baseTime);
    },
    rgbLastReplaced(bag) {
      const rgb = [0, 255, 0];
      const today = new Date();

      if (!this.inspection_data) {
        return {
          "background-color": `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`,
        };
      }

      let lastReplaced = this.inspection_data.find(
        (item) => item.row === bag.row && item.col === bag.col
      );

      let inspection_diff = 0;
      if (!lastReplaced.time) {
        lastReplaced = this.defaultLastReplaced;
        inspection_diff = today - lastReplaced;
      } else {
        inspection_diff = today - lastReplaced.time;
      }

      const daysSinceLast = Math.floor(inspection_diff / (1000 * 60 * 60 * 24));

      const maxDays = 365 * 3; // rgb = [255, 0, 0]
      const minDays = 0; // rgb = [0, 255, 0]

      const percentage = (daysSinceLast - minDays) / (maxDays - minDays);

      const r = Math.floor(rgb[0] + (255 - rgb[0]) * percentage);
      const g = Math.floor(rgb[1] - rgb[1] * percentage);

      return {
        "background-color": `rgb(${r}, ${g}, 0)`,
      };
    },
  },
  computed: {},
};
</script>

<style scoped>
.color-changing-box {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  border: 1px solid black;
}
</style>
