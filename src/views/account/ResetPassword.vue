<template>
  <v-card
    class="mx-auto mt-5"
    max-width="360"
    min-height="500"
    :loading="loading"
  >
    <v-card-text>
      <p class="display-1 text--primary">Cambiar Contraseña</p>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          type="text"
          append-icon="mdi-lock"
          v-model="code"
          name="codigo"
          label="Código de confirmación"
          placeholder="escriba el código enviado a su correo"
          required
          :rules="codigoRules"
        ></v-text-field>
        <v-text-field
          label="Nueva Contraseña"
          v-model="new_password"
          :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show_password ? 'text' : 'password'"
          name="contraseñaActual"
          hint="Al menos 8 caracteres"
          counter
          @click:append="show_password = !show_password"
          :error-messages="errorMessagesPassword"
        ></v-text-field>
        <v-text-field
          label="Confirmar Contraseña"
          v-model="confirmPassword"
          :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show_password ? 'text' : 'password'"
          name="contraseña"
          hint="Al menos 8 caracteres"
          counter
          @click:append="show_password = !show_password"
          :error-messages="errorMessagesPassword"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn tile color="primary" dark @click="resetPassword()" block
        >Aceptar</v-btn
      ></v-card-actions
    >
    <div class="text-center">
      <v-btn
        class="ma-2"
        tile
        text
        @click="resendConfirmationCode()"
        color="blue"
      >
        Reenviar Código
      </v-btn>
    </div>
  </v-card>
</template>

<script>
import { Auth } from "aws-amplify";

export default {
  data: () => ({
    code: "",
    new_password: null,
    valid: true,
    errorMessagesPassword: [],
    confirmPassword: null,
    show_password: false,
    loading: false,
    codigoRules: [(v) => !!v || "El código es requerido"],
    rules: {
      required: (value) => !!value || "Obligatorio.",
      min: (v) => (!!v && v.length >= 8) || "Min 8 caracteres",
    },
  }),
  watch: {
    codigo: function () {
      this.valid = false;
    },
    confirmPassword: function () {
      this.confirmPasswordCheck();
    },
  },
  created() {
    this.$store.commit("SET_LAYOUT", "Login");
  },
  methods: {
    confirmPasswordCheck() {
      this.errorMessagesPassword =
        this.new_password !== this.confirmPassword
          ? ["No coinciden la contraseña y la confirmacion."]
          : [];

      return true;
    },
    async resetPassword() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const username = localStorage.email;
        const { code, new_password } = this;

        Auth.forgotPasswordSubmit(username, code, new_password)
          .then((data) => {
            console.log(data);
            this.loading = false;
            this.$router.push("/login");
          })
          .catch((err) => console.log(err));
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
  },
};
</script>

<style>
</style>