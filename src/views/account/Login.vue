<template>
  <div>
    <v-card class="mx-auto mt-5" max-width="360" min-height="550" :loading="loading">
      <v-card-text>
        <p class="display-1 text--primary">Iniciar Sesión</p>
        <v-divider />
        <div v-if="errors" class="pt-5">
          <p class="red--text">{{ errorMessage }}</p>
        </div>
        <v-form ref="form" v-model="valid" lazy-validation>
          <div class="pt-3">
            <v-text-field
              append-icon="mdi-account"
              v-model="username"
              :rules="emailRules"
              label="Correo"
              required
            ></v-text-field>
            <v-text-field
              label="Contraseña"
              v-model="password"
              :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show_password ? 'text' : 'password'"
              nombre="contraseñaActual"
              hint="Al menos 8 caracteres"
              counter
              @click:append="show_password = !show_password"
            ></v-text-field>
          </div>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn tile color="primary" dark @click="signIn()" block
          >Aceptar</v-btn
        ></v-card-actions
      >
      <div class="text-center">
        <v-btn class="ma-2" tile text @click="reveal = true" color="blue">
          ¿Has olvidado tu contraseña?
        </v-btn>
      </div>
      <v-row class="px-5">
        <v-col cols="12">
          <v-divider></v-divider>
          <div class="text-center">
            <p class="pt-6">
              ¿ Eres nuevo en <span class="orange--text">QVAfix</span> ?
              <v-btn text @click="reveal1 = true" color="teal accent-4"
                >Registrarse</v-btn
              >
            </p>
          </div>
        </v-col>
      </v-row>
      <div class="text-center">
        <v-btn color="orange darken-2" dark router-lik to="/">
          <v-icon dark left> mdi-arrow-left-circle </v-icon>Atrás
        </v-btn>
      </div>
      <v-expand-transition>
        <v-card
          v-if="reveal"
          class="transition-fast-in-fast-out v-card--reveal"
          style="height: 100%"
        >
          <v-card-text class="pb-0 pt-12">
            <ForgotPassword />
          </v-card-text>
          <div class="text-center pt-5">
            <v-btn text color="teal accent-4" @click="reveal = false"> Cerrar </v-btn>
          </div>
        </v-card>
      </v-expand-transition>
      <v-expand-transition>
        <v-card
          v-if="reveal1"
          class="transition-fast-in-fast-out v-card--reveal"
          style="height: 100%"
          :loading="loading"
        >
          <v-card-text class="pb-0">
            <SignUp />
            <v-row class="px-5">
              <v-col cols="12">
                <h3 class="text-center pt-6">
                  ¿Ya eres usuario de <span class="orange--text">QVAfix</span>?
                  <v-btn
                    text
                    @click="reveal1 = false"
                    color="teal accent-4"
                    :disabled="!valid"
                    >Iniciar Sesion</v-btn
                  >
                </h3>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-expand-transition>
    </v-card>
  </div>
</template>
<script>
import ForgotPassword from "./ForgotPassword";
import SignUp from "./SignUp";
import { Auth } from "aws-amplify";

export default {
  components: {
    ForgotPassword,
    SignUp,
  },
  data: () => ({
    errors: false,
    errorMessage: null,
    reveal: false,
    reveal1: false,
    valid: true,
    show_password: false,
    errorMessages: [],
    errorMessagesPassword: [],
    username: "",
    password: null,
    rules: {
      required: (value) => !!value || "Obligatorio.",
      min: (v) => (!!v && v.length >= 8) || "Min 8 caracteres",
    },
    nameRules: [(v) => !!v || "El nombre es requerido"],
    emailRules: [
      (v) => !!v || "El correo es requerido",
      (v) => /.+@.+\..+/.test(v) || "Debe tener una dirección válida",
    ],
    loading: false,
  }),
  created() {
    this.$store.commit("SET_LAYOUT", "Login");
  },
  methods: {
    async signIn() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const { username, password } = this;
        await Auth.signIn({ username, password })
          .then((username) => {
            console.log(username);
            this.loading = false;
            this.$router.push("/");
          })
          .catch((error) => {
            console.log(error);
            if (error.code == "UserNotFoundException") {
              this.errors = true;
              this.errorMessage = "El usuario no existe";
            } else if (error.code == "NotAuthorizedException") {
              this.errors = true;
              this.errorMessage = "Usuario o contraseña incorrectos";
            }
            this.loading = false;
          });
      }
    },
  },
};
</script>
<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
