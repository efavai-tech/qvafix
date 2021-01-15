<template>
  <div class="text-xs-center">
    <v-dialog v-model="dialog" width="300">
      <template v-slot:activator="{ on }">
        <v-btn text outlined color="primary" v-on="on"
          >Hacer una Pregunta</v-btn
        >
      </template>

      <v-card color="#385F73" dark>
        <v-card-title></v-card-title>
        <v-card-text class="headline font-weight-bold text-center">
          Para hacer una pregunta usted debe estar logeado
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text router-link to="/Login"> Login </v-btn>
          <v-btn text @click="dialog = false"> Cancelar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>