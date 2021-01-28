<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :search="search"
      :items="talleres"
      :footer-props="{
        showFirstLastPage: true,
        itemsPerPage: [10, 25, 50, { text: 'All', value: -1 }],
      }"
      class="elevation-1"
      item-key="name"
      ><template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Talleres</v-toolbar-title>
          <v-progress-linear
            :active="loading"
            :indeterminate="loading"
            absolute
            bottom
            color="deep-orange"
          ></v-progress-linear>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Buscar"
            single-line
            hide-details
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                Nuevo Taller
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field v-model="taller.name" label="Nombre"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="taller.direccion"
                        label="Dirección"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="createTaller"> Aceptar </v-btn>
                <v-btn color="blue darken-1" text @click="close"> Cancelar </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline"
                >Estas seguro que deseas eliminar este taller?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="deleteTaller">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:body="{ items }">
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.direccion }}</td>
            <td>
              <v-btn
                depressed
                outlined
                icon
                fab
                dark
                color="blue"
                small
                @click="update(item)"
              >
                <v-icon>v-icon notranslate mdi mdi-pen theme--dark</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import { API } from "aws-amplify";
import { createTaller } from "../../graphql/mutations";
import { updateTaller } from "../../graphql/mutations";
import { deleteTaller } from "../../graphql/mutations";
import { listTallers } from "../../graphql/queries";

export default {
  name: "App",

  data() {
    return {
      talleres: [],
      taller: {},
      search: "",
      dialogDelete: false,
      overlay: false,
      loading: false,
      dialog: false,
      editedIndex: -1,
      editedItem: {},
      defaultItem: {},
      headers: [
        {
          text: "id",
          align: "left",
          sortable: true,
          value: "id",
        },
        {
          text: "Nombre",
          align: "left",
          sortable: true,
          value: "name",
        },
        {
          text: "Direccion",
          align: "left",
          sortable: true,
          value: "direccion",
        },
        { text: "Acciones", value: "action", sortable: false },
      ],
    };
  },
  async created() {
    this.getTalleres();
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo Taller" : "Editar Taller";
    },
  },
  methods: {
    // Talleres
    async getTalleres() {
      this.loading = true;
      const talleres = await API.graphql({
        query: listTallers,
      });
      this.talleres = talleres.data.listTallers.items;
      this.loading = false;
    },
    async createTaller() {
      const taller = this.taller;
      if (!taller.name || !taller.direccion) return;
      this.talleres = [...this.talleres, taller];
      await API.graphql({
        query: createTaller,
        variables: { input: taller },
      });
      this.taller = {};
      this.getTalleres();
      this.dialog = false;
    },
    async update(item) {
      this.taller = item;
      this.dialog = true;
    },
    async updateTaller() {
      const taller = this.taller;
      await API.graphql({ query: updateTaller, variables: { input: taller } });
      this.getTalleres();
      this.taller = {};
    },

    async deleteTaller(item) {
      const tallerDetails = {
        id: item.id,
      };
      await API.graphql({
        query: deleteTaller,
        variables: { input: tallerDetails },
      });
      this.getTalleres();
    },
    // Talleres End
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
  },
};
</script>
