<template>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog transition="dialog-top-transition" max-width="600">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" v-bind="attrs" v-on="on">Crear</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar dark>Oferta laboral</v-toolbar>
            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="job.title"
                  :counter="20"
                  :rules="tituloRules"
                  label="Título"
                  required
                ></v-text-field>
                <v-select
                  v-model="job.taller"
                  :items="talleres"
                  :rules="[(v) => !!v || 'El taller es requerido']"
                  label="Taller"
                  item-value="id"
                  item-text="name"
                  required
                ></v-select>
                <v-textarea
                  v-model="job.contenido"
                  name="input-7-1"
                  label="Descipción de la oferta laboral"
                ></v-textarea>
              </v-form>
            </v-card-text>
            {{ job.taller }}
            <v-card-actions class="justify-end">
              <v-btn text @click="createOfertasTrabajo">Aceptar</v-btn>
              <v-btn text @click="dialog.value = false">Cancelar</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
import { API } from "aws-amplify";
import { createOfertasTrabajo } from "../graphql/mutations";
import { listTallers } from "../graphql/queries";

export default {
  name: "App",
  data() {
    return {
      job: {},
      dialog: false,
      overlay: false,
      valid: true,
      talleres: [],
      tituloRules: [
        (v) => !!v || "El titulo es requerido",
        (v) => (v && v.length <= 20) || "Name must be less than 20 characters",
      ],
    };
  },
  async created() {
    this.getTalleres();
  },
  methods: {
    async getTalleres() {
      // this.overlay = true;
      const talleres = await API.graphql({
        query: listTallers,
      });
      this.talleres = talleres.data.listTallers.items;
      this.overlay = false;
    },
    // Job
    async createOfertasTrabajo() {
      var job = this.job;
      await API.graphql({
        query: createOfertasTrabajo,
        variables: { input: job },
      });
      this.job = {};
      this.dialog = false;
    },
    // Job End
  },
};
</script>

<style></style>
