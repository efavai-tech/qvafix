<template>
  <div>
    <v-app-bar fixed dense class="d-none d-flex d-sm-none d-sm-flex d-md-none">
      <v-toolbar-title class="mr-3">Mis órdenes</v-toolbar-title>
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
    <v-container>
      <v-responsive>
        <v-card
          v-for="orden in ordenes"
          :key="orden.id"
          :class="`pa-3 orden ma-2 ${orden.estado}`"
        >
          <v-row no-gutters>
            <v-col cols="3">
              <div class="caption grey--text">No</div>
              <div>{{ orden.numero }}</div>
            </v-col>
            <v-col cols="6">
              <div class="caption grey--text">Taller</div>
              <div>{{ orden.taller }}</div>
            </v-col>
            <v-col cols="3">
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
        </v-card>
      </v-responsive>
    </v-container>
  </div>
</template>

<script>
// import Promociones from "";
export default {
  components: {
    // Promociones,
  },
  data: () => ({
    openSearch: false,
    ordenes: [
      {
        numero: "22547",
        equipo: "celular",
        taller: "Bartolete Pérez",
        estado: "completada",
      },
      {
        numero: "22568",
        equipo: "laptop",
        taller: "Bartolete Pérez",
        estado: "enrevision",
      },
    ],
    itemsPerPageArray: [10, 20, 30],
    search: "",
    filter: {},
    sortDesc: false,
    page: 1,
    panel: [],
    itemsPerPage: 5,
    sortBy: "taller",
    keys: ["noOrnen", "taller", "equipo", "estado"],
  }),
  computed: {
    numberOfPages() {
      return Math.ceil(this.ordenes.length / this.itemsPerPage);
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