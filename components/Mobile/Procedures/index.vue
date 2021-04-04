<template>
  <MobileView>
    <v-fab-transition>
      <v-btn
        v-show="!hidden"
        elevation="2"
        color="primary3"
        dark
        fab
        fixed
        top
        left
        small
        @click="drawer = !drawer"
        ><v-icon small>fas fa-bars</v-icon></v-btn
      >
    </v-fab-transition>
  </MobileView>
</template>

<script>
import MobileView from '~/components/Mobile/View'
export default {
  components: {
    MobileView,
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
  }
}
</script>

<style></style>
