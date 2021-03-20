<template>
  <v-app v-if="ready" id="app" :style="textDefaultStyle" :dark="false">
    <BottomNav scroll-target="mobile-screen" />
    <v-responsive id="mobile-screen" class="overflow-y-auto" height="100vh">
      <nuxt />
    </v-responsive>
  </v-app>
</template>

<script>
import BottomNav from '~/components/Mobile/BottomNav'

export default {
  components: {
    BottomNav,
  },
  data() {
    return {}
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
