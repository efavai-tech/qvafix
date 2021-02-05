<template>
  <v-container grid-list-xs>
    <v-row>
      <v-col class="mx-auto">
        <v-card flat>
          <v-container>
            <v-row>
              <p
                class="d-none d-sm-flex d-md-none d-md-flex d-lg-none d-lg-flex d-xl-none d-xl-flex display-1 font-weight-light orange--text"
              >
                {{ post.title }}
              </p>
              <v-spacer />
              <v-btn text outlined color="primary" router-lik to="/PublicPost"
                >Hacer una Pregunta</v-btn
              ></v-row
            ></v-container
          >
          <v-card-text v-html="post.content"> </v-card-text>
          <div class="font-weight-light title mb-2">
            {{ post.answer.items.length }} Respuestas
          </div>
          <div v-if="post.answer.items.length != 0">
            <v-card flat v-for="item in post.answer.items" :key="item.id">
              <v-card-text>
                {{ item.createdAt | formatDate }}
                <p v-html="item.content"></p>
                <v-row>
                  <v-btn text @click="addcomment()" color="primary" class="text-lowercase"
                    >añadir comentario</v-btn
                  >
                </v-row>
              </v-card-text>
              <v-divider />
            </v-card>
            <v-divider />
          </div>
          <p class="subtitle-1 mt-6">Tu respuesta</p>
          <tiptap-vuetify
            v-model="answer.content"
            :extensions="extensions"
            :toolbar-attributes="{ color: 'primary' }"
            placeholder="Descripción de su respuesta …"
            min-height="300"
          >
          </tiptap-vuetify>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn outlined @click="createAnswer()"
              ><v-icon left> mdi-publish </v-icon>Publicar</v-btn
            >
            <v-btn class="mx-2" outlined router-link to="/Foro"
              ><v-icon left> mdi-close-octagon </v-icon>Cancelar</v-btn
            >
          </v-card-actions>
        </v-card>
        <!-- Createcomment -->
        <v-dialog
          transition="dialog-top-transition"
          v-model="dialog"
          max-width="600"
          persistent
        >
          <v-card>
            <v-toolbar dark>
              <v-progress-linear
                :active="loading"
                :indeterminate="loading"
                absolute
                bottom
                color="dep-orange"
              ></v-progress-linear
            ></v-toolbar>

            <v-card-text>
              <v-form ref="form" lazy-validation>
                <v-textarea
                  v-model="comment.content"
                  name="input-7-1"
                  label="Descipción de su comentario"
                ></v-textarea>
              </v-form>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn text color="primary" @click="createComment()">Aceptar</v-btn>
              <v-btn text @click="dialog = false">Cancelar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!-- /Createcomment -->
      </v-col>
      <v-col class="d-none d-lg-flex d-xl-flex" cols="3">
        <Promociones />
      </v-col>
    </v-row>
  </v-container>
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
import { createAnswer } from "../graphql/mutations";
import { createComment } from "../graphql/mutations";

export default {
  components: { TiptapVuetify, Promociones },

  data: () => ({
    answer: {},
    tema: {
      avatar: "img/avatar/avatar-7.png",
      action: "15 min",
      headline: "Brunch this weekend?",
      title: "Tengo Problemas con algo",
      subtitle:
        "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
    },
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
    extensions1: [],
    loading: false,
    dialog: false,
    post: {},
    comment: {},
  }),
  computed: {},
  async created() {
    this.getPost();
  },
  methods: {
    getPost() {
      var post = JSON.parse(localStorage.getItem("Post"));
      this.post = post.data.getPost;
    },

    async createAnswer() {
      const answer = this.answer;
      answer.postID = this.post.id;
      await API.graphql({
        query: createAnswer,
        variables: { input: answer },
      });
      this.$router.push("/foro");
      this.answer = {};
    },
    addcomment() {
      this.dialog = true;
      this.comment.postID = this.post.id;
    },
    async createComment() {
      this.loading = true;
      const comment = this.comment;
      await API.graphql({
        query: createComment,
        variables: { input: comment },
      });
      this.$router.push("/respuestasForo");
      this.answer = {};
    },
  },
};
</script>

<style></style>
