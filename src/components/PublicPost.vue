<template>
  <div class="mx-2">
    <v-row>
      <v-col cols="12" sm="4" md="3" class="mt-3">
        <v-card max-width="344">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="display-1 font-weight-thin mb-4 text-center orange--text">
                ¿ Como debes preguntar en este foro ?
              </div>
              <v-list-item-subtitle>
                Aquí le dejo algunos concejos que lo pueden ayudar
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider />
          <v-expansion-panels>
            <v-expansion-panel v-for="item in comoPreguntar" :key="item.id" flat>
              <v-expansion-panel-header>
                {{ item.title }}
              </v-expansion-panel-header>
              <v-expansion-panel-content
                v-for="contenido in item.content"
                :key="contenido.id"
              >
                <v-icon small>mdi-checkbox-blank-circle</v-icon>
                {{ contenido.text }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-col>
      <v-col cols="12" sm="8" md="6" class="mt-3">
        <v-app-bar fixed dense class="d-none d-flex d-sm-none d-sm-flex d-md-none">
          <v-toolbar-title class="mr-3">Hacer una Pregunta</v-toolbar-title>
        </v-app-bar>
        <v-card>
          <div class="mx-4">
            <div class="display-1 font-weight-thin mb-4">Título</div>
            <p>
              Sea específico y tenga en cuenta que le está haciendo una pregunta a otra
              persona
            </p>
            <v-text-field v-model="post.title" outlined></v-text-field>
            <p class="display-1 font-weight-thin">Cuerpo</p>
            <p>
              Describa bien su problema para que la persona que va a responder tenga los
              elementos necesarios
            </p>
            <tiptap-vuetify
              v-model="post.content"
              :extensions="extensions"
              :toolbar-attributes="{ color: 'primary' }"
              placeholder="Descripción de su problema …"
              min-height="300"
            >
            </tiptap-vuetify>
            <p class="mt-4">
              Agregue etiquetas para describir de qué se trata su problema
            </p>
            <v-autocomplete
              v-model="post.blogID"
              :items="blogs"
              item-text="name"
              item-value="id"
              outlined
              dense
              chips
              label="Etiquetas"
            ></v-autocomplete>
            <v-card-actions>
              <v-row>
                <div class="text-center">
                  <v-menu
                    v-model="menu"
                    :close-on-content-click="false"
                    :nudge-width="80"
                    offset-x
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn class="mx-2 mt-2" outlined v-bind="attrs" v-on="on"
                        ><v-icon left> mdi-label </v-icon>Nueva Etiqueta</v-btn
                      >
                    </template>

                    <v-card>
                      <v-list>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title
                              >Crear una nueva etiqueta</v-list-item-title
                            >
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>

                      <v-divider></v-divider>

                      <v-list>
                        <v-list-item>
                          <v-text-field
                            v-model="blog.name"
                            :counter="50"
                            :rules="tituloRules"
                            label="Nombre"
                            required
                          ></v-text-field>
                        </v-list-item>
                      </v-list>

                      <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn text color="primary" @click="createBlog()">Aceptar</v-btn>
                        <v-btn text @click="menu = false">Cancelar</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-menu>
                </div>
                <v-spacer></v-spacer>
                <v-btn outlined class="mx-2 mt-2" @click="createPost()"
                  ><v-icon left> mdi-publish </v-icon>Publicar</v-btn
                >
                <v-btn class="mx-2 mt-2" outlined
                  ><v-icon left> mdi-close-octagon </v-icon>Cancelar</v-btn
                >
              </v-row>
            </v-card-actions>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" sm="3" md="3" class="d-none d-lg-flex d-xl-flex">
        <Promociones />
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import the component and the necessary extensions
import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  CodeBlock,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
  History,
  Image,
} from "tiptap-vuetify";
import Promociones from "../components/Promociones";

import { API } from "aws-amplify";
import { createPost } from "../graphql/mutations";

import { createBlog } from "../graphql/mutations";
import { listBlogs } from "../graphql/queries";

export default {
  // specify TiptapVuetify component in "components"
  components: { TiptapVuetify, Promociones },
  data: () => ({
    // declare extensions you want to use
    extensions: [
      History,
      Blockquote,
      Link,
      Underline,
      Strike,
      Italic,
      ListItem,
      BulletList,
      OrderedList,
      [
        Heading,
        {
          options: {
            levels: [1, 2, 3, 4, 5, 6],
          },
        },
      ],
      Bold,
      CodeBlock,
      HorizontalRule,
      Paragraph,
      HardBreak,
      Image,
    ],
    title: "",
    content: "",
    post: {},
    blog: {},
    blogs: [],
    fav: true,
    menu: false,
    message: false,
    hints: true,
    tags: "",
    comoPreguntar: [
      {
        title: "Sintetiza el problema",
        content: [
          { text: "Incluya detalles sobre su objetivo" },
          { text: "Especifica los resultados esperados y los reales" },
          { text: "Incorpora cualquier mensaje de error" },
        ],
      },
      {
        title: "Especifica lo que has probado",
        content: [
          {
            text: "Evite hacer preguntas basadas en opiniones.",
          },
          { text: "Escriba lo que ha probado y exponga lo que encontró." },
        ],
      },
    ],
  }),
  async created() {
    this.getListBlogs();
  },
  methods: {
    async getListBlogs() {
      const blogs = await API.graphql({
        query: listBlogs,
      });
      this.blogs = blogs.data.listBlogs.items;
    },

    async createBlog() {
      const blog = this.blog;
      await API.graphql({
        query: createBlog,
        variables: { input: blog },
      });
      this.close();
    },
    async createPost() {
      const post = this.post;
      await API.graphql({
        query: createPost,
        variables: { input: post },
      });
      this.$router.push("/foro");
      this.post = {};
    },

    close() {
      this.getListBlogs();
      this.blog = {};
      this.menu = false;
    },
  },
};
</script>
