<template>
  <v-app id="app" :dark="false">
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import Vue from 'vue'
import VueRellax from 'vue-rellax'

Vue.use(VueRellax)

export default {}
</script>

<style>
::-webkit-scrollbar {
  display: none;
}
</style>
