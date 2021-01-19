<template>
  <v-row class="mx-2">
    <v-col cols="12" sm="12"> <h1 class="text-center">Administrar</h1> </v-col>
    <v-col cols="12" sm="6"><Taller /> </v-col>
    <v-col cols="12" sm="6"> <Clientes /></v-col>
  </v-row>
</template>

<script>
import Taller from "../../components/admin/talleres";
import Clientes from "../../components/admin/clientes";
export default {
  components: {
    Taller,
    Clientes,
  },
  name: "App",
  async created() {},
  data() {
    return {};
  },
  methods: {},
};
</script>
