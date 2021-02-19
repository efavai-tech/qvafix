<template>
  <v-container>
    <v-data-table :headers="headers" :items="talleres" sort-by="name" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Talleres</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-btn color="primary" dark class="mb-2 mt-2" @click="dialog = true">
            Nuevo Taller
          </v-btn>
          <v-progress-linear
            :active="loading"
            :indeterminate="loading"
            absolute
            bottom
            color="deep-orange"
          ></v-progress-linear>
          <v-dialog v-model="dialog" persistent max-width="950px">
            <v-card :loading="loading">
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="taller.name"
                        :rules="nameRules"
                        label="Nombre"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="taller.correo"
                        :rules="emailRules"
                        label="correo"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="taller.direccion"
                        label="Dirección"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12">
                      <v-row wrap>
                        <v-col cols="12" sm="6" md="6" class="px-1 pl-3">
                          <v-text-field
                            v-model="telefono.numero"
                            label="Teléfono"
                            append-icon="mdi-cellphone-android"
                            clearable
                          ></v-text-field>
                        </v-col>
                        <v-tooltip top color="success">
                          <template v-slot:activator="{ on }">
                            <v-icon medium v-on="on" @click="agregar()" color="success"
                              >mdi-plus</v-icon
                            >
                          </template>
                          <span>Agregar</span>
                        </v-tooltip>
                        <v-col cols="12" sm="6" md="6" class="px-1">
                          <v-chip-group multiple column active-class="primary--text">
                            <v-chip
                              v-for="telefono in telefonos"
                              :key="telefono.id"
                              outlined
                              close
                              @click:close="quitar(telefono)"
                            >
                              <v-icon left>mdi-cellphone-android</v-icon>
                              No: {{ telefono.numero }}
                            </v-chip>
                          </v-chip-group>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-textarea
                        rows="3"
                        v-model="taller.mision"
                        label="Misión"
                      ></v-textarea>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-textarea
                        rows="3"
                        v-model="taller.vision"
                        label="Visión"
                      ></v-textarea>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-textarea
                        rows="3"
                        v-model="taller.descripcionLaboral"
                        label="¿ A qué se dedican ?"
                      ></v-textarea>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-textarea
                        rows="3"
                        v-model="taller.otro"
                        label="Algo más"
                      ></v-textarea>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="save()" :loading="salvando">
                  Aceptar
                </v-btn>
                <v-btn text @click="close"> Cancelar </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog v-model="dialog1" persistent max-width="300px">
            <v-card>
              <v-card-title justify="center"
                >¿ Estas seguro que deseas eliminar este taller ?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="deleteTaller()">Aceptar</v-btn>
                <v-btn text @click="close()">Cancelar</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn depressed outlined icon fab color="blue" small @click="update(item)">
          <v-icon>v-icon notranslate mdi mdi-pen theme--dark</v-icon>
        </v-btn>
        <v-btn depressed outlined icon fab color="teal" small @click="detalles(item)">
          <v-icon>mdi-format-list-bulleted</v-icon>
        </v-btn>
        <v-btn depressed outlined icon fab color="red" small @click="confirmDelete(item)">
          <v-icon>v-icon notranslate mdi mdi-delete theme--dark</v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>
<script>
import { API } from "aws-amplify";
import { createTaller } from "../graphql/mutations";
import { updateTaller } from "../graphql/mutations";
import { deleteTaller } from "../graphql/mutations";

import { createTelefono } from "../graphql/mutations";
import { deleteTelefono } from "../graphql/mutations";

import { listTallers } from "../graphql/queries";
import { getTaller } from "../graphql/queries";

export default {
  name: "App",

  data() {
    return {
      talleres: [],
      telefonos: [],
      telefono: [],
      taller: {},
      search: "",
      dialogDelete: false,
      overlay: false,
      loading: false,
      salvando: false,
      dialog: false,
      dialog1: false,
      editedIndex: -1,
      editedItem: {},
      defaultItem: {},
      valid: true,
      result: {},
      prueba: {},
      nameRules: [(v) => !!v || "El nombre es requerido"],
      emailRules: [
        (v) => !!v || "El correo es requerido",
        (v) => /.+@.+\..+/.test(v) || "Debe tener una dirección de correo válida",
      ],
      headers: [
        {
          text: "Nombre",
          align: "left",
          sortable: true,
          value: "name",
        },
        {
          text: "Correo",
          align: "left",
          sortable: true,
          value: "correo",
        },
        {
          text: "Direccion",
          align: "left",
          sortable: true,
          value: "direccion",
        },
        { text: "Acciones", value: "actions", sortable: false },
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
    method() {
      return this.editedIndex === -1 ? "POST" : "PUT";
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
    async save() {
      if (this.$refs.form.validate()) {
        if (this.method === "POST") {
          this.salvando = true;
          const taller = this.taller;
          if (!taller.name || !taller.direccion) return;
          this.talleres = [...this.talleres, taller];
          await API.graphql({
            query: createTaller,
            variables: { input: taller },
          }).then((data) => {
            this.result = data;
          });
          if (this.telefonos.length != 0) {
            this.telefonos.forEach((element) => {
              var telefono = {};
              telefono.numero = element.numero;
              telefono.descripcion = "";
              telefono.tallerID = this.result.data.createTaller.id;
              API.graphql({
                query: createTelefono,
                variables: { input: telefono },
              });
            });
          }
          this.taller = {};
          this.getTalleres();
          this.salvando = false;
          this.dialog = false;
        }
        if (this.method === "PUT") {
          const taller = this.taller;
          this.salvando = true;
          await API.graphql({
            query: updateTaller,
            variables: { input: taller },
          });
          // eliminar telefonos
          this.telefonos.forEach((telefono) => {
            const telefonoDetails = {
              id: telefono.id,
            };
            API.graphql({
              query: deleteTelefono,
              variables: { input: telefonoDetails },
            });
          });
          // crear nuevos telefonos
          if (this.telefonos.length != 0) {
            this.telefonos.forEach((element) => {
              var telefono = {};
              telefono.numero = element.numero;
              telefono.descripcion = "";
              telefono.tallerID = taller.id;
              API.graphql({
                query: createTelefono,
                variables: { input: telefono },
              });
            });
          }
          this.dialog = false;
          this.getTalleres();
          this.salvando = false;
          this.taller = {};
        }
      }
    },
    async update(item) {
      this.dialog = true;
      this.loading = true;
      var result = await API.graphql({
        query: getTaller,
        variables: { id: item.id },
      });
      var t = result.data.getTaller;
      this.loading = false;
      var taller = {
        id: t.id,
        name: t.name,
        correo: t.correo,
        descripcionLaboral: t.descripcionLaboral,
        direccion: t.direccion,
        logo: t.logo,
        mision: t.mision,
        vision: t.vision,
        otro: t.otro,
      };
      this.telefonos = t.telefonos.items;
      this.taller = taller;
      this.editedIndex = item.id;
    },
    async detalles(item) {
      var taller = await API.graphql({
        query: getTaller,
        variables: { id: item.id },
      });
      localStorage.setItem("taller", JSON.stringify(taller));
      this.$router.push("/taller");
    },
    confirmDelete(item) {
      this.taller = item;
      this.dialog1 = true;
    },
    async deleteTaller() {
      const tallerDetails = {
        id: this.taller.id,
      };
      await API.graphql({
        query: deleteTaller,
        variables: { input: tallerDetails },
      });
      this.dialog1 = false;
      this.getTalleres();
    },
    agregar() {
      this.telefonos.push(this.telefono);
      this.telefono = { numero: "" };
    },
    quitar(item) {
      this.telefonos.splice(this.telefonos.indexOf(item), 1);
    },
    // Talleres End
    close() {
      this.dialog = false;
      this.dialog1 = false;
      this.taller = {};
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
  },
};
</script>
