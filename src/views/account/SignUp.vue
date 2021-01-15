<template>
  <div>
    <v-form>
      <p class="display-1 text--primary">Crear Usuario</p>
      <v-divider />
      <v-text-field
        append-icon="mdi-email"
        v-model="email"
        :rules="emailRules"
        label="Correo"
        required
      ></v-text-field>
      <vue-tel-input-vuetify
        :preferred-countries="['cu', 'gb', 'ua', 'us']"
        :valid-characters-only="true"
        select-label="Código"
        label="Número de Teléfono"
        placeholder=""
        @input="onInput"
        required
      ></vue-tel-input-vuetify>
      <v-text-field
        label="Contraseña"
        v-model="password"
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
    <div class="text-center">
      <v-btn
        :disabled="!valid"
        color="primary"
        @click="signUp()"
        elevation="2"
        class="text-center"
        block
      >
        Aceptar
      </v-btn>
    </div>
  </div>
</template>

<script>
import { Auth } from "aws-amplify";
import VueTelInputVuetify from "vue-tel-input-vuetify/lib/vue-tel-input-vuetify.vue";

export default {
  components: {
    VueTelInputVuetify,
  },
  data: () => ({
    valid: true,
    username: "",
    email: "",
    phone: {
      number: "",
      valid: false,
      country: undefined,
    },
    dialog: false,
    show_password: false,
    errorMessages: [],
    errorMessagesPassword: [],
    password: null,
    confirmPassword: null,
    rules: {
      required: (value) => !!value || "Obligatorio.",
      min: (v) => (!!v && v.length >= 8) || "Min 8 caracteres",
    },
    formHasErrors: false,
    errors: [],
    nombreRules: [(v) => !!v || "El nombre es requerido"],
    emailRules: [
      (v) => !!v || "El email es requerido",
      (v) => /.+@.+\..+/.test(v) || "Debe tener una dirección válida",
    ],
  }),
  watch: {
    confirmPassword: function () {
      this.confirmPasswordCheck();
    },
  },
  methods: {
    onInput(formattedNumber, { number, valid, country }) {
      this.phone.number = number.international;
      this.phone.valid = valid;
      this.phone.country = country && country.name;
    },
    confirmPasswordCheck() {
      this.errorMessagesPassword =
        this.password !== this.confirmPassword
          ? ["No coinciden la contraseña y la confirmacion."]
          : [];

      return true;
    },
    async signUp() {
      if (this.confirmPasswordCheck()) {
        const { password, email, phone } = this;
        const username = email;
        const phone_number = phone.number.replace(/ /g, "")
        console.log(phone_number);
        
        await Auth.signUp({
          username,
          password,
          attributes: {
            email, // optional
            phone_number, // optional - E.164 number convention
            // other custom attributes
          },
        }).then((data) => {
          console.log(data);
          localStorage.setItem("email", data.user.username);
          this.$router.push("/confirmCode");
        });
      }
    },
  },
};
</script>

<style>
</style>