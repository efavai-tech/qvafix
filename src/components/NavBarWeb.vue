<template>
  <div>
    <v-app-bar app>
      <v-toolbar-title>QVAfix</v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-toolbar-items>
        <v-btn text router-link to="/">
          <v-icon left>mdi-home-outline</v-icon>Inicio</v-btn
        >
        <v-btn text router-link to="/foro"
          ><v-icon left>mdi-forum-outline</v-icon>Foro</v-btn
        >
        <v-btn text router-link to="/jobs">
          <v-icon left>mdi-briefcase-variant-outline</v-icon> Empleo</v-btn
        >
        <v-btn text @click.stop="drawer1 = !drawer1">
          <v-icon left>mdi-briefcase-upload</v-icon>
          Admin</v-btn
        >
        <Settings />
        <v-btn text router-link to="/Login" v-if="!logueado">
          <v-icon left>mdi-login</v-icon>Login</v-btn
        >
        <v-btn text @click.stop="drawer = !drawer" v-if="logueado">
          <v-icon left>mdi-account</v-icon>Yo</v-btn
        >
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary right width="350px">
      <v-list-item style="height: 64px">
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="img/default-avatar-man.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-title>{{ username }}</v-list-item-title>
        </v-list-item>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" router-link :to="item.link">
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
    </v-navigation-drawer>
    <v-navigation-drawer v-model="drawer1" absolute temporary right width="350px">
      <v-list-item style="height: 64px">
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="img/default-avatar-man.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-title>{{ username }}</v-list-item-title>
        </v-list-item>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item-content>
          <v-list-item-title>Administrar</v-list-item-title>
        </v-list-item-content>
        <v-list-item v-for="item in items1" :key="item.title" router-link :to="item.link">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import Settings from "./Settings";
import { Auth } from "aws-amplify";

// import AccountNavigation from "./AccountNavigation";
export default {
  name: "AuthStateApp",
  components: {
    Settings,
    // AccountNavigation,
  },
  created() {
    Auth.currentAuthenticatedUser({
      bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
      .then((user) => {
        this.username = user.attributes.email;
        this.$store.commit("Login");
      })
      .catch((err) => {
        if (err == "The user is not authenticated") {
          this.$store.commit("logout");
        }
      });
  },
  data: () => ({
    drawer: false,
    drawer1: false,
    username: undefined,
    items: [
      {
        title: "Mis Ordenes",
        icon: "mdi-clipboard-list-outline",
        link: "/MisOrdenes",
      },
      // {
      //   title: "Solicitud de Empleo",
      //   icon: "mdi-briefcase-variant",
      //   link: "/",
      // },
    ],
    items1: [
      {
        title: "Órdenes",
        icon: "mdi-clipboard-list-outline",
        link: "/ordenes",
      },
      {
        title: "Clientes y Talleres",
        icon: "mdi-account-group",
        link: "/clientesTalleres",
      },
    ],
  }),
  methods: {
    signOut() {
      Auth.signOut()
        .then(() => {
          this.$store.commit("logout");
          this.$router.push("/");
        })
        .catch((err) => console.log(err));
      this.drawer = false;

      // By doing this, you are revoking all the auth tokens(id token, access token and refresh token)
      // which means the user is signed out from all the devices
      // Note: although the tokens are revoked, the AWS credentials will remain valid until they expire (which by default is 1 hour)
      //   Auth.signOut({ global: true })
      //     .then((data) => console.log(data))
      //     .catch((err) => console.log(err));
    },
  },
  computed: {
    logueado: function () {
      return this.$store.state.login;
    },
  },
};
</script>
