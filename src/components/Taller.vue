<template>
  <v-row class="mx-2">
    <v-col cols="12" sm="6">
      <v-card>
        <h1 class="text-center">Talleres</h1>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex xs3 class="px-3">
              <v-text-field
                label="Nombre"
                v-model="name"
                clearable
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs3 class="px-3">
              <v-text-field
                label="Direccion"
                v-model="direccion"
                clearable
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs3 class="px-3 pt-10">
              <button @click="createTaller">Create</button>
              <v-spacer></v-spacer>
              <button @click="updateTaller">Update</button>
            </v-flex>
          </v-layout>
        </v-container>
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
        >
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
      </v-card>
    </v-col>
    <v-col cols="12" sm="6">
      <v-card>
        <h1 class="text-center">Clientes</h1>

        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex xs3 class="px-3">
              <v-text-field
                label="Nombre"
                v-model="cliente.name"
                clearable
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs3 class="px-3">
              <v-text-field
                label="numeroTelefono"
                v-model="cliente.numeroTelefono"
                clearable
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs3 class="px-3">
              <v-text-field
                label="correo"
                v-model="cliente.correo"
                clearable
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs3 class="px-3 pt-10">
              <v-btn @click="createCliente">Create</v-btn>
              <v-spacer></v-spacer>
              <!-- <button @click="updateTecnico">Update</button> -->
            </v-flex>
          </v-layout>
        </v-container>
        <v-card flat>
          <v-row>
            <v-col>{{ cliente.name }}</v-col>
            <v-col>{{ cliente.numeroTelefono }}</v-col>
            <v-col>{{ cliente.correo }}</v-col></v-row
          >
        </v-card>
        <v-data-table
          :headers="headers1"
          :items="clientes"
          :footer-props="{
            showFirstLastPage: true,
            itemsPerPage: [10, 25, 50, { text: 'All', value: -1 }],
          }"
          class="elevation-1"
          item-key="name"
        >
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
                  <!-- <v-btn
                    depressed
                    outlined
                    icon
                    fab
                    dark
                    color="red"
                    small
                    @click="deleteCliente(item)"
                  >
                    <v-icon>v-icon notranslate mdi mdi-delete theme--dark</v-icon>
                  </v-btn> -->
                </td>
              </tr>
            </tbody>
          </template>
        </v-data-table>
        <div class="text-center">
          <v-overlay :value="overlay">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
          </v-overlay>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { API } from "aws-amplify";
import { createTaller } from "../graphql/mutations";
import { updateTaller } from "../graphql/mutations";
import { deleteTaller } from "../graphql/mutations";
import { listTallers } from "../graphql/queries";

import { listTecnicos } from "../graphql/queries";
import { createTecnico } from "../graphql/mutations";

import { createCliente } from "../graphql/mutations";
import { listClientes } from "../graphql/queries";
// import { deleteCliente } from "../graphql/queries";

export default {
  name: "App",
  async created() {
    this.getTalleres();
    this.getClientes();
  },
  data() {
    return {
      name: "",
      direccion: "",
      nameTecnico: "",
      cargo: "",
      talleres: [],
      clientes: [],
      taller: {},
      cliente: {},
      search: "",
      overlay: false,
      menu1: false,
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
      headers1: [
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
          text: "numeroTelefono",
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
  methods: {
    // Talleres
    async getTalleres() {
      // this.overlay = true;
      const talleres = await API.graphql({
        query: listTallers,
      });
      this.talleres = talleres.data.listTallers.items;
      this.overlay = false;
    },
    async createTaller() {
      const { name, direccion } = this;
      if (!name || !direccion) return;
      const taller = { name, direccion };
      this.talleres = [...this.talleres, taller];
      await API.graphql({
        query: createTaller,
        variables: { input: taller },
      });
      this.name = "";
      this.direccion = "";
      this.menu1 = false;
    },
    async update(item) {
      this.taller.id = item.id;
      this.name = item.name;
      this.direccion = item.direccion;
      console.log(this.taller.id);
    },
    async updateTaller() {
      const { name, direccion } = this;
      const id = this.taller.id;
      const taller = { id, name, direccion };
      console.log(taller);
      await API.graphql({ query: updateTaller, variables: { input: taller } });
      this.getTalleres();
      this.name = "";
      this.direccion = "";
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

    // Cliente
    async getClientes() {
      const clientes = await API.graphql({
        query: listClientes,
      });
      this.clientes = clientes.data.listClientes.items;
    },
    async createCliente() {
      var cliente = this.cliente;
      await API.graphql({
        query: createCliente,
        variables: { input: cliente },
      });
      this.cliente = {};
      this.getClientes();
    },
    // async deleteCliente(item) {
    //   const clienteDetails = {
    //     id: item.id,
    //   };
    //   await API.graphql({
    //     query: deleteCliente,
    //     variables: { input: clienteDetails },
    //   });
    //   this.getClientes();
    // },
    // Cliente End

    // Técnico
    async getTecnicos() {
      const tecnicos = await API.graphql({
        query: listTecnicos,
      });
      this.tecnicos = tecnicos.data.listTecnicos.items;
    },

    async createTecnico() {
      console.log("createTecnico");
      const { nameTecnico, cargo } = this;
      if (!nameTecnico || !cargo) return;
      const tecnico = { nameTecnico, cargo };
      this.tecnicos = [...this.tecnicos, tecnico];
      await API.graphql({
        query: createTecnico,
        variables: { input: tecnico },
      });
      this.nameTecnico = "";
      this.cargo = "";
      this.taller = {};
    },
  },
};
</script>
