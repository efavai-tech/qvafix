<template>
  <div id="chart">
    <apexchart
      type="bar"
      height="350"
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
      series: [
        {
          data: [21, 22, 10, 28, 16],
        },
      ],
      chartOptions: {
        // chart: {
        //   height: 350,
        //   type: "bar",
        //   events: {
        //     click: function (chart, w, e) {
        //       // console.log(chart, w, e)
        //     },
        //   },
        // },
        colors: ["#0277BD", "#D500F9", "#ff9800", "#F50057","#5D4037"],
        plotOptions: {
          bar: {
            columnWidth: "45%",
            distributed: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        xaxis: {
          categories: [
            ["Taller Bartolete Perez"],
            ["Taller 2"],
            ["Taller 3"],
            ["Taller 4"],
            ["Taller 5"],
          ],
          labels: {
            style: {
        colors: ["#0277BD", "#D500F9", "#ff9800", "#F50057","#5D4037"],
              fontSize: "12px",
            },
          },
        },
      },
    };
  },
};
</script>