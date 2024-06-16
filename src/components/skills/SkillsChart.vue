<template>
  <CanvasJsChart :options="options" />
</template>

<script>
import CanvasJsChart from "@canvasjs/vue-charts";

export default {
  name: "SkillsBanner",
  components: { CanvasJsChart },
  data() {
    return {
      chart: null,
      options: {
        animationEnabled: true,
        title: {text: "FullStack Skills Breakdown"},
        data: [{
          type: "column",
          datapoints: [
            { label: 'HTML', y: 100 },
            { label: 'CSS', y: 95 },
            { label: 'JavaScript', y: 98 },
            { label: 'Python', y: 95 },
            { label: 'Java', y: 80 },
            { label: 'C/C++', y: 70 },
            { label: 'C#', y: 95 },
            { label: 'SQL', y: 90 },
            { label: 'Docker', y: 80 },
            { label: 'React\nNative', y: 70 },
            { label: 'Bootstrap', y: 90 },
            { label: 'Vuetify', y: 98 },
            { label: 'Material UI', y: 70 },
            { label: 'Tailwind CSS', y: 90 },
            { label: 'jQuery', y: 90 },
            { label: 'Django', y: 90 },
            { label: 'ASP.NET', y: 95 },
            { label: 'Blazor', y: 90 },
            { label: 'Electron', y: 60 },
            { label: 'Unity', y: 90 },
            { label: 'Unreal\nEngine', y: 70 },
            { label: 'React', y: 90 },
            { label: 'Vue', y: 95 },
            { label: 'Node', y: 90 },
            { label: 'Express', y: 90 },
            { label: 'MongoDB', y: 90 },
            { label: 'Git', y: 100 },
            { label: 'GitHub', y: 100 },
            { label: 'Linux', y: 95 },
            { label: 'Windows', y: 95 },
            { label: 'MacOS', y: 90 },
            { label: 'Arduino', y: 60 },
            { label: 'Raspberry Pi', y: 80 },
            { label: 'GIMP', y: 75 },
          ] 
        }],
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.banner-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
}

.banner-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.skills-container {
  display: flex;
  flex-direction: row;
  max-width: 85%;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 10px;
  flex-wrap: wrap;
}

.cassette {
  border-radius: 50%;
}
</style>
