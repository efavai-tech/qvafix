<template>
  <div>
    <p class="display-1 text--primary">Cambiar Contraseña</p>
    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          :append-icon="emailIcons"
          v-model="email"
          :rules="emailRules"
          label="Dirección de email"
          required
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-row align="center" justify="space-around" class="px-4">
      <v-btn
        color="primary"
        class="mr-4"
        @click="confirm()"
        elevation="2"
        outlined
      >
        Enviar Código
      </v-btn>
    </v-row>
  </div>
</template>

<script>
import { Auth } from "aws-amplify";
export default {
  data: () => ({
    email: "",
    emailIcons: "mdi-email-alert",
    valid: true,
    emailRules: [
      (v) => !!v || "El correo es requerido",
      (v) => /.+@.+\..+/.test(v) || "Debe tener una dirección válida",
    ],
  }),
  watch: {
    email: function () {
      this.emailIcons = "mdi-email-open";
    },
  },
  methods: {
    async confirm() {
      if (this.$refs.form.validate()) {
        localStorage.setItem("email", this.email);
        await Auth.forgotPassword(this.email)
          .then((data) => console.log(data))
          .then(() => this.$router.push("/reset_password"))
          .catch((err) => console.log(err));
      }
    },
  },
};
</script>

<style>
</style>