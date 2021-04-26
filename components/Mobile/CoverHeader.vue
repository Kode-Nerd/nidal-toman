<template>
  <v-img v-if="src" :src="src" contain width="100vw" height="100vw">
    <v-row class="fill-height ma-0 pa-3" align="start" justify="start">
      <div style="height: 48px" class="d-flex align-center">
        <v-btn small icon color="primary3" @click="drawer = !drawer"
          ><v-icon small>fas fa-bars</v-icon></v-btn
        >
        <CustomSVG
          class="ml-3"
          :src="require('~/assets/mini-logo.svg')"
          size="48px"
          :color="color"
        ></CustomSVG>
      </div>
    </v-row>
  </v-img>
  <div v-else>No src set.</div>
</template>

<script>
import CustomSVG from '~/components/Global/CustomSVG'

export default {
  components: {
    CustomSVG,
  },
  props: {
    src: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default() {
        return this.$vuetify.theme.themes.primary3
      },
    },
  },
  computed: {
    drawer: {
      set(val) {
        this.$store.commit('SET_SIDENAV', val)
      },
      get() {
        return this.$store.state.sideNav
      },
    },
  },
}
</script>

<style></style>
