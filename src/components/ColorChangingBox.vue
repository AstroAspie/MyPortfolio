<template>
  <div class="color-changing-circle" :style="rgbLastReplaced()"></div>
</template>

<script>
export default {
  data() {
    return {
      test_data: [
        {
          col: 3,
          row: 5,
          time: new Date("2020-08-21T14:45:00"),
        },
        {
          col: 1,
          row: 8,
          time: new Date("2021-08-21T18:15:00"),
        },
      ],
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
    defaultLastReplaced() {
      let baseTime = new Date();
      return baseTime.setDate(baseTime.getDate() - 14);
    },
    rgbLastReplaced() {
      const rgb = [0, 255, 0];
      const today = new Date();

      if (!this.inspection_data) {
        return {
          "background-color": `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`,
        };
      }

      let inspection_data = JSON.parse(JSON.stringify(this.test_data));
      console.log(inspection_data);

      // find if a bag is in the inspection data
      const lastReplaced = inspection_data.find(
        (bag) => bag.col === bag.col && bag.row === bag.row
      );

      console.log(lastReplaced);
      let inspection_diff = 0;
      if (!lastReplaced?.time) {
        lastReplaced = this.defaultLastReplaced();
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
.color-changing-circle {
  top: 300px;
  left: 600px;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 1px solid black;
}
</style>
