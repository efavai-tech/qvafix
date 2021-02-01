<template>
  <div class="mx-5">
    <v-row>
      <v-col class="d-none d-lg-flex d-xl-flex pt-6" cols="3">
        <Ranking />
      </v-col>
      <v-col cols="mx-auto" xs="6">
        <v-row>
          <v-col cols="12">
            <v-app-bar fixed dense class="d-none d-flex d-sm-none d-sm-flex d-md-none">
              <v-toolbar-title class="mr-3">QVAfix</v-toolbar-title>
            </v-app-bar>
            <v-parallax height="360" src="img/material2.jpg">
              <v-row align="center" justify="center">
                <p class="display-2 font-weight-thin">QVAfix</p>
                <p class="subheading">Sé parte de nuestra comunidad hoy!</p>
                <p
                  class="headline font-weight-bold d-none d-lg-flex d-xl-flex text-center mx-3"
                >
                  {{ AboutText }}
                </p>
                <p
                  class="text - sm - body - 2 d-none d-sm-flex d-md-none d-flex d-sm-none text-center mx-3"
                >
                  {{ AboutText }}
                </p>
              </v-row>
            </v-parallax>
            <v-row class="text-center mx-2">
              <v-col cols="12" sm="8" md="4" class="mt-3"
                ><p class="display-1 flex display-4 font-weight-black mb-2">Visión</p>
                <p>
                  Ser el punto de referencia de los servicios técnicos en Cuba promoviendo
                  la colaboración y difundiendo los conocimientos y habilidades.
                </p>
              </v-col>
              <v-col cols="12" sm="8" md="8" class="mt-3">
                <p class="display-1 flex display-4 font-weight-black mb-2">Misión</p>
                <p class="text-justify">
                  Promover, fortalecer y difundir el desarrollo de los servicios técnicos
                  en Cuba. Crear un espacio virtual de intercambio y colaboración entre
                  talleres dedicado a los servicios técnicos, así como la posible
                  colaboración con otras formas productivas tanto particulares como
                  estatales y centros de estudios. Crear un espacio donde los clientes se
                  identifiquen con los servicios prestados y puedan escoger su mejor
                  opción para cada necesidad. Promover la cultura de la necesidad del
                  aprendizaje constante en los oficios.
                </p>
              </v-col>
            </v-row>
            <v-row justify="center" class="pt-6">
              <v-col cols="12" sm="6" v-if="$store.state.login">
                <BuscarOrden />
              </v-col>
              <v-col cols="12" sm="6">
                <CardOfertaTrabajo />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="d-none d-lg-flex d-xl-flex" cols="3">
        <Promociones />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Ranking from "../components/Ranking";
import Promociones from "../components/Promociones";
import BuscarOrden from "../components/BuscarOrden";
import CardOfertaTrabajo from "../components/CardOfertaTrabajo";

export default {
  components: {
    Ranking,
    Promociones,
    BuscarOrden,
    CardOfertaTrabajo,
  },
  created() {
    this.$store.commit("SET_LAYOUT", "Principal");
  },
  data: () => ({
    AboutText:
      "Pretendemos agrupar a la comunidad de talleres con el objetivo de establecer una colaboración y tener una plaza digital que sea nuestra. Lleve su taller de reparaciones al siguiente nivel de competitividad y calidad en el servicio.",
  }),
  methods: {},
};
</script>
<style></style>
