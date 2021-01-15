<template>
  <div>
    <v-bottom-navigation grow>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <h3 class="subheading grey--text text-left pt-4">QVAfix</h3>
      <v-btn icon>
        <span>Foro</span>
        <v-icon>mdi-message-text</v-icon>
      </v-btn>
       <v-btn icon>
        <span>Foro</span>
        <v-icon>mdi-cog-outline</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
    </v-bottom-navigation>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="img/default-avatar-man.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-title>{{ username }}</v-list-item-title>
        </v-list-item>
      </v-list-item>

      <v-divider></v-divider>

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
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import { Auth } from "aws-amplify";
import { onAuthUIStateChange } from "@aws-amplify/ui-components";

export default {
  data: () => ({
    drawer: false,
    username: "",
    group: null,
    user: undefined,
    authState: undefined,
    items: [
      { title: "Inicio", icon: "mdi-home-city", link: "/" },
      {
        title: "Mi Perfil",
        icon: "mdi-account-circle",
        link: "/PerfilUsuario",
      },
      {
        title: "Ordenes de Servicio",
        icon: "mdi-format-list-bulleted",
        link: "/ordenesServicio",
      },
      { title: "Talleres", icon: "mdi-home-group", link: "/Talleres" },
      { title: "Sobre Nosotros", icon: "mdi-forum", link: "/About" },
      { title: "Admin", icon: "mdi-gavel", link: "/Admin" },
    ],
    items1: [
      { title: "Ajustes", icon: "mdi-cogs", method: "setting()" },
      { title: "Salir", icon: "mdi-logout", method: "signOut()" },
    ],
  }),
  created() {
    // this.username=this.$store.getters.username;
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData;
      var u = this.user.signInUserSession.idToken;
      this.username = u.payload.email;
    });
  },
  beforeDestroy() {
    return onAuthUIStateChange;
  },
  methods: {
    async signOut() {
      try {
        await Auth.signOut();
      } catch (error) {
        console.log("error signing out: ", error);
      }
    },
  },

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>