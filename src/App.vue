<template>
  <v-app id="app" class="grey lighten-4">

    <Navbar />
    <v-content class="mx-4 mb-4">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: 'App',

  components: {
    'Navbar':Navbar
  },

  data: () => ({
  }),
};
</script>

<style>

</style>
