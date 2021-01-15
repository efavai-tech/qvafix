<template>
  <div class="px-3">
    <v-row class="text-center">
      <v-col class="col-md6">
        <v-data-iterator
          :items="ofertas"
          :items-per-page.sync="itemsPerPage"
          :page="page"
          :search="search"
          :sort-by="sortBy.toLowerCase()"
          :sort-desc="sortDesc"
          hide-default-footer
        >
          <template v-slot:header>
            <v-app-bar fixed dense class="d-none d-flex d-sm-none d-sm-flex d-md-none">
              <v-toolbar-titulo class="mr-3">Ofertas</v-toolbar-titulo>
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
                <v-spacer />
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
                  <v-btn-toggle v-model="sortDesc" mandatory>
                    <v-btn large depressed :value="false">
                      <v-icon>mdi-arrow-up</v-icon>
                    </v-btn>
                    <v-btn large depressed :value="true">
                      <v-icon>mdi-arrow-down</v-icon>
                    </v-btn>
                  </v-btn-toggle>
                </template>
              </v-toolbar>
            </div>
            <v-row>
              <v-col class="text-right"> <CreateJob /> </v-col
            ></v-row>
          </template>

          <template v-slot:default="props">
            <v-card v-model="panel" popout inset multiple class="col-md6" flat>
              <v-card
                v-for="item in props.items"
                :key="item.id"
                cols="12"
                sm="6"
                md="4"
                lg="3"
                class="mt-3"
              >
                <v-row>
                  <v-col cols="2" sm="1">
                    <v-img
                      src="img/icons/favicon-32x32.png"
                      class="my-3 ml-2"
                      contain
                      height="32"
                    />
                  </v-col>
                  <v-col cols="10" sm="9">
                    <h3 class="text-justify mt-3 mr-2">{{ item.titulo }}</h3>
                    <v-card-text>
                      <v-list-item-content class="text-justify">{{
                        item.contenido
                      }}</v-list-item-content>
                    </v-card-text>
                  </v-col>
                  <v-spacer></v-spacer>
                  <v-col cols="4" sm="2" class="d-none d-lg-flex d-xl-flex">
                    <v-btn color="blue-grey" class="ma-2 white--text">
                      Aplicar
                      <v-icon right dark> mdi-cloud-upload </v-icon>
                    </v-btn>
                  </v-col>
                </v-row>

                <v-row justify="center">
                  <v-col
                    cols="4"
                    sm="2"
                    class="d-none d-sm-flex d-md-none d-flex d-sm-none"
                  >
                    <v-btn color="blue-grey" class="ma-2 white--text">
                      Aplicar
                      <v-icon right dark> mdi-cloud-upload </v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card>
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
      </v-col>
      <v-col class="d-none d-lg-flex d-xl-flex" cols="3">
        <Promociones />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Promociones from "../components/Promociones";
import CreateJob from "../components/CreateJob";

import { API } from "aws-amplify";
import { listOfertasTrabajos } from "../graphql/queries";

export default {
  components: {
    Promociones,
    CreateJob,
  },
  data: () => ({
    itemsPerPageArray: [10, 20, 30],
    search: "",
    filter: {},
    sortDesc: false,
    page: 1,
    panel: [],
    itemsPerPage: 5,
    sortBy: "titulo",
    keys: ["titulo", "contenido"],
    ofertas: [],
  }),
  async created() {
    this.GetOfertasTrabajo();
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.ofertas.length / this.itemsPerPage);
    },
    filteredKeys() {
      return this.keys.filter((key) => key !== `titulo`);
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
    async GetOfertasTrabajo() {
      const ofertas = await API.graphql({
        query: listOfertasTrabajos,
      });
      this.ofertas = ofertas.data.listOfertasTrabajos.items;
    },
  },
};
</script>

<style></style>
