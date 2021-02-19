<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :search="search"
      :items="ordenes"
      :footer-props="{
        showFirstLastPage: true,
        itemsPerPage: [10, 25, 50, { text: 'All', value: -1 }],
      }"
      class="elevation-1"
      item-key="name"
      ><template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Todas las Órdenes</v-toolbar-title>
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
          <v-btn color="primary" dark class="mb-2" @click="CreateOrdenServicio()">
            Nueva Orden
          </v-btn>
          <v-btn color="primary" dark class="mb-2" @click="CreateEquipo()">
            Nuevo Equipo
          </v-btn>
          <v-btn color="primary" dark class="mb-2" @click="CreateTecnico()">
            Nuevo Tecnico
          </v-btn>
        </v-toolbar>
      </template>
      <template v-slot:body="{ items }">
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.cliente.name }}</td>
            <td>{{ item.equipo.nombre }}</td>
            <td>{{ item.estado }}</td>
            <td>{{ item.tecnico.name }}</td>
            <td>{{ item.tecnico.taller.name }}</td>
            <td>{{ item.createdAt | formatDate }}</td>
            <td>{{ item.fechaDeFinalizado }}</td>
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
import { createOrdenServicio } from "../../graphql/mutations";
import { updateOrdenServicio } from "../../graphql/mutations";
import { deleteOrdenServicio } from "../../graphql/mutations";
import { listOrdenServicios } from "../../graphql/queries";

import { createEquipo } from "../../graphql/mutations";
import { createTecnico } from "../../graphql/mutations";
import { listTecnicos } from "../../graphql/queries";

export default {
  name: "App",

  data() {
    return {
      ordenes: [],
      equipos: [],
      tecnicos: [],
      ordenServicio: {},
      search: "",
      dialog: false,
      dialogDelete: false,
      overlay: false,
      loading: false,
      menu1: false,
      editedIndex: -1,
      editedItem: {},
      defaultItem: {},
      headers: [
        {
          text: "cliente",
          align: "left",
          sortable: true,
          value: "cliente.name",
        },
        {
          text: "equipo",
          align: "left",
          sortable: true,
          value: "equipo.nombre",
        },
        {
          text: "estado",
          align: "left",
          sortable: true,
          value: "estado",
        },
        {
          text: "tecnico",
          align: "left",
          sortable: true,
          value: "tecnico",
        },
        {
          text: "taller",
          align: "left",
          sortable: true,
          value: "tecnico.taller.name",
        },
        {
          text: "Fecha entrada",
          align: "left",
          sortable: true,
          value: "createdAt",
        },
        {
          text: "Fecha de Finalizado",
          align: "left",
          sortable: true,
          value: "fechaDeFinalizado",
        },
        { text: "Acciones", value: "action", sortable: false },
      ],
    };
  },
  async created() {
    this.getOrdenes();
    this.GetTecnicos();
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo Taller" : "Editar Taller";
    },
  },
  methods: {
    // ordenes
    async getOrdenes() {
      this.loading = true;
      const ordenes = await API.graphql({
        query: listOrdenServicios,
      });
      this.ordenes = ordenes.data.listOrdenServicios.items;
      this.loading = false;
    },

    async GetTecnicos() {
      const tecnicos = await API.graphql({
        query: listTecnicos,
      });
      this.tecnicos = tecnicos.data.listTecnicos.items;
    },
    async CreateOrdenServicio() {
      const ordenServicio = {
        id: 4,
        equipoID: 4,
        clienteID: "4999f2ed-a169-410b-a33b-753f7aa8d150",
        estado: "enrevision",
        tecnicoID: 2,
      };
      this.ordenServicio = ordenServicio;
      this.ordenes = [...this.ordenes, ordenServicio];
      await API.graphql({
        query: createOrdenServicio,
        variables: { input: ordenServicio },
      });
      this.ordenServicio = {};
      this.getOrdenes();
    },
    // async CreateOrdenServicio() {
    //   const ordenServicio = this.ordenServicio;
    //   if (!ordenServicio.name || !ordenServicio.direccion) return;
    //   this.ordenes = [...this.ordenes, ordenServicio];
    //   await API.graphql({
    //     query: CreateOrdenServicio,
    //     variables: { input: ordenServicio },
    //   });
    //   this.ordenServicio = {};
    //   this.menu1 = false;
    // },
    async CreateEquipo() {
      const equipo = {
        id: 4,
        nombre: "Celular Huawei",
        descripcion: "Algo",
        clienteID: "4999f2ed-a169-410b-a33b-753f7aa8d150",
      };

      await API.graphql({
        query: createEquipo,
        variables: { input: equipo },
      });
    },
    async CreateTecnico() {
      const tecnico = {
        id: 5,
        name: "Alejo",
        cargo: "Técnico A",
        tallerID: "9d972b3a-ffd3-4950-b037-3da0f781d5c7",
      };

      await API.graphql({
        query: createTecnico,
        variables: { input: tecnico },
      });
    },

    async update(item) {
      this.ordenServicio = item;
      this.dialog = true;
    },
    async updateOrdenServicio() {
      const ordenServicio = this.ordenServicio;
      await API.graphql({
        query: updateOrdenServicio,
        variables: { input: ordenServicio },
      });
      this.getOrdenes();
      this.ordenServicio = {};
    },

    async deleteOrdenServicio(item) {
      const tallerDetails = {
        id: item.id,
      };
      await API.graphql({
        query: deleteOrdenServicio,
        variables: { input: tallerDetails },
      });
      this.getOrdenes();
    },
    // ordenes End
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
