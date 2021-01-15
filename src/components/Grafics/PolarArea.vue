<template>
  <div id="chart">
    <apexchart
      type="polarArea"
      width="380"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
export default {
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      series: [42, 47, 52, 58,65],
      chartOptions: {
        chart: {
          width: 380,
          type: "polarArea",
        },
        labels: ["Taller 1", "Taller 2", "Taller 3", "Taller 4","Taller 5"],
        fill: {
          opacity: 1,
        },
        stroke: {
          width: 1,
        colors: ["#0277BD", "#D500F9", "#ff9800", "#F50057","#5D4037"],
        },
        yaxis: {
          show: false,
        },
        legend: {
          position: "bottom",
        },
        plotOptions: {
          polarArea: {
            rings: {
              strokeWidth: 0,
            },
          },
        },
      },
    };
  },
};
</script>
<style>
</style>