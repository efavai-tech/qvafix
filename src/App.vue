<template>
    <v-app>
      <component :is="layout"> </component>
    </v-app>
</template>
<script>
import Principal from "./components/Layouts/PrincipalLayout";
import Login from "./components/Layouts/LoginLayout";
import Admin from "./components/Layouts/AdminLayout";
export default {
  name: "App",
  components: {
    Login,
    Admin,
    Principal,
  },
  computed: {
    layout() {
      return this.$store.state.layout;
    },
  },
  data: () => ({ value: "recent" }),
  methods: {},

  beforeCreate() {
    this.$vuetify.theme.dark = this.$store.state.dark_theme;
    console.log(localStorage.dark_theme);
  },
};
</script>

