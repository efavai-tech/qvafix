<template>
  <div class="mx-2">
    <v-row>
      <v-col class="d-none d-lg-flex d-xl-flex pt-6" cols="4">
        <v-container>
          <Ranking />
          <v-data-iterator
            :items="talleres"
            :items-per-page.sync="itemsPerPage"
            :page="page"
            :search="search"
            :sort-by="['createdAt']"
            :sort-desc="sortDesc"
            hide-default-footer
          >
            <template v-slot:header>
              <v-toolbar flat>
                <h2>Talleres</h2>
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
                <v-progress-linear
                  :active="loading"
                  :indeterminate="loading"
                  absolute
                  bottom
                  color="deep-orange"
                ></v-progress-linear>
              </v-toolbar>
            </template>
            <template v-slot:default="props">
              <div v-for="item in props.items" :key="item.id">
                <v-list nav dense>
                  <v-list-item @click="detalles(item)">
                    <v-list-item-avatar>
                      <!-- <v-img :src="item.icon"></v-img> -->
                      <v-img src="img/icons/favicon-32x32.png" contain height="32" />
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title v-text="item.name"></v-list-item-title>
                      <v-list-item-subtitle
                        v-text="item.direccion"
                      ></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </div>
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
        </v-container>
      </v-col>
      <v-divider class="mt-6" inset vertical></v-divider>
      <v-col cols="mx-auto" xs="6">
        <v-row>
          <v-col cols="12">
            <v-app-bar fixed dense class="d-none d-flex d-sm-none d-sm-flex d-md-none">
              <v-toolbar-title class="mr-3">QVAfix</v-toolbar-title>
            </v-app-bar>
            <v-parallax height="360" src="img/material2.jpg">
              <v-row align="center" justify="center">
                <p class="display-2 font-weight-thin">QVAfix</p>
                <p class="subheading">Sé parte de nuestra comunidad hoy!</p>
                <p
                  class="headline font-weight-bold d-none d-lg-flex d-xl-flex text-center mx-3"
                >
                  {{ AboutText }}
                </p>
                <p
                  class="text - sm - body - 2 d-none d-sm-flex d-md-none d-flex d-sm-none text-center mx-3"
                >
                  {{ AboutText }}
                </p>
              </v-row>
            </v-parallax>
            <v-row class="text-center mx-2">
              <v-col cols="12" sm="8" md="4" class="mt-3"
                ><p class="display-1 flex display-4 font-weight-black mb-2">Visión</p>
                <p>
                  Ser el punto de referencia de los servicios técnicos en Cuba promoviendo
                  la colaboración y difundiendo los conocimientos y habilidades.
                </p>
              </v-col>
              <v-col cols="12" sm="8" md="8" class="mt-3">
                <p class="display-1 flex display-4 font-weight-black mb-2">Misión</p>
                <p class="text-justify">
                  Promover, fortalecer y difundir el desarrollo de los servicios técnicos
                  en Cuba. Crear un espacio virtual de intercambio y colaboración entre
                  talleres dedicado a los servicios técnicos, así como la posible
                  colaboración con otras formas productivas tanto particulares como
                  estatales y centros de estudios. Crear un espacio donde los clientes se
                  identifiquen con los servicios prestados y puedan escoger su mejor
                  opción para cada necesidad. Promover la cultura de la necesidad del
                  aprendizaje constante en los oficios.
                </p>
              </v-col>
            </v-row>
            <v-row justify="center" class="pt-6">
              <v-col cols="12" sm="6" v-if="$store.state.login">
                <BuscarOrden />
              </v-col>
              <v-col cols="12" sm="6">
                <CardOfertaTrabajo />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-divider class="mt-6" inset vertical></v-divider>
      <v-col class="d-none d-lg-flex d-xl-flex" cols="2">
        <Promociones />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Ranking from "../components/Ranking";
import Promociones from "../components/Promociones";
import BuscarOrden from "../components/BuscarOrden";
import CardOfertaTrabajo from "../components/CardOfertaTrabajo";

import { API } from "aws-amplify";
import { listTallers } from "../graphql/queries";
import { getTaller } from "../graphql/queries";

export default {
  components: {
    Ranking,
    Promociones,
    BuscarOrden,
    CardOfertaTrabajo,
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.talleres.length / this.itemsPerPage);
    },
    filteredKeys() {
      return this.keys.filter((key) => key !== `createdAt`);
    },
  },

  created() {
    this.$store.commit("SET_LAYOUT", "Principal");
    this.getTalleres();
    this.getTendenciasFromApi();
  },
  data: () => ({
    loading: false,
    talleres: [],
    tendencias: [],
    itemsPerPageArray: [10, 20, 30],
    search: "",
    page: 1,
    itemsPerPage: 5,
    sortDesc: true,
    AboutText:
      "Pretendemos agrupar a la comunidad de talleres con el objetivo de establecer una colaboración y tener una plaza digital que sea nuestra. Lleve su taller de reparaciones al siguiente nivel de competitividad y calidad en el servicio.",
  }),
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
    async getTalleres() {
      this.loading = true;
      const talleres = await API.graphql({
        query: listTallers,
      });
      this.talleres = talleres.data.listTallers.items;
      this.loading = false;
    },
    async detalles(item) {
      var taller = await API.graphql({
        query: getTaller,
        variables: { id: item.id },
      });
      localStorage.setItem("taller", JSON.stringify(taller));
      this.$router.push("/taller");
    },
  },
};
</script>
<style></style>
