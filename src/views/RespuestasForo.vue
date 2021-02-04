<template>
  <div class="px-2 mt-4">
    <v-row>
      <v-col class="col-md6 mt-3">
        <v-card>
          <v-card-text class="mx-2">
            <v-row class="mx-2">
              <p
                class="d-none d-sm-flex d-md-none d-md-flex d-lg-none d-lg-flex d-xl-none d-xl-flex display-1 font-weight-light orange--text"
              >
                {{ post.title }}
              </p>
              <v-spacer />
              <v-btn text outlined color="primary" router-lik to="/PublicPost"
                >Hacer una Pregunta</v-btn
              ></v-row
            >
            <v-divider class="pt-5" />
            <v-card-text v-html="post.content"> </v-card-text>
            <p class="subtitle-1 mt-3">Tu respuesta</p>
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
              <v-btn class="mx-2" outlined
                ><v-icon left> mdi-close-octagon </v-icon>Cancelar</v-btn
              >
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="d-none d-lg-flex d-xl-flex" cols="3">
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
import { createAnswer } from "../graphql/mutations";

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
    post: {},
  }),
  computed: {},
  async created() {
    this.getPost();
  },
  methods: {
    getPost() {
      this.post = JSON.parse(localStorage.getItem("Post"));
    },
    async createAnswer() {
      const answer = this.answer;
      answer.postID = this.post.blogID;
      await API.graphql({
        query: createAnswer,
        variables: { input: answer },
      });
      this.$router.push("/foro");
      this.answer = {};
    },
  },
};
</script>

<style></style>
