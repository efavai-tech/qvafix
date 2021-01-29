<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :search="search"
      :items="clientes"
      :footer-props="{
        showFirstLastPage: true,
        itemsPerPage: [10, 25, 50, { text: 'All', value: -1 }],
      }"
      class="elevation-1"
      item-key="name"
      ><template v-slot:top>
        <v-toolbar flat>
          <v-row>
            <v-toolbar-title>Clientes</v-toolbar-title>
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
            <v-btn color="primary" dark class="mb-2 mt-2" @click="dialog = true">
              Nuevo cliente
            </v-btn>
          </v-row>
          <v-dialog v-model="dialog" max-width="600px">
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field v-model="cliente.name" label="Nombre"></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                      <vue-tel-input-vuetify
                        :preferred-countries="['cu', 'gb', 'ua', 'us']"
                        :valid-characters-only="true"
                        select-label="Código"
                        label="Número de Teléfono"
                        placeholder=""
                        @input="onInput"
                        required
                      ></vue-tel-input-vuetify>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="cliente.correo"
                        label="Correo"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="createCliente"> Aceptar </v-btn>
                <v-btn color="blue darken-1" text @click="close"> Cancelar </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline"
                >Estas seguro que deseas eliminar este cliente?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="deleteCliente">OK</v-btn>
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
            <td>{{ item.numeroTelefono }}</td>
            <td>{{ item.correo }}</td>
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
import VueTelInputVuetify from "vue-tel-input-vuetify/lib/vue-tel-input-vuetify.vue";

import { createCliente } from "../../graphql/mutations";
import { updateCliente } from "../../graphql/mutations";
import { deleteCliente } from "../../graphql/mutations";
import { listClientes } from "../../graphql/queries";

export default {
  name: "App",
  components: {
    VueTelInputVuetify,
  },
  data() {
    return {
      clientes: [],
      cliente: {},
      phone: {
        number: "",
        valid: false,
        country: undefined,
      },
      search: "",
      loading: false,
      dialog: false,
      dialogDelete: false,
      overlay: false,
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
          text: "Número Teléfono",
          align: "left",
          sortable: true,
          value: "numeroTelefono",
        },
        {
          text: "correo",
          align: "left",
          sortable: true,
          value: "correo",
        },
        { text: "Acciones", value: "action", sortable: false },
      ],
    };
  },
  async created() {
    this.getClientes();
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo cliente" : "Editar cliente";
    },
  },
  methods: {
    // clientes
    async getClientes() {
      this.loading = true;
      const clientes = await API.graphql({
        query: listClientes,
      });
      this.clientes = clientes.data.listClientes.items;
      this.loading = false;
    },
    onInput(formattedNumber, { number, valid, country }) {
      this.phone.number = number.international;
      this.phone.valid = valid;
      this.phone.country = country && country.name;
    },
    async createCliente() {
      var cliente = this.cliente;
      cliente.numeroTelefono = this.phone.number.replace(/ /g, "");

      await API.graphql({
        query: createCliente,
        variables: { input: cliente },
      });
      this.cliente = {};
      this.getClientes();
      this.dialog = false;
    },
    async update(item) {
      this.cliente = item;
      this.dialog = true;
    },
    async updateCliente() {
      const cliente = this.cliente;
      await API.graphql({
        query: updateCliente,
        variables: { input: cliente },
      });
      this.getClientes();
      this.cliente = {};
      this.dialog = false;
    },

    async deleteCliente(item) {
      const clienteDetails = {
        id: item.id,
      };
      await API.graphql({
        query: deleteCliente,
        variables: { input: clienteDetails },
      });
      this.getClientes();
    },
    // clientes End

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
