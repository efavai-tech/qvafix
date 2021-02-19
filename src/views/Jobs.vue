<template>
  <div class="px-3">
    <v-row class="text-center">
      <v-col cols="mx-auto">
        <v-data-iterator
          :items="ofertas"
          :items-per-page.sync="itemsPerPage"
          :page="page"
          :search="search"
          :sort-by="['createdAt']"
          :sort-desc="sortDesc"
          hide-default-footer
        >
          <template v-slot:header>
            <v-app-bar fixed dense class="d-none d-flex d-sm-none d-sm-flex d-md-none">
              <v-toolbar-title class="mr-3"
                >Ofertas
                <v-progress-linear
                  :active="loading"
                  :indeterminate="loading"
                  absolute
                  bottom
                  color="deep-orange"
                ></v-progress-linear
              ></v-toolbar-title>
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
            <div class="d-none d-lg-flex d-xl-flex">
              <v-toolbar class="mb-1">
                <v-icon large>mdi-briefcase-variant-outline</v-icon>
                <h2>Ofertas de Empleo</h2>
                <v-col v-if="admin">
                  <v-btn
                    color="blue-grey"
                    class="white--text"
                    @click="dialog = true"
                    v-if="$vuetify.breakpoint.mdAndUp"
                    >Crear</v-btn
                  >
                </v-col>
                <v-spacer />
                <v-text-field
                  v-model="search"
                  flat
                  clearable
                  solo-inverted
                  hide-details
                  label="Buscar"
                  icon="mdi-bag-checked"
                ></v-text-field>
                <template v-if="$vuetify.breakpoint.mdAndUp">
                  <div class="flex-grow-1"></div>
                  <v-btn-toggle mandatory>
                    <v-btn large depressed @click="sortDesc = true">
                      <v-icon>mdi-arrow-up</v-icon>
                    </v-btn>
                    <v-btn large depressed @click="sortDesc = false">
                      <v-icon>mdi-arrow-down</v-icon>
                    </v-btn>
                  </v-btn-toggle>
                </template>
                <v-progress-linear
                  :active="loading"
                  :indeterminate="loading"
                  absolute
                  bottom
                  color="deep-orange"
                ></v-progress-linear>
              </v-toolbar>
            </div>
            <v-col v-if="admin">
              <v-btn
                color="blue-grey"
                class="white--text"
                @click="dialog = true"
                v-if="!$vuetify.breakpoint.mdAndUp"
                >Crear Oferta de Empleo</v-btn
              >
            </v-col>
          </template>

          <template v-slot:default="props">
            <v-responsive v-if="enviado">
              <v-alert
                class="mx-2"
                color="success"
                dark
                dense
                icon="mdi-check-all"
                prominent
              >
                {{ textCard }}
              </v-alert>
            </v-responsive>
            <v-card v-for="item in props.items" :key="item.id" cols="12" class="mt-2">
              <v-row>
                <v-col cols="12" sm="4" md="2">
                  <v-img src="img/icons/favicon-32x32.png" contain height="32" />
                  {{ item.taller.name }}<br />
                  {{ item.taller.direccion }}
                </v-col>
                <v-col cols="12" sm="8" md="9">
                  <v-row>
                    <v-col cols="12" sm="12" md="11">
                      <p class="title text-justify orange--text mx-2">
                        {{ item.titulo }}
                      </p>
                    </v-col>
                    <v-col cols="12" sm="8" md="8">
                      <p class="text-justify mx-2">
                        {{ item.contenido }}
                      </p>
                      <p class="text-justify mx-2">
                        {{ item.createdAt | formatDate }}
                      </p>
                    </v-col>
                    <v-row justify="end">
                      <v-col cols="12" sm="12" md="4">
                        <v-btn
                          color="blue-grey"
                          class="white--text"
                          @click="confirmAplicar(item)"
                          :loading="loading"
                        >
                          Aplicar
                          <v-icon right dark> mdi-cloud-upload </v-icon>
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-row>
                </v-col>
                <v-col cols="12" sm="12" md="1" v-if="admin">
                  <v-icon class="primary--text" @click="editItem(item)"
                    >v-icon notranslate mdi mdi-pen theme--dark</v-icon
                  >
                  <v-divider class="mx-1" inset vertical></v-divider>
                  <v-icon class="red--text" @click="confirmDelete(item)"
                    >v-icon notranslate mdi mdi-delete theme--dark</v-icon
                  >
                </v-col>
              </v-row>
            </v-card>
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
                    <v-list-item-titulo>{{ number }}</v-list-item-titulo>
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
        <!-- CreateJob -->
        <v-dialog
          transition="dialog-top-transition"
          v-model="dialog"
          max-width="600"
          persistent
        >
          <v-card>
            <v-toolbar dark
              >Oferta laboral

              <v-progress-linear
                :active="loading"
                :indeterminate="loading"
                absolute
                bottom
                color="dep-orange"
              ></v-progress-linear
            ></v-toolbar>

            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="job.titulo"
                  :counter="50"
                  :rules="tituloRules"
                  label="Título"
                  required
                ></v-text-field>
                <v-select
                  v-model="job.tallerID"
                  :items="talleres"
                  :rules="[(v) => !!v || 'El taller es requerido']"
                  label="Taller"
                  item-value="id"
                  item-text="name"
                  required
                ></v-select>
                <v-textarea
                  v-model="job.contenido"
                  name="input-7-1"
                  label="Descipción de la oferta laboral"
                ></v-textarea>
              </v-form>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn text color="primary" @click="save()">Aceptar</v-btn>
              <v-btn text @click="dialog = false">Cancelar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!-- /CreateJob -->
        <!-- DeleteJob -->
        <v-dialog
          transition="dialog-top-transition"
          v-model="dialog1"
          max-width="250"
          persistent
        >
          <v-card color="#385F73" dark>
            <v-progress-linear
              :active="loading"
              :indeterminate="loading"
              absolute
              bottom
              color="dep-orange"
            ></v-progress-linear>
            <div class="text-center">
              <v-card-text class="white--text">
                <div class="headline text-center mb-2">¿ Estas Seguro ?</div>
                de eliminar esta oferta de empleo.
              </v-card-text>
              <v-divider></v-divider>
              <v-btn text @click="deleteJob(item)">Aceptar</v-btn>
              <v-btn text @click="closeDelete()">Cancelar</v-btn>
            </div>
          </v-card>
        </v-dialog>
        <!-- /DeleteJob -->
        <!-- respuesta si no esta logeado -->
        <v-dialog v-model="dialog2" width="300">
          <v-card color="#385F73" dark>
            <v-card-title></v-card-title>
            <v-card-text class="headline font-weight-bold text-center">
              Para aplicar al trabajo usted debe estar logeado
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text router-link to="/Login"> Login </v-btn>
              <v-btn text @click="dialog2 = false"> Cancelar </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!-- Aplicar -->
        <v-dialog
          transition="dialog-top-transition"
          v-model="dialog3"
          max-width="600"
          persistent
        >
          <v-card>
            <v-toolbar dark
              >Oferta laboral

              <v-progress-linear
                :active="loading"
                :indeterminate="loading"
                absolute
                bottom
                color="dep-orange"
              ></v-progress-linear
            ></v-toolbar>

            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-row>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-model="aspirante.name"
                      label="Nombre"
                      placeholder="Nombre y Apellidos"
                      required
                    ></v-text-field
                  ></v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-model="aspirante.correo"
                      :rules="emailRules"
                      label="correo"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <vue-tel-input-vuetify
                      :preferred-countries="['cu', 'gb', 'ua', 'us']"
                      :valid-characters-only="true"
                      select-label="Código"
                      label="Número de Teléfono"
                      placeholder=""
                      @input="onInput"
                      v-model="phone.number"
                      required
                    ></vue-tel-input-vuetify>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn text color="primary" @click="aplicar()" :loading="loading"
                >Aceptar</v-btn
              >
              <v-btn text @click="dialog3 = false">Cancelar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!-- /Aplicar -->
      </v-col>
      <v-col class="d-none d-lg-flex d-xl-flex" cols="3">
        <Promociones />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Promociones from "../components/Promociones";

import { API } from "aws-amplify";
import VueTelInputVuetify from "vue-tel-input-vuetify/lib/vue-tel-input-vuetify.vue";

import { listTallers } from "../graphql/queries";
import { listOfertaTrabajos } from "../graphql/queries";
import { createOfertaTrabajo } from "../graphql/mutations";
import { updateOfertaTrabajo } from "../graphql/mutations";
import { deleteOfertaTrabajo } from "../graphql/mutations";

import { createAspirante } from "../graphql/mutations";

export default {
  components: {
    Promociones,
    VueTelInputVuetify,
  },
  data: () => ({
    itemsPerPageArray: [10, 20, 30],
    search: "",
    searchClosed: true,
    filter: {},
    loading: false,
    page: 1,
    panel: [],
    itemsPerPage: 5,
    sortDesc: true,
    keys: ["createdAt", "titulo", "contenido"],
    ofertas: [],
    job: { fecha: "", tallerID: {} },
    dialog: false,
    dialog1: false,
    dialog2: false,
    dialog3: false,
    overlay: false,
    valid: true,
    talleres: [],
    phone: {
      number: "",
      valid: false,
      country: undefined,
    },
    editedIndex: -1,
    tituloRules: [
      (v) => !!v || "El titulo es requerido",
      (v) => (v && v.length <= 50) || "El título de tener menos de 50 caracteres",
    ],
    emailRules: [
      (v) => !!v || "El email es requerido",
      (v) => /.+@.+\..+/.test(v) || "Debe tener una dirección válida",
    ],
    user: {},
    aspirante: {},
    textCard: "",
    enviado: false,
  }),
  async created() {
    var user = JSON.parse(localStorage.getItem("user"));
    if (user != null) {
      this.user = user;
    }
    this.getTalleres();
    this.GetOfertasTrabajo();
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.ofertas.length / this.itemsPerPage);
    },
    filteredKeys() {
      return this.keys.filter((key) => key !== `createdAt`);
    },
    method() {
      return this.editedIndex === -1 ? "POST" : "PUT";
    },
    admin: function () {
      if (this.user.groups.includes("admin")) {
        return true;
      }
      return false;
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
    onInput(formattedNumber, { number, valid, country }) {
      this.phone.number = number.international;
      this.phone.valid = valid;
      this.phone.country = country && country.name;
    },
    // Talleres
    async getTalleres() {
      const talleres = await API.graphql({
        query: listTallers,
      });
      this.talleres = talleres.data.listTallers.items;
    },
    async GetOfertasTrabajo() {
      this.loading = true;
      const result = await API.graphql({
        query: listOfertaTrabajos,
      });
      this.ofertas = result.data.listOfertaTrabajos.items;
      this.loading = false;
    },
    editItem(item) {
      this.editedIndex = item.id;
      this.job = item;
      this.dialog = true;
    },
    // Job
    async save() {
      if (this.method === "POST") {
        this.loading = true;
        var job = this.job;
        job.fecha = new Date();
        await API.graphql({
          query: createOfertaTrabajo,
          variables: { input: job },
        });
        this.close();
      }
      if (this.method === "PUT") {
        this.loading = true;
        const j = this.job;
        const job = {};
        job.id = j.id;
        job.titulo = j.titulo;
        job.contenido = j.contenido;
        job.fecha = j.fecha;
        await API.graphql({
          query: updateOfertaTrabajo,
          variables: { input: job },
        });
        this.close();
      }
    },
    confirmDelete(item) {
      this.job = item;
      this.dialog1 = true;
    },
    async deleteJob() {
      this.loading = true;
      const jobDetails = {
        id: this.job.id,
      };
      await API.graphql({
        query: deleteOfertaTrabajo,
        variables: { input: jobDetails },
      });
      this.close();
    },
    confirmAplicar(item) {
      var login = this.$store.state.login;
      this.job = item;
      console.log(login);
      if (!login) {
        this.dialog2 = true;
      } else {
        this.aspirante.correo = this.user.email;
        this.phone.number = this.user.phone_number;
        this.dialog3 = true;
      }
    },
    async aplicar() {
      this.loading = true;
      const { phone } = this;
      const phone_number = phone.number.replace(/ /g, "");
      var aspirante = this.aspirante;
      aspirante.numeroTelefono = phone_number;
      aspirante.ofertaTrabajoID = this.job.id;

      await API.graphql({
        query: createAspirante,
        variables: { input: aspirante },
      });
      this.dialog3 = false;
      this.loading = false;
      this.enviado = true;
      this.textCard = "Su solicitud a sido enviada";
      setTimeout(() => (this.enviado = false), 5000);
    },
    // Job End
    close() {
      this.ofertas = [];
      this.GetOfertasTrabajo();
      this.job = {};
      this.dialog = false;
      this.dialog1 = false;
    },
    closeDelete() {
      this.job = {};
      this.dialog1 = false;
    },
  },
};
</script>

<style></style>
