<template>
  <v-app id="app" :dark="false">
    <v-main>
      <TopNav
        :nav-style="[topNavStyle, tabsStyle]"
        :background="themes.light.background"
        backopacity="B3"
        :show-logo="true"
      />
      <div :style="spacerStyle" />
      <nuxt />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Vue from 'vue'
import VueRellax from 'vue-rellax'
import TopNav from '@/components/Global/TopNav'
import Footer from '@/components/Footer/Footer'

Vue.use(VueRellax)

export default {
  components: {
    TopNav,
    Footer,
  },
  computed: {
    topNavStyle() {
      return {
        position: 'fixed',
        right: '0px',
        top: '0px',
      }
    },
    themes() {
      return this.$vuetify.theme.themes
    },
    tabsStyle() {
      return {
        borderBottomStyle: 'solid',
        borderColor: this.themes.light.primary1,
        borderWidth: '1px',
        width: '60%',
      }
    },
    spacerStyle() {
      return {
        background: this.themes.light.background,
        height: '48px',
        width: '100%',
      }
    },
  },
}
</script>

<style>
::-webkit-scrollbar {
  display: none;
}
</style>
