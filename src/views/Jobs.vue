<template>
  <div class="px-3">
    <v-row class="text-center">
      <v-col class="col-md6">
        <v-data-iterator
          :items="ofertas"
          :items-per-page.sync="itemsPerPage"
          :page="page"
          :search="search"
          :sort-by="['createdAt']"
          :sort-desc="sortDesc"
          hide-default-footer
        >
          <template v-slot:header>
            <v-app-bar fixed dense class="d-none d-flex d-sm-none d-sm-flex d-md-none">
              <v-toolbar-title class="mr-3"
                >Ofertas
                <v-progress-linear
                  :active="loading"
                  :indeterminate="loading"
                  absolute
                  bottom
                  color="deep-orange"
                ></v-progress-linear
              ></v-toolbar-title>
              <v-spacer></v-spacer>
              <v-text-field
                light
                filled
                flat
                v-model="search"
                solo
                rounded
                hide-details
                dense
                append-icon="mdi-magnify"
              ></v-text-field>
            </v-app-bar>
            <div class="d-none d-lg-flex d-xl-flex">
              <v-toolbar class="mb-1">
                <v-icon large>mdi-briefcase-variant-outline</v-icon>
                <h2>Ofertas de Empleo</h2>
                <v-col>
                  <v-btn
                    color="blue-grey"
                    class="white--text"
                    @click="dialog = true"
                    v-if="$vuetify.breakpoint.mdAndUp"
                    >Crear</v-btn
                  >
                </v-col>
                <v-spacer />
                <v-text-field
                  v-model="search"
                  flat
                  clearable
                  solo-inverted
                  hide-details
                  label="Buscar"
                  icon="mdi-bag-checked"
                ></v-text-field>
                <template v-if="$vuetify.breakpoint.mdAndUp">
                  <div class="flex-grow-1"></div>
                  <v-btn-toggle mandatory>
                    <v-btn large depressed @click="sortDesc = true">
                      <v-icon>mdi-arrow-up</v-icon>
                    </v-btn>
                    <v-btn large depressed @click="sortDesc = false">
                      <v-icon>mdi-arrow-down</v-icon>
                    </v-btn>
                  </v-btn-toggle>
                </template>
                <v-progress-linear
                  :active="loading"
                  :indeterminate="loading"
                  absolute
                  bottom
                  color="deep-orange"
                ></v-progress-linear>
              </v-toolbar>
            </div>
            <v-col>
              <v-btn
                color="blue-grey"
                class="white--text"
                @click="dialog = true"
                v-if="!$vuetify.breakpoint.mdAndUp"
                >Crear Oferta de Empleo</v-btn
              >
            </v-col>
          </template>

          <template v-slot:default="props">
            <v-card v-for="item in props.items" :key="item.id" cols="12" class="mt-3">
              <v-row>
                <v-col cols="12" sm="4" md="2">
                  <v-img src="img/icons/favicon-32x32.png" contain height="32" />
                  {{ item.taller.name }}
                </v-col>
                <v-col cols="12" sm="8" md="9">
                  <v-row>
                    <v-col cols="12" sm="12" md="11">
                      <p class="title text-justify orange--text mx-2">
                        {{ item.titulo }}
                      </p>
                    </v-col>
                    <v-col cols="12" sm="8" md="8">
                      <p class="text-justify mx-2">
                        {{ item.contenido }}
                      </p>
                      <p class="text-justify mx-2">
                        {{ item.createdAt | formatDate }}
                      </p>
                    </v-col>
                    <v-row justify="end">
                      <v-col cols="12" sm="12" md="4">
                        <v-btn color="blue-grey" class="white--text">
                          Aplicar
                          <v-icon right dark> mdi-cloud-upload </v-icon>
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-row>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                  <v-tooltip top color="primary">
                    <template v-slot:activator="{ on }">
                      <v-icon class="primary--text" v-on="on" @click="editItem(item)"
                        >v-icon notranslate mdi mdi-pen theme--dark</v-icon
                      >
                    </template>
                    <span>Editar</span>
                  </v-tooltip>
                  <v-divider class="mx-1" inset vertical></v-divider>

                  <v-tooltip top color="red">
                    <template v-slot:activator="{ on }">
                      <v-icon v-on="on" class="red--text" @click="confirmDelete(item)"
                        >v-icon notranslate mdi mdi-delete theme--dark</v-icon
                      >
                    </template>
                    <span>Eliminar</span>
                  </v-tooltip>
                </v-col>
              </v-row>
            </v-card>
          </template>

          <template v-slot:footer>
            <v-row class="mt-5 mx-5" align="center" justify="center">
              <span class="grey--text">Resultados por página</span>
              <v-menu offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn text class="ml-2" v-on="on">
                    {{ itemsPerPage }}
                    <v-icon>mdi-chevron-down</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(number, index) in itemsPerPageArray"
                    :key="index"
                    @click="updateItemsPerPage(number)"
                  >
                    <v-list-item-titulo>{{ number }}</v-list-item-titulo>
                  </v-list-item>
                </v-list>
              </v-menu>

              <div class="flex-grow-1"></div>

              <span class="mr-4 grey--text">
                Página {{ page }} de {{ numberOfPages }}
              </span>
              <v-btn fab dark class="mr-1" @click="formerPage" small>
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
              <v-btn fab dark class="ml-1" @click="nextPage" small>
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-row>
          </template>
        </v-data-iterator>
        <!-- CreateJob -->
        <v-dialog
          transition="dialog-top-transition"
          v-model="dialog"
          max-width="600"
          persistent
        >
          <v-card>
            <v-toolbar dark
              >Oferta laboral

              <v-progress-linear
                :active="loading"
                :indeterminate="loading"
                absolute
                bottom
                color="dep-orange"
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
              <v-btn text color="primary" @click="save()">Aceptar</v-btn>
              <v-btn text @click="dialog = false">Cancelar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!-- /CreateJob -->
        <!-- DeleteJob -->
        <v-dialog
          transition="dialog-top-transition"
          v-model="dialog1"
          max-width="250"
          persistent
        >
          <v-card color="#385F73" dark>
            <v-progress-linear
              :active="loading"
              :indeterminate="loading"
              absolute
              bottom
              color="dep-orange"
            ></v-progress-linear>
            <div class="text-center">
              <v-card-text class="white--text">
                <div class="headline text-center mb-2">¿ Estas Seguro ?</div>
                de eliminar esta oferta de empleo.
              </v-card-text>
              <v-divider></v-divider>
              <v-btn text @click="deleteJob(item)">Aceptar</v-btn>
              <v-btn text @click="closeDelete()">Cancelar</v-btn>
            </div>
          </v-card>
        </v-dialog>
        <!-- /DeleteJob -->
      </v-col>
      <v-col class="d-none d-lg-flex d-xl-flex" cols="3">
        <Promociones />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Promociones from "../components/Promociones";

import { API } from "aws-amplify";
import { listTallers } from "../graphql/queries";
import { listOfertasTrabajos } from "../graphql/queries";
import { createOfertasTrabajo } from "../graphql/mutations";
import { updateOfertasTrabajo } from "../graphql/mutations";
import { deleteOfertasTrabajo } from "../graphql/mutations";

export default {
  components: {
    Promociones,
  },
  data: () => ({
    itemsPerPageArray: [10, 20, 30],
    search: "",
    searchClosed: true,
    filter: {},
    loading: false,
    page: 1,
    panel: [],
    itemsPerPage: 5,
    sortDesc: true,
    keys: ["createdAt", "titulo", "contenido"],
    ofertas: [],
    job: { fecha: "", tallerID: {} },
    dialog: false,
    dialog1: false,
    overlay: false,
    valid: true,
    talleres: [],
    editedIndex: -1,
    tituloRules: [
      (v) => !!v || "El titulo es requerido",
      (v) => (v && v.length <= 50) || "El título de tener menos de 50 caracteres",
    ],
  }),
  async created() {
    this.getTalleres();
    this.GetOfertasTrabajo();
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.ofertas.length / this.itemsPerPage);
    },
    filteredKeys() {
      return this.keys.filter((key) => key !== `createdAt`);
    },
    method() {
      return this.editedIndex === -1 ? "POST" : "PUT";
    },
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
    // Talleres
    async getTalleres() {
      const talleres = await API.graphql({
        query: listTallers,
      });
      this.talleres = talleres.data.listTallers.items;
    },
    async GetOfertasTrabajo() {
      this.loading = true;
      const result = await API.graphql({
        query: listOfertasTrabajos,
      });
      this.ofertas = result.data.listOfertasTrabajos.items;
      this.loading = false;
    },
    editItem(item) {
      this.editedIndex = item.id;
      this.job = item;
      this.dialog = true;
    },
    // Job
    async save() {
      if (this.method === "POST") {
        this.loading = true;
        var job = this.job;
        job.fecha = new Date();
        await API.graphql({
          query: createOfertasTrabajo,
          variables: { input: job },
        });
        this.close();
      }
      if (this.method === "PUT") {
        this.loading = true;
        const j = this.job;
        const job = {};
        job.id = j.id;
        job.titulo = j.titulo;
        job.contenido = j.contenido;
        job.fecha = j.fecha;
        await API.graphql({
          query: updateOfertasTrabajo,
          variables: { input: job },
        });
        this.close();
      }
    },
    confirmDelete(item) {
      this.job = item;
      this.dialog1 = true;
    },
    async deleteJob() {
      this.loading = true;
      const jobDetails = {
        id: this.job.id,
      };
      await API.graphql({
        query: deleteOfertasTrabajo,
        variables: { input: jobDetails },
      });
      this.close();
    },
    // Job End
    close() {
      this.ofertas = [];
      this.GetOfertasTrabajo();
      this.job = {};
      this.dialog = false;
      this.dialog1 = false;
    },
    closeDelete() {
      this.job = {};
      this.dialog1 = false;
    },
  },
};
</script>

<style></style>
