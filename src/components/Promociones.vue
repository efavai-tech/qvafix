<template>
  <v-row justify="center">
    <v-card v-for="item in promociones" :key="item.title" class="mt-3">
      <v-card-text class="mb-2" style="position: relative">
        <div class="font-weight-light title mb-2">
          {{ item.title }}
        </div>
        <div class="font-weight-light grey--text title mb-2">
          {{ item.contenido }}
        </div>
        <div class="font-weight-light grey--text title mb-2">
          For the perfect meal
        </div>
        <h3 class="display-1 font-weight-light orange--text mb-2">
          QW cooking utensils
        </h3>
        <div class="font-weight-light title mb-2">
          Our Vintage kitchen utensils delight any chef.<br />
          Made of bamboo by hand
        </div>
      </v-card-text>
    </v-card>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    promociones: [
      { title: "Algo que va Aqui", contenido: "Texto del Contenido" },
      { title: "Algo que va Aqui2", contenido: "Contenido2" },
    ],
  }),
};
</script>

<style>
</style>