<template>
  <v-card class="mx-auto" max-width="350" outlined :elevation="3">
    <v-toolbar dark color="primary">
      <v-toolbar-title>Confirmar Código</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form v-model="valid">
        <v-text-field
          append-icon="mdi-lock"
          v-model="codigo"
          name="codigo"
          label="Código de confirmación"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-row align="center" justify="space-around" class="px-4">
        <v-btn
          :disabled="valid"
          color="primary"
          class="mr-4"
          @click="confirmSignUp()"
          elevation="2"
          outlined
        >
          Aceptar
        </v-btn>
        <v-btn class="ma-2" tile text @click="resendConfirmationCode()">
          <v-icon left>v-icon notranslate mdi mdi-email theme--dark</v-icon>
          Reenviar Código
        </v-btn>
      </v-row></v-card-actions
    >
  </v-card>
</template>

<script>
import { Auth } from "aws-amplify";

export default {
  data: () => ({
    codigo: "",
    valid: true,
  }),
  watch: {
    codigo: function () {
      this.valid = false;
    },
  },
  created() {
    this.$store.commit("SET_LAYOUT", "Login");
  },
  methods: {
    async confirmSignUp() {
        var email = localStorage.email;
        try {
          await Auth.confirmSignUp(email, this.codigo).then(() => {
          this.$router.push("/Login");
        });
        } catch (error) {
          console.log("error confirming sign up", error);
        }
      }
    },
    async resendConfirmationCode() {
      try {
        await Auth.resendSignUp(this.email);
        console.log("code resent successfully");
      } catch (err) {
        console.log("error resending code: ", err);
      }
    },
  }
</script>

<style>
</style>