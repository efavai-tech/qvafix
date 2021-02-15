<template>
  <div class="px-3 mt-4">
    <v-row>
      <v-col class="d-none d-lg-flex d-xl-flex mt-3" cols="2">
        <v-card flat>
          <v-list threeLine>
            <h2 class="ml-4">Más vistos</h2>
            <v-list-item-group>
              <v-list-item v-for="(item, i) in masVistos" :key="i">
                <v-list-item-content>
                  <v-list-item-title v-html="item.title"></v-list-item-title>
                  <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="mx-auto">
        <v-data-iterator
          :items="posts"
          :items-per-page.sync="itemsPerPage"
          :page="page"
          :search="search"
          :sort-by="['createdAt']"
          :sort-desc="sortDesc"
          hide-default-footer
        >
          <template v-slot:header>
            <v-app-bar fixed dense class="d-flex d-sm-none d-sm-flex d-md-none">
              <v-toolbar-title class="mr-3">Últimas publicaciones</v-toolbar-title
              ><v-spacer></v-spacer>
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
            <v-row class="mx-1">
              <v-col cols="12" sm="8">
                <h2
                  class="d-none d-sm-flex d-md-none d-md-flex d-lg-none d-lg-flex d-xl-none d-xl-flex display-1 font-weight-light orange--text"
                >
                  Últimas publicaciones
                </h2></v-col
              >
              <v-spacer />
              <v-btn
                text
                outlined
                color="primary"
                router-lik
                to="/PublicPost"
                class="mt-6"
                v-if="logueado"
                >Hacer una Pregunta</v-btn
              >
              <v-btn
                text
                outlined
                color="primary"
                @click="dialog = true"
                class="mt-6"
                v-if="!logueado"
                >Hacer una Pregunta</v-btn
              >
            </v-row>
          </template>
          <v-spacer />

          <template v-slot:default="props">
            <v-card v-model="panel" popout inset multiple class="col-md6 mt-2" flat>
              <div class="mx-auto" tile>
                <v-list threeLine avatar rounded>
                  <v-list-item color="primary">
                    <v-row>
                      <v-list-item
                        v-for="item in props.items"
                        :key="item.id"
                        color="grey darken-1"
                      >
                        <v-list-item-avatar v-if="avatar">
                          <v-img :src="item.avatar"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title>{{ item.title }} </v-list-item-title>
                          <v-list-item-subtitle v-html="item.content">
                          </v-list-item-subtitle>
                          <p class="text-justify">
                            {{ item.createdAt | formatDate }}
                            <v-chip outlined>{{ item.blog.name }}</v-chip>
                          </p>
                          <div v-if="$vuetify.breakpoint.xsOnly" class="pt-2">
                            <!-- <v-btn small text color="primary">9<br />Vistas</v-btn> -->
                            <v-btn small text color="success" @click="respuestaForo(item)"
                              >3<br />Respuestas</v-btn
                            >
                            <!-- <v-btn small text>1<br />Votos</v-btn> -->
                          </div>
                        </v-list-item-content>
                        <v-btn-toggle shaped mandatory v-if="!$vuetify.breakpoint.xsOnly">
                          <!-- <v-btn text>{{ item.vistas }}<br />Vistas</v-btn> -->
                          <v-btn text @click="respuestaForo(item)"
                            ><br />Respuestas</v-btn
                          >
                          <!-- <v-btn text>{{ item.votos }}<br />Votos</v-btn> -->
                        </v-btn-toggle>
                      </v-list-item>
                    </v-row>
                  </v-list-item>
                </v-list>
              </div>
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
                    <v-list-item-title>{{ number }}</v-list-item-title>
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
        <v-dialog v-model="dialog" width="300">
          <v-card color="#385F73" dark>
            <v-card-title></v-card-title>
            <v-card-text class="headline font-weight-bold text-center">
              Para hacer una pregunta usted debe estar logeado
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text router-link to="/Login"> Login </v-btn>
              <v-btn text @click="dialog = false"> Cancelar </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
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
import { listPosts } from "../graphql/queries";
import { getPost } from "../graphql/queries";

export default {
  components: {
    Promociones,
  },
  data: () => ({
    dialog: false,
    itemsPerPageArray: [10, 20, 30],
    search: "",
    filter: {},
    posts: [],
    page: 1,
    panel: [],
    itemsPerPage: 5,
    sortDesc: true,
    keys: ["title", "content"],
    masVistos: [
      {
        avatar: "img/material2.jpg",
        title: "Brunch this weekend?",
        subtitle:
          "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle:
          "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",
      },
    ],
    selected: [2],
    temas: [],
    avatar: true,
    threeLine: true,
    rounded: true,
  }),
  computed: {
    logueado: function () {
      return this.$store.state.login;
    },
    numberOfPages() {
      return Math.ceil(this.posts.length / this.itemsPerPage);
    },
    filteredKeys() {
      return this.keys.filter((key) => key !== `title`);
    },
  },
  async created() {
    this.getListPosts();
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
    async getListPosts() {
      const posts = await API.graphql({
        query: listPosts,
      });
      this.posts = posts.data.listPosts.items;
    },
    async respuestaForo(item) {
      if (this.$store.state.login) {
        var post = await API.graphql({
          query: getPost,
          variables: { id: item.id },
        });
        localStorage.setItem("Post", JSON.stringify(post));
        this.$router.push({
          name: "RespuestasForo",
        });
      } else {
        this.dialog = true;
      }
    },
  },
};
</script>

<style></style>
