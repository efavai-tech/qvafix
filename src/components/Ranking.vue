<template>
  <v-card flat>
    <v-card-title class="text-center justify-center">
      <h1 class="font-weight-bold display-2 basil--text">Ranking</h1>
    </v-card-title>
    <v-tabs v-model="tab" background-color="transparent" grow>
      <v-tab> Calidad </v-tab>
      <v-tab> Rapidez </v-tab>
      <v-tab> Garantía</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item><RadialBar /> </v-tab-item>
      <v-tab-item><GraficoBarras /></v-tab-item>
      <v-tab-item><PolarArea /></v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<script>
import GraficoBarras from "./Grafics/GraficoBarras";
import RadialBar from "./Grafics/RadialBar";
import PolarArea from "./Grafics/PolarArea";
export default {
  components: {
    GraficoBarras,
    RadialBar,
    PolarArea,
  },
  data() {
    return {
      tab: null,
    };
  },
};
</script>
<style>
/* Helper classes */
.basil {
  background-color: #fffbe6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>
