<template>
  <v-hover
    v-slot:default="{ hover }"
    :open-delay="openDelay"
    :close-delay="closeDelay"
    :disabled="disabled"
    :value="value"
  >
    <v-card
      :elevation="hover ? 12 : 2"
      max-width="344"
      class="mx-auto text-center"
    >
      <v-card-text>
        <div class="display-1 font-weight-light orange--text mb-2">
          ¿Estas en busca de trabajo?
        </div>
        <div class="font-weight-light title mb-2">
          Si eres emprendedor y estas interesado en trabajar, este es el sitio
          adecuado para encontrar lo que buscas
        </div>
        <v-rating
          :value="5"
          color="amber"
          half-increments
          dense
          size="20"
          readonly
        ></v-rating>
      </v-card-text>
      <v-divider class="mx-4"></v-divider>
      <div class="font-weight-light px-2">
        Gran calidad && satisfaccion del cliente.
      </div>
      <v-row justify="center">
        <v-card-actions>
          <v-btn color="accent-4" outlined text link to="jobs"> Ver más </v-btn>
        </v-card-actions>
      </v-row>
    </v-card>
  </v-hover>
</template>
<script>
export default {
  data: () => ({
    selection: 1,
    disabled: false,
    openDelay: "0",
    closeDelay: "0",
    value: false,
  }),

  methods: {},
};
</script>