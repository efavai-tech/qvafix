<template>
  <v-container grid-list-xs fluid>
    <v-carousel cycle height="250" hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item v-for="(item, i) in items" :key="i">
        <v-img
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="200px"
        >
          <v-row class="fill-height" align="center" justify="center" dark>
            <v-col cols="12" class="display-2" align="center" justify="center">
              {{ item.title }}
            </v-col>
            <v-col cols="12" align="center" justify="center"> {{ item.text }}</v-col>
          </v-row>
        </v-img>
      </v-carousel-item>
    </v-carousel>
    <div class="font-weight-light display-1 mb-2" align="center" justify="center">
      {{ taller.name }}<br />
    </div>
    <div class="font-weight-light title mb-2" align="center" justify="center">
      No dedicamos a reparar.<br />
      Descripción de a lo que se dedican en el taller
    </div>
    <v-row no-gutters class="mt-12">
      <v-col cols="12" sm="12">
        <p class="font-weight-light display-1 mb-2" align="center" justify="center">
          Nos puede contactar<br />
          a través de:
        </p></v-col
      >
      <v-col cols="12" sm="4">
        <div class="font-weight-light title mb-2" align="center" justify="center">
          <v-icon>mdi-email</v-icon> correo@gmail.com
        </div>
      </v-col>
      <v-col cols="12" sm="4">
        <div class="font-weight-light title mb-2" align="center" justify="center">
          <v-icon>mdi-cellphone-android</v-icon> Teléfono: 45256357
        </div>
      </v-col>
      <v-col cols="12" sm="4">
        <div class="font-weight-light title mb-2" align="center" justify="center">
          <v-icon>mdi-map-marker</v-icon>{{ taller.direccion }}
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {},
  data: () => ({
    user: {},
    taller: {},
    colors: ["grey lighten-4", "grey lighten-4"],
    items: [
      { title: "Misión", text: "Misión del taller" },
      { title: "Visión", text: "Visión del taller" },
    ],
    cards: [
      {
        title: "Favorite road trips",
        flex: 6,
      },
      {
        title: "Best airlines",
        flex: 6,
      },
    ],
  }),
  async created() {
    var user = JSON.parse(localStorage.getItem("user"));
    if (user != null) {
      this.user = user;
    }
    var taller = JSON.parse(localStorage.getItem("taller"));
    this.taller = taller.data.getTaller;
    console.log(taller);
  },
  computed: {},
  methods: {},
};
</script>

<style></style>
