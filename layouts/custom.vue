<template>
  <v-app v-if="ready" id="app" :dark="false">
    <v-main v-if="!isMobile">
      <nuxt />
    </v-main>
    <v-main v-else> <MobileMaintenance /> </v-main>
  </v-app>
</template>

<script>
import Vue from 'vue'
import VueRellax from 'vue-rellax'
import MobileMaintenance from '@/components/Global/MobileMaintenance'

Vue.use(VueRellax)

export default {
  components: {
    MobileMaintenance,
  },
  computed: {
    ready: {
      set(val) {
        this.$store.commit('SET_READY', val)
      },
      get() {
        return this.$store.state.ready
      },
    },
    userAgent: {
      set(val) {
        this.$store.commit('SET_USERAGENT', val)
      },
      get() {
        return this.$store.state.userAgent
      },
    },
    isMobile() {
      return this.userAgent.includes('mobile')
    },
  },
  mounted() {
    this.userAgent = navigator.userAgent.toLowerCase()
    this.$nextTick(() => {
      this.ready = true
    })
  },
}
</script>

<style>
::-webkit-scrollbar {
  display: none;
}
</style>
