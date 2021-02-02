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
      <v-col class="col-md7 mt-3">
        <v-data-iterator
          :items="posts"
          :items-per-page.sync="itemsPerPage"
          :page="page"
          hide-default-footer
        >
          <template v-slot:header>
            <v-app-bar fixed dense class="d-flex d-sm-none d-sm-flex d-md-none">
              <v-toolbar-title class="mr-3">Últimas publicaciones</v-toolbar-title>
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
              <LoginDialog v-if="!logueado" />
              <v-btn
                text
                outlined
                color="primary"
                router-lik
                to="/PublicPost"
                class="mt-3"
                v-if="logueado"
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
                          <v-div v-if="$vuetify.breakpoint.xsOnly" class="pt-2">
                            <v-btn small text color="primary">9<br />Vistas</v-btn>
                            <v-btn small text color="success">3<br />Respuestas</v-btn>
                            <v-btn small text>1<br />Votos</v-btn>
                          </v-div>
                        </v-list-item-content>
                        <v-btn-toggle shaped mandatory v-if="!$vuetify.breakpoint.xsOnly">
                          <v-btn text>{{ item.vistas }}<br />Vistas</v-btn>
                          <v-btn text>{{ item.comments.length }}<br />Respuestas</v-btn>
                          <v-btn text>{{ item.votos }}<br />Votos</v-btn>
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
      </v-col>
      <v-col class="d-none d-lg-flex d-xl-flex" cols="3">
        <Promociones />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Promociones from "../components/Promociones";
import LoginDialog from "../components/LoginDialog";
import { API } from "aws-amplify";
import { listPosts } from "../graphql/queries";
export default {
  components: {
    Promociones,
    LoginDialog,
  },
  data: () => ({
    itemsPerPageArray: [10, 20, 30],
    buscar: "",
    filter: {},
    sortDesc: false,
    posts: [],
    page: 1,
    panel: [],
    itemsPerPage: 10,
    sortBy: "vistas",
    keys: ["avatar", "action", "headline", "title", "subtitle"],
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
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Oui oui",
        subtitle:
          "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        title: "Birthday gift",
        subtitle:
          "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        title: "Recipe to try",
        subtitle:
          "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
      },
    ],
    selected: [2],
    temas: [
      {
        avatar: "img/avatar/avatar-7.png",
        action: "15 min",
        headline: "Brunch this weekend?",
        title: "Ali Connors",
        subtitle:
          "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        vistas: 83,
        respuestas: 6,
        votos: 0,
        link: "/respuestasForo",
      },
      {
        avatar: "img/avatar/avatar-2.png",
        action: "2 hr",
        headline: "Summer BBQ",
        title: "me, Scrott, Jennifer",
        subtitle: "Wish I could come, but I'm out of town this weekend.",
        vistas: 3,
        respuestas: 7,
        votos: 1,
        link: "/respuestasForo",
      },
    ],
    avatar: true,
    threeLine: true,
    rounded: true,
  }),
  computed: {
    logueado: function () {
      return this.$store.state.login;
    },
    numberOfPages() {
      return Math.ceil(this.temas.length / this.itemsPerPage);
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
  },
};
</script>

<style></style>
