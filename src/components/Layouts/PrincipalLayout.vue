<template>
  <div>
    <div v-if="isMobile"><NavBarMovile /></div>
    <div v-else><NavBarWeb /></div>
    <v-main v-bind:class="isMobile ? 'mobileMain' : 'main'">
      <router-view></router-view>
    </v-main>
    <div class="d-none d-md-flex d-lg-none d-lg-flex d-xl-flex"><Footer /></div>
  </div>
</template>

<script>
import NavBarMovile from "../NavBarMovile";
import Footer from "../Footer";
import NavBarWeb from "../NavBarWeb";
export default {
  components: {
    NavBarMovile,
    Footer,
    NavBarWeb,
  },
  data: () => ({
    isMobile: false,
  }),
  beforeDestroy() {
    if (typeof window === "undefined") return;

    window.removeEventListener("resize", this.onResize, { passive: true });
  },

  mounted() {
    this.onResize();

    window.addEventListener("resize", this.onResize, { passive: true });
  },

  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 600;
    },
  },
};
</script>

<style>
.main {
  margin-bottom: 220px;
}
.mobileMain{
  margin-bottom: 5px;
  margin-top: 50px;
}
</style>