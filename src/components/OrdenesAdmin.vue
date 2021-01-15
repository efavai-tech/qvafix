<template>
  <div>
    <h1 class="text-center">Ordenes Admin</h1>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs3 class="px-3">
          <v-text-field label="Nombre" v-model="name" clearable required></v-text-field>
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
          <tr v-for="item in items" :key="item.name">
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
              <v-btn
                depressed
                outlined
                icon
                fab
                dark
                color="red"
                small
                @click="updateTaller(item)"
              >
                <v-icon>v-icon notranslate mdi mdi-delete theme--dark</v-icon>
              </v-btn>
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
  </div>
</template>

<script>
import { API } from "aws-amplify";
import { createTaller } from "../graphql/mutations";
import { updateTaller } from "../graphql/mutations";
import { deleteTaller } from "../graphql/mutations";
import { listTallers } from "../graphql/queries";

export default {
  name: "App",
  async created() {
    this.getTalleres();
  },
  data() {
    return {
      name: "",
      direccion: "",
      talleres: [],
      taller: {},
      search: "",
      overlay: false,
      menu1: false,
      headers: [
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
  methods: {
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
    },
    async updateTaller() {
      const { name, direccion } = this;
      const id = this.taller.id;
      const taller = { id, name, direccion };
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
  },
};
</script>
