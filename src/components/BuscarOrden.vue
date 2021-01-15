<template>
  <v-hover v-slot:default="{ hover }">
    <v-card :elevation="hover ? 12 : 2" :loading="loading">
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <div class="display-1 font-weight-light orange--text text-center mb-2">
            ¿En que estado está mi equipo?
          </div>
          <v-select
            :items="talleres"
            :rules="[(v) => !!v || 'El taller es requerido']"
            label="Taller"
            item-value="id"
            item-text="name"
            required
          ></v-select>
          <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            placeholder="Escriba el número de su ticket"
            required
          ></v-text-field>
          <v-btn color="success" class="mr-4" @click="buscar"> Buscar </v-btn>
          <v-expand-transition>
            <div v-show="show" :class="`pa-3 orden ma-2 ${orden.estado}`">
              <v-row>
                <v-col cols="4">
                  <div class="caption grey--text">No</div>
                  <div>{{ orden.numero }}</div>
                </v-col>
                <v-col cols="8">
                  <div class="caption grey--text">Estado</div>
                  <div>
                    <v-chip
                      small
                      color=""
                      :class="`${orden.estado} white--text caption my-2`"
                      >{{ orden.estado }}</v-chip
                    >
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-expand-transition>
        </v-form>
      </v-card-text>
    </v-card>
  </v-hover>
</template>
<script>
import { API } from "aws-amplify";
import { listTallers } from "../graphql/queries";

export default {
  data: () => ({
    valid: true,
    name: "",
    loading: false,
    show: false,
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    select: null,
    talleres: [],
    checkbox: false,
    orden: {
      numero: "22547",
      equipo: "celular",
      taller: "Bartolete Pérez",
      estado: "completada",
    },
  }),
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
    buscar() {
      this.show = true;
      this.loading = true;
      this.$refs.form.buscar();
    },
  },
};
</script>

<style>
.orden.completada {
  border-left: 5px solid #3ac590;
}
.orden.enrevision {
  border-left: 5px solid #ebb00f;
}
.v-chip.completada {
  background: #3ac590 !important;
}
.v-chip.enrevision {
  background: #ebb00f !important;
}
</style>
