<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        icon
        v-bind="attrs"
        v-on="on"
        class="d-none d-flex d-sm-none d-sm-flex d-md-none"
      >
        <span>Ajustes</span>
        <v-icon>mdi-cog-outline</v-icon>
      </v-btn>
      <v-btn text v-bind="attrs" v-on="on" class="d-none d-lg-flex d-xl-flex">
        <v-icon left>mdi-cog-outline</v-icon>Ajustes</v-btn
      >
    </template>
    <v-card>
      <v-toolbar dark color="primary">
        <v-toolbar-title>Ajustes</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <!-- <v-toolbar-items>
            <v-btn
              dark
              text
              @click="dialog = false"
            >
              Save
            </v-btn>
          </v-toolbar-items> -->
      </v-toolbar>
      <v-list three-line subheader>
        <v-subheader>Theme</v-subheader>
        <v-list-item>
          <v-list-item-content>
            <v-row justify="start" no-gutters>
              <v-col cols="5" sm="2" class="mr-2">
                <v-btn
                  @click="enableDark"
                  block
                  active-class="primary"
                  :class="isDark ? 'primary' : ''"
                  >Dark <v-icon right>mdi-weather-night</v-icon></v-btn
                >
              </v-col>
              <v-col cols="5" sm="2">
                <v-btn
                  @click="disableDark"
                  block
                  active-class="primary"
                  :class="!isDark ? 'primary' : ''"
                  >Ligth<v-icon right>mdi-white-balance-sunny</v-icon></v-btn
                >
              </v-col>
            </v-row>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Password</v-list-item-title>
            <v-list-item-subtitle
              >Require password for purchase or use password to restrict
              purchase</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list three-line subheader>
        <v-subheader>General</v-subheader>
        <v-list-item>
          <v-list-item-action>
            <v-checkbox v-model="notifications"></v-checkbox>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Notifications</v-list-item-title>
            <v-list-item-subtitle
              >Notify me about updates to apps or games that I
              downloaded</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-checkbox v-model="sound"></v-checkbox>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Sound</v-list-item-title>
            <v-list-item-subtitle
              >Auto-update apps at any time. Data charges may
              apply</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-checkbox v-model="widgets"></v-checkbox>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Auto-add widgets</v-list-item-title>
            <v-list-item-subtitle
              >Automatically add home screen widgets</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
    };
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
  },
  computed: {
    // a computed getter
    isDark: function () {
      // `this` points to the vm instance
      return this.$store.state.dark_theme;
    },
  },
};
</script>
<style scoped>
.v-item-group.v-bottom-navigation .v-btn {
  min-width: 20px;
}
</style>