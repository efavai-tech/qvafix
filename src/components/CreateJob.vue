<template>
  <v-row>
    <v-col cols="auto">
      <template>
        <v-btn color="blue-grey" class="white--text" @click="dialog = true"
          >Crear Oferta de Empleo</v-btn
        >
      </template>
      <v-dialog transition="dialog-top-transition" v-model="dialog" max-width="600">
        <v-card>
          <v-toolbar dark
            >Oferta laboral

            <v-progress-linear
              :active="loading"
              :indeterminate="loading"
              absolute
              bottom
              color="deep-orange"
            ></v-progress-linear
          ></v-toolbar>

          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="job.titulo"
                :counter="50"
                :rules="tituloRules"
                label="Título"
                required
              ></v-text-field>
              <v-select
                v-model="job.tallerID"
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
          <v-card-actions class="justify-end">
            <v-btn text @click="createOfertasTrabajo">Aceptar</v-btn>
            <v-btn text @click="dialog = false">Cancelar</v-btn>
          </v-card-actions>
        </v-card>
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
      loading: false,
      valid: true,
      currentDate: "",
      talleres: [],
      tituloRules: [
        (v) => !!v || "El titulo es requerido",
        (v) => (v && v.length <= 50) || "El título de tener menos de 50 caracteres",
      ],
    };
  },
  async created() {
    this.getTalleres();
    this.currentDate = new Date();
  },
  methods: {
    async getTalleres() {
      this.overlay = true;
      const talleres = await API.graphql({
        query: listTallers,
      });
      this.talleres = talleres.data.listTallers.items;
      this.overlay = false;
    },

    // Job
    async createOfertasTrabajo() {
      this.loading = true;
      var job = this.job;
      job.fecha = this.currentDate;
      await API.graphql({
        query: createOfertasTrabajo,
        variables: { input: job },
      });
      this.job = {};
      this.dialog = false;
      this.loading = false;
    },
    // Job End
  },
};
</script>

<style></style>
