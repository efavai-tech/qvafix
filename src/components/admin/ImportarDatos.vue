<template>
  <v-row>
    <v-col cols="12" sm="6" md="6">
      <v-row>
        <v-col cols="12" sm="6" md="8">
          <v-file-input
            v-model="file"
            accept=".csv"
            show-size
            placeholder="Elija el Documento CSV"
            prepend-icon="mdi-paperclip"
            label="Importar Datos"
          ></v-file-input
        ></v-col>
        <v-col cols="12" sm="6" md="4">
          <v-select :items="tipos" v-model="tipoDato"></v-select></v-col
      ></v-row>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    tipos: [],
    tipoDato: {},
    file: {},
    tallerId: {},
  }),
  async created() {
    this.tipos = ["orden", "cliente", "inventario"];
  },
  methods: {
    getBase64() {
      var reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = function () {
        console.log(reader.result);

        // archivo para importar en la lamda
        var archivo = {
          type: this.tipoDato,
          file: reader.result,
          taller_id: this.tallerId,
        };
      };
      reader.onerror = function (error) {
        console.log("Error: ", error);
      };
    },
  },
};
</script>
