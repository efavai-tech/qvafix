<template>
  <div>
    <v-app-bar fixed dense class="d-none d-flex d-sm-none d-sm-flex d-md-none">
      <v-toolbar-title class="mr-3">Mis órdenes</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-text-field
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
      ></v-text-field> -->
    </v-app-bar>
    <v-responsive v-if="tieneOrdenes">
      <div>
        <v-card
          v-for="orden in ordenes"
          :key="orden.id"
          :class="`pa-3 orden ma-2 ${orden.estado}`"
        >
          <v-row no-gutters class="text-center">
            <v-col cols="3">
              <div class="caption grey--text">Taller</div>
              <div>{{ orden.tecnico.taller.name }}</div>
            </v-col>
            <v-col cols="6">
              <div class="caption grey--text">Equipo</div>
              <div>{{ orden.equipo.nombre }}</div>
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
      </div>
    </v-responsive>
    <v-responsive v-if="!tieneOrdenes">
      <v-progress-linear
        :active="loading"
        :indeterminate="loading"
        absolute
        color="deep-orange"
      ></v-progress-linear>
      <v-container>
        <v-alert color="blue-grey" dark dense icon="mdi-clipboard-list-outline" prominent>
          {{ textCard }}
        </v-alert>
      </v-container>
    </v-responsive>
  </div>
</template>

<script>
import { API } from "aws-amplify";
import { Auth } from "aws-amplify";

import { getCliente } from "../../graphql/queries";
import { listClientes } from "../../graphql/queries";

export default {
  components: {},
  data: () => ({
    loading: false,
    tieneOrdenes: false,
    username: undefined,
    ordenes: [],
    itemsPerPageArray: [10, 20, 30],
    search: "",
    filter: {},
    sortDesc: false,
    page: 1,
    panel: [],
    textCard: "",
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
    // var ifConnected = window.navigator.onLine;
    // if (ifConnected) {
    //   this.textCard = "Conección Disponible";
    // } else {
    //   this.textCard = "No tienes Conección";
    // }
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
    this.getCliente();
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
    // Cliente con todas sus órdenes
    async getCliente() {
      this.loading = true;
      this.textCard = "Buscando";
      // Saber el cliente por el correo
      const clientes = await API.graphql({
        query: listClientes,
      });
      var ListClientes = clientes.data.listClientes.items;
      var cliente = ListClientes.find((x) => x.correo == this.username);
      if (cliente == null) {
        this.loading = false;
        this.textCard = "Usted no es cliente de ningún taller";
      } else {
        // Saber el cliente por el correo end
        const result = await API.graphql({
          query: getCliente,
          variables: { id: cliente.id },
        });

        this.ordenes = result.data.getCliente.ordenServicio.items;
        if (result.data.getCliente.ordenServicio.items.length != 0) {
          this.tieneOrdenes = true;
        } else {
          this.textCard = "Usted no tiene órdenes a su nombre";
        }
        this.loading = false;
      }
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
