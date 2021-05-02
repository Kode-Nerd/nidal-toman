<template>
  <v-app v-if="ready" id="app" :style="textDefaultStyle" :dark="false">
    <v-main v-if="!isMobile">
      <TopNav
        v-if="!isHome"
        :nav-style="[topNavStyle, tabsStyle]"
        :background="themes.light.background"
        backopacity="B3"
        :show-logo="true"
      />
      <div v-if="!isHome" :style="spacerStyle" />
      <nuxt />
      <Footer v-if="!isProcedure" />
    </v-main>
    <v-main v-else> <MobileMaintenance /> </v-main>
  </v-app>
</template>

<script>
import Vue from 'vue'
import VueRellax from 'vue-rellax'
import TopNav from '@/components/Global/TopNav'
import Footer from '@/components/Footer/Footer'
import MobileMaintenance from '@/components/Global/MobileMaintenance'

import { finalpath } from '~/helpers'

Vue.use(VueRellax)

export default {
  components: {
    TopNav,
    Footer,
    MobileMaintenance,
  },
  computed: {
    locale() {
      return this.$store.state.locale
    },
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
    textDefaultStyle() {
      return {
        color: this.themes.light.primary4,
      }
    },
    tabsStyle() {
      return {
        borderBottomStyle: 'solid',
        borderColor: this.themes.light.primary,
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
    pathname() {
      const { path: routepath } = this.$route
      const pathname = routepath.replace(/^\/de/, '')

      return pathname
    },
    isProcedure() {
      return this.pathname.includes('treatment')
    },
    isHome() {
      const filteredpath = this.pathname.replace(/^\//, '')

      return !filteredpath
    },
  },
  mounted() {
    this.userAgent = navigator.userAgent.toLowerCase()
    this.$nextTick(() => {
      if (this.isMobile) {
        this.redirectIfMobile()
      } else {
        this.ready = true
      }
    })
  },
  methods: {
    finalpathmobile(path) {
      return finalpath(this.locale, path, true)
    },
    redirectIfMobile() {
      let { query } = this.$route
      let pathname = this.isProcedure ? 'procedures' : this.pathname
      if (!pathname && query.id === 'procedures') {
        pathname = 'procedures'
        query = {}
      }
      const finalpath = this.finalpathmobile(pathname)

      this.$router.push({
        path: finalpath,
        query,
      })
    },
  },
  head() {
    return {
      title: 'Home',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'This is description from Home Page',
        },
      ],
    }
  },
}
</script>

<style>
/* ::-webkit-scrollbar {
  display: none;
} */
</style>
