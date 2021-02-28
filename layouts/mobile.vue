<template>
  <v-app v-if="ready" id="app" :style="textDefaultStyle" :dark="false">
    <nuxt />
  </v-app>
</template>

<script>
export default {
  components: {},
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
  },
  mounted() {
    this.userAgent = navigator.userAgent.toLowerCase()
    this.$nextTick(() => {
      this.ready = true
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

<style>
::-webkit-scrollbar {
  display: none;
}
</style>
