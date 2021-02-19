<template>
  <div>
    <v-bottom-navigation grow app>
      <v-btn icon router-link to="/">
        <span>Home</span>
        <v-icon>mdi-home-outline</v-icon>
      </v-btn>
      <v-btn icon router-link to="/foro">
        <span>Foro</span>

        <v-icon>mdi-forum-outline</v-icon>
      </v-btn>
      <v-btn icon router-link to="/jobs">
        <span>Jobs</span>
        <v-badge bordered dot overlap color="#E54918" v-if="nuevo > 0">
          <v-icon>mdi-briefcase-variant-outline</v-icon>
        </v-badge>
        <v-icon v-if="nuevo <= 0">mdi-briefcase-variant-outline</v-icon>
      </v-btn>
      <v-btn icon router-link to="/Login" v-if="!logueado">
        <span>Login</span>

        <v-icon>mdi-login</v-icon>
      </v-btn>
      <v-menu
        v-model="menu1"
        top
        offset-y
        transition="slide-x-transition"
        v-if="admin && logueado"
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <span>Admin</span>
            <v-icon>mdi-briefcase-upload</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-list>
            <v-list dense nav>
              <v-list-item
                v-for="item in items1"
                :key="item.title"
                router-link
                :to="item.link"
              >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-list>
        </v-card>
      </v-menu>
      <v-menu v-model="menu" top offset-y transition="slide-x-transition">
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on" v-if="logueado">
            <span>Yo</span>

            <v-icon>mdi-account</v-icon>
          </v-btn>
        </template>

        <v-card>
          <v-list>
            <v-list-item>
              <v-list-item class="px-2">
                <v-list-item-avatar>
                  <v-img src="img/default-avatar-man.jpg"></v-img>
                </v-list-item-avatar>
                <v-list-item-title>{{ user.email }}</v-list-item-title>
              </v-list-item>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list>
            <v-list dense nav>
              <v-list-item
                v-for="item in items"
                :key="item.title"
                router-link
                :to="item.link"
              >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item @click="signOut()">
                <v-list-item-icon>
                  <v-icon>mdi-logout</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Cerrar Sesión</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-list>
          <v-card-actions>
            <v-row justify="start" no-gutters>
              <v-card-text>Tema</v-card-text>
              <v-col cols="5" sm="2" class="mr-2">
                <v-btn @click="enableDark" block active-class="primary"
                  ><v-icon right>mdi-weather-night</v-icon></v-btn
                >
              </v-col>
              <v-col cols="5" sm="2">
                <v-btn @click="disableDark" block active-class="primary"
                  ><v-icon right>mdi-white-balance-sunny</v-icon></v-btn
                >
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-menu>
    </v-bottom-navigation>
  </div>
</template>

<script>
import { Auth } from "aws-amplify";

export default {
  components: {},
  data: () => ({
    menu: false,
    menu1: false,
    nuevo: 10,
    drawer: null,
    user: { groups: [] },
    items: [
      {
        title: "Mis Ordenes",
        icon: "mdi-clipboard-list-outline",
        link: "/MisOrdenes",
      },
      // {
      //   title: "Solicitudes Empleo",
      //   icon: "mdi-briefcase-variant",
      //   link: "/SolicitudesEmpleo",
      // },
    ],
    items1: [
      {
        title: "Órdenes",
        icon: "mdi-clipboard-list-outline",
        link: "/ordenes",
      },
      {
        title: "Talleres",
        icon: "mdi-account-group",
        link: "/talleres",
      },
      {
        title: "Clientes",
        icon: "mdi-account-group",
        link: "/clientes",
      },
    ],
  }),
  created() {
    var user = JSON.parse(localStorage.getItem("user"));
    if (user != null) {
      this.user = user;
    }
  },
  computed: {
    logueado: function () {
      return this.$store.state.login;
    },
    admin: function () {
      if (this.user.groups.includes("admin")) {
        return true;
      }
      return false;
    },
  },
  methods: {
    enableDark() {
      this.$vuetify.theme.dark = true;
      this.$store.commit("ENABLE_DARK");
    },
    disableDark() {
      this.$vuetify.theme.dark = false;
      this.$store.commit("DISABLE_DARK");
    },
    signOut() {
      Auth.signOut()
        .then(() => {
          this.$store.commit("logout");
          var user = { email: "", groups: [] };
          localStorage.setItem("user", JSON.stringify(user));
          this.$router.push("/");
        })
        .catch((err) => console.log(err));
      this.drawer = false;
    },
  },
};
</script>

<style scoped>
.v-item-group.v-bottom-navigation .v-btn {
  min-width: 20px;
}
</style>
