<template>
  <div>
    <v-list-item v-if="$vuetify.theme.dark == false">
      <v-list-item-content>
        <v-btn text medium @click="temaOscuro()">
          <v-icon left>mdi-weather-night</v-icon> Tema Oscuro
        </v-btn>
      </v-list-item-content>
    </v-list-item>
    <v-list-item v-if="$vuetify.theme.dark == true">
      <v-btn text medium @click="temaClaro()">
        <v-icon left>mdi-weather-sunny</v-icon> Tema Claro
      </v-btn>
    </v-list-item>
  </div>
</template>

<script>
export default {
  data: () => ({}),

  computed: {},
  created() {
    var localDb = JSON.parse(localStorage.getItem("darkUsersDb"));
    if (localDb.dark == true) {
      this.$vuetify.theme.dark = true;
    } else {
      this.$vuetify.theme.dark = false;
    }
  },

  watch: {},
  methods: {
    temaOscuro() {
      var darkUser = { dark: true };
      localStorage.setItem("darkUsersDb", JSON.stringify(darkUser));
      this.$vuetify.theme.dark = true;
    },
    temaClaro() {
      var darkUser = { dark: false };
      localStorage.setItem("darkUsersDb", JSON.stringify(darkUser));
      this.$vuetify.theme.dark = false;
    },
  },
};
</script>

<style>
</style>