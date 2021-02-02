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
        outlined
        append-icon="mdi-magnify"
      ></v-text-field>
    </v-app-bar>
    <v-responsive v-if="tieneOrdenes">
      <div>
        <v-card
          v-for="orden in ordenes"
          :key="orden.id"
          :class="`pa-3 orden ma-2 ${orden.estado}`"
        >
          <v-row no-gutters>
            <v-col cols="5">
              <div class="caption grey--text">Equipo</div>
              <div>{{ orden.equipoID }}</div>
            </v-col>
            <v-col cols="3">
              <div class="caption grey--text">Taller</div>
              <div>{{ orden.tecnicoID }}</div>
            </v-col>
            <v-col cols="4">
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
      </div>
    </v-responsive>
    <v-responsive v-if="!tieneOrdenes"
      ><v-container>
        <v-alert
          color="blue-grey"
          dark
          dense
          icon="mdi-order-alphabetical-ascending"
          prominent
        >
          Usted no tiene órdenes en proceso
        </v-alert>
      </v-container>
    </v-responsive>
  </div>
</template>

<script>
import { API } from "aws-amplify";
import { Auth } from "aws-amplify";

import { getCliente } from "../../graphql/queries";
// import { listClientes } from "../../graphql/queries";

// import Promociones from "";
export default {
  components: {
    // Promociones,
  },
  data: () => ({
    openSearch: false,
    tieneOrdenes: false,
    username: undefined,
    ordenes: [
      // {
      //   numero: "22568",
      //   equipo: "laptop",
      //   taller: "Bartolete Pérez",
      //   estado: "enrevision",
      // },
    ],
    itemsPerPageArray: [10, 20, 30],
    search: "",
    filter: {},
    sortDesc: false,
    page: 1,
    panel: [],
    cliente: {},
    itemsPerPage: 5,
    sortBy: "createdAt",
    keys: ["id", "taller", "equipo", "estado"],
  }),
  computed: {
    numberOfPages() {
      return Math.ceil(this.ordenes.length / this.itemsPerPage);
    },
    filteredKeys() {
      return this.keys.filter((key) => key !== `taller`);
    },
  },
  async created() {
    this.getCliente();
    Auth.currentAuthenticatedUser({
      bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
      .then((user) => {
        this.username = user.attributes.email;
        this.$store.commit("Login");
      })
      .catch((err) => {
        if (err == "The user is not authenticated") {
          this.$store.commit("logout");
        }
      });
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
    // Query using a parameter
    // const oneTodo = await API.graphql({ query: queries.getTodo, variables: { id: 'some id' }});

    // ordenes
    async getCliente() {
      // const clienteId = "2891c2e8-1254-4291-b4f3-a93540af0600";

      const result = await API.graphql({
        query: getCliente,
        variables: { id: "c758ba36-b1ac-4b0c-bf88-1a459ec81fa4" },
      });
      this.ordenes = result.data;
      if (result.data.getCliente.ordenServicio.items.length != 0) {
        this.tieneOrdenes = true;
      }
      console.log("result");
      console.log(result.data);
    },
  },
};
</script>

<style>
.orden.finalizada {
  border-left: 5px solid #3ac590;
}
.orden.enrevision {
  border-left: 5px solid #ebb00f;
}
.v-chip.finalizada {
  background: #3ac590 !important;
}
.v-chip.enrevision {
  background: #ebb00f !important;
}
</style>
