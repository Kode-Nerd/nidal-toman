<template>
  <v-app v-if="ready" id="app" :style="textDefaultStyle" :dark="false">
    <Header v-if="src" :src="src" scroll-target="#mobile-screen" />
    <!-- <BottomNav scroll-target="#mobile-screen" /> -->
    <SideNav />
    <v-responsive id="mobile-screen" class="overflow-y-auto" height="100vh">
      <nuxt />
    </v-responsive>
  </v-app>
</template>

<script>
// import BottomNav from '~/components/Mobile/BottomNav'
import SideNav from '~/components/Mobile/SideNav'
import Header from '~/components/Mobile/Header'

export default {
  components: {
    // BottomNav,
    SideNav,
    Header,
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
    themes() {
      return this.$vuetify.theme.themes
    },
    textDefaultStyle() {
      return {
        color: this.themes.light.primary4,
      }
    },
    src() {
      const routePath = this.$route.path

      /* eslint no-useless-escape: 0 */
      const path = routePath.replace(/^\/de/, '').replace(/^\/mobile/, '')
      const matched = path.match(/[^\/]+/g)

      let label

      if (!matched) {
        label = 'mobileHome'
      } else {
        label = matched[0]
      }

      switch (label) {
        case 'ivtherapies':
          return require('~/assets/images/treatments/treatment1.jpg')
        case 'mobileProfile':
          return require('~/assets/images/treatments/treatment1.jpg')
        case 'contact':
          return require('~/assets/images/interiors/interior2.jpg')
        default:
          return null
      }
    },
  },
  mounted() {
    this.userAgent = navigator.userAgent.toLowerCase()
    this.$nextTick(() => {
      if (this.isMobile) {
        this.ready = true
      } else {
        this.$router.push(this.$route.fullPath.replace(/^\/mobile/, ''))
      }
    })
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

<style></style>
