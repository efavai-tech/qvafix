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
              <v-toolbar-titulo class="mr-3"
                >Ofertas
                <v-progress-linear
                  :active="loading"
                  :indeterminate="loading"
                  absolute
                  bottom
                  color="deep-orange"
                ></v-progress-linear
              ></v-toolbar-titulo>
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
                <v-progress-linear
                  :active="loading"
                  :indeterminate="loading"
                  absolute
                  bottom
                  color="deep-orange"
                ></v-progress-linear>
              </v-toolbar>
            </div>
            <v-row justify="end">
              <v-col> <CreateJob /> </v-col
            ></v-row>
          </template>

          <template v-slot:default="props">
            <v-card v-for="item in props.items" :key="item.id" cols="12" class="mt-3">
              <v-row>
                <v-col cols="12" sm="4" md="2">
                  <v-img src="img/icons/favicon-32x32.png" contain height="32" />
                  {{ item.taller.name }}
                </v-col>
                <v-col cols="12" sm="8" md="10">
                  <v-row>
                    <v-col cols="12" sm="12" md="12">
                      <p class="title text-justify orange--text mx-2">
                        {{ item.titulo }}
                      </p>
                    </v-col>
                    <v-col cols="12" sm="8" md="8">
                      <p class="text-justify mx-2">
                        {{ item.contenido }}
                      </p>
                    </v-col>
                    <v-col cols="12" sm="12" md="4">
                      <v-btn color="blue-grey" class="white--text">
                        Aplicar
                        <v-icon right dark> mdi-cloud-upload </v-icon>
                      </v-btn>
                      <div class="mt-5">
                        <v-tooltip top color="primary">
                          <template v-slot:activator="{ on }">
                            <v-btn
                              class="v-btn v-btn--depressed v-btn--fab v-btn--flat v-btn--icon v-btn--outlined v-btn--round theme--dark v-size--small primary--text"
                              small
                              v-on="on"
                              @click="editItem(item)"
                            >
                              <v-icon>v-icon notranslate mdi mdi-pen theme--dark</v-icon>
                            </v-btn>
                          </template>
                          <span>Editar</span>
                        </v-tooltip>
                        <v-tooltip top color="red">
                          <template v-slot:activator="{ on }">
                            <v-btn
                              class="v-btn v-btn--depressed v-btn--fab v-btn--flat v-btn--icon v-btn--outlined v-btn--round theme--dark v-size--small red--text"
                              small
                              v-on="on"
                              @click="confirmDelete(item)"
                            >
                              <v-icon
                                >v-icon notranslate mdi mdi-delete theme--dark</v-icon
                              >
                            </v-btn>
                          </template>
                          <span>Eliminar</span>
                        </v-tooltip>
                      </div>
                    </v-col>
                  </v-row>
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
import { listTallers } from "../graphql/queries";

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
    loading: false,
    page: 1,
    panel: [],
    itemsPerPage: 5,
    sortBy: "titulo",
    keys: ["titulo", "contenido"],
    ofertas: [],
  }),
  async created() {
    this.GetOfertasTrabajo();
    const ofertas = [
      {
        taller: { name: "Bartolete" },
        titulo: "Hay una Vacante en el Taller De Calle Medio",
        contenido: "Se busca mecánico con experiencia de más de 3 años",
      },
      {
        taller: { name: "Alejo S.A" },
        titulo: "Nesecidad de dos Técnicos",
        contenido:
          "Se busca mecánico con experiencia de más de 3 años y un eléctrico con título",
      },
      {
        taller: { name: "Pérez" },
        titulo: "Hay una Vacante en el Taller De Calle Medio",
        contenido: "Se busca mecánico con experiencia de más de 3 años",
      },
    ];
    this.ofertas = ofertas;
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
      this.loading = true;
      const result = await API.graphql({
        query: listOfertasTrabajos,
      });
      var ofertas = result.data.listOfertasTrabajos.items;
      this.loading = false;
      // getTalleres
      const t = await API.graphql({
        query: listTallers,
      });
      var talleres = t.data.listTallers.items;

      ofertas.forEach((item) => {
        var taller = talleres.find((x) => x.id === item.taller);
        // item.taller.name = taller.name;
        var oferta = item;
        oferta.taller = taller;
        this.ofertas.push(oferta);
        console.log(oferta);
      });

      // const t = this.talleres.find((x) => x.id === this.ofertas[i].taller);
    },
  },
};
</script>

<style></style>
