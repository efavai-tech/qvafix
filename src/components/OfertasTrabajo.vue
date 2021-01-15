<template>
  <v-row align="center">
    <v-col cols="2"></v-col>
    <v-col cols="10">
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
          <v-toolbar class="mb-1">
            <v-text-field
              v-model="search"
              flat
              clearable
              solo-inverted
              hide-details
              label="Buscar"
            ></v-text-field>
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <div class="flex-grow-1"></div>
              <div class="d-none d-lg-flex d-xl-flex">
                <v-btn text @click="all" class="mx-2"
                  ><v-icon>mdi-arrow-expand-vertical</v-icon>Ver Todos</v-btn
                >
                <v-btn text @click="none" class="mx-2"
                  ><v-icon>mdi-arrow-collapse-vertical</v-icon>Cerrar</v-btn
                >
              </div>
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
        </template>

        <template v-slot:default="props">
          <v-row>
            <div class="mt-3 d-flex d-sm-flex d-none d-md-none d-sm-none">
              <v-btn text @click="all" class="mx-2"
                ><v-icon>mdi-arrow-expand-vertical</v-icon>Ver Todos</v-btn
              >
              <v-btn text @click="none" class="mx-2"
                ><v-icon>mdi-arrow-collapse-vertical</v-icon>Cerrar</v-btn
              >
            </div>
            <v-expansion-panels
              v-model="panel"
              popout
              inset
              multiple
              class="mx-3"
            >
              <v-expansion-panel
                v-for="item in props.items"
                :key="item.taller"
                cols="12"
                sm="6"
                md="4"
                lg="3"
              >
                <v-expansion-panel-header class="subheading font-weight-bold"
                  >{{ item.taller }} ({{
                    item.title
                  }})</v-expansion-panel-header
                >
                <v-expansion-panel-content
                  v-for="(key, index) in filteredKeys"
                  :key="index"
                >
                  <v-list-item-content class="align-end">{{
                    item[key.toLowerCase()]
                  }}</v-list-item-content>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-row>
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
                  <v-list-item-title>{{ number }}</v-list-item-title>
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
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      itemsPerPageArray: [10, 20, 30],
      search: "",
      filter: {},
      sortDesc: false,
      page: 1,
      panel: [],
      itemsPerPage: 5,
      sortBy: "taller",
      keys: ["taller", "title", "contenido"],
      ofertas: [
        {
          taller: "Bartolete",
          title: "Hay una Vacante en el Taller De Calle Medio",
          contenido: "Se busca mecánico con experiencia de más de 3 años",
        },
        {
          taller: "Alejo S.A",
          title: "Nesecidad de dos Técnicos",
          contenido:
            "Se busca mecánico con experiencia de más de 3 años y un eléctrico con título",
        },
        {
          taller: "Bartolete",
          title: "Hay una Vacante en el Taller De Calle Medio",
          contenido: "Se busca mecánico con experiencia de más de 3 años",
        },
        {
          taller: "Alejo S.A",
          title: "Nesecidad de dos Técnicos",
          contenido:
            "Se busca mecánico con experiencia de más de 3 años y un eléctrico con título",
        },
        {
          taller: "Bartolete",
          title: "Hay una Vacante en el Taller De Calle Medio",
          contenido: "Se busca mecánico con experiencia de más de 3 años",
        },
        {
          taller: "Bartolete",
          title: "Hay una Vacante en el Taller De Calle Medio",
          contenido: "Se busca mecánico con experiencia de más de 3 años",
        },
        {
          taller: "Alejo S.A",
          title: "Nesecidad de dos Técnicos",
          contenido:
            "Se busca mecánico con experiencia de más de 3 años y un eléctrico con título",
        },
        {
          taller: "Bartolete",
          title: "Hay una Vacante en el Taller De Calle Medio",
          contenido: "Se busca mecánico con experiencia de más de 3 años",
        },
        {
          taller: "Alejo S.A",
          title: "Nesecidad de dos Técnicos",
          contenido:
            "Se busca mecánico con experiencia de más de 3 años y un eléctrico con título",
        },
        {
          taller: "Bartolete",
          title: "Hay una Vacante en el Taller De Calle Medio",
          contenido: "Se busca mecánico con experiencia de más de 3 años",
        },
        {
          taller: "Alejo S.A",
          title: "Nesecidad de dos Técnicos",
          contenido: "Se busca empresario para saber si filtra",
        },
      ],
    };
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.ofertas.length / this.itemsPerPage);
    },
    filteredKeys() {
      return this.keys.filter((key) => key !== `taller`);
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
    // Create an array the length of our items
    // with all values as true
    all() {
      this.panel = [...Array(this.ofertas.length).keys()].map((k, i) => i);
    },
    // Reset the panel
    none() {
      this.panel = [];
    },
  },
};
</script>