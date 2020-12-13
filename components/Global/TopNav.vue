<template>
  <div v-if="showing">
    <div v-if="showLogo" :style="backgroundSupportStyle">
      <div>
        <nuxt-link :to="locale === 'en' ? '/' : '/de/'">
          <v-img
            contain
            :src="require('~/assets/logo.png')"
            max-height="40px"
          ></v-img>
        </nuxt-link>
      </div>
      <SocialMedia :small="true" />
      <v-spacer />
    </div>
    <v-tabs v-model="tab" v-bind="bindObj">
      <v-tabs-slider v-if="customSlider" :color="sliderColor"></v-tabs-slider>
      <v-tab
        v-for="label in showLabels"
        :key="label"
        :ripple="false"
        :class="justifyContentTab"
        @click="goto(label)"
        >{{ $t(`nav.${label}`) }}</v-tab
      >
    </v-tabs>
    <div v-if="!backgroundIsTransparent" :style="localeStyle">
      <Locale />
    </div>
  </div>
</template>

<script>
import SocialMedia from '~/components/Global/SocialMedia'
import Locale from '~/components/Global/Locale'

export default {
  components: {
    SocialMedia,
    Locale,
  },
  props: {
    navStyle: {
      type: Array,
      default: () => [],
    },
    color: {
      type: String,
      default() {
        return this.$vuetify.theme.themes.light.primary
      },
    },
    vertical: {
      type: Boolean,
      default: false,
    },
    customSlider: {
      type: Boolean,
      default: false,
    },
    sliderColor: {
      type: String,
      default() {
        return this.$vuetify.theme.themes.light.primary
      },
    },
    tabJustify: {
      type: String,
      default: 'center',
    },
    background: {
      type: String,
      default: 'transparent',
    },
    right: {
      type: Boolean,
      default: false,
    },
    backopacity: {
      type: String,
      default: 'FF',
    },
    showLogo: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showing: true,
      showLabels: [],
    }
  },
  computed: {
    locale: {
      set(val) {
        this.$store.commit('SET_LOCALE', val)
      },
      get() {
        return this.$store.state.locale
      },
    },
    tab: {
      set(val) {
        this.$store.commit('SET_TAB', val)
      },
      get() {
        return this.$store.state.tab
      },
    },
    path: {
      set(val) {
        this.$store.commit('SET_PATH', val)
      },
      get() {
        return this.$store.state.path
      },
    },
    labels() {
      return this.$store.state.labels
    },
    themes() {
      return this.$vuetify.theme.themes
    },
    justifyContentTab() {
      switch (this.tabJustify) {
        case 'left':
          return 'tab-left'
        case 'right':
          return 'tab-right'
        default:
          return undefined
      }
    },
    backgroundIsTransparent() {
      return this.background === 'transparent'
    },
    backgroundSupportStyle() {
      return {
        background: this.finalColor(this.backopacity, this.background),
        height: '48px',
        width: '100%',
        position: 'fixed',
        top: '0px',
        zIndex: 5,
        display: 'flex',
        alignItems: 'center',
      }
    },
    zIndex5Style() {
      return {
        zIndex: 5,
      }
    },
    localeStyle() {
      return {
        zIndex: 5,
        position: 'fixed',
        top: '0px',
        right: '24px',
        height: '48px',
        display: 'flex',
        alignItems: 'center',
      }
    },
    bindObj() {
      const { color, vertical, right } = this

      return {
        style: [...this.navStyle, this.zIndex5Style],
        backgroundColor: 'transparent',
        color,
        vertical,
        right,
      }
    },
  },
  watch: {
    '$route.path': {
      handler(val, old) {
        this.updateComponent(val, old)
      },
      deep: true,
      immediate: true,
    },
  },
  mounted() {
    if (this.showLogo) {
      const filteredLabels = this.labels.filter((label) => label !== 'welcome')

      this.showLabels = [...filteredLabels]
    } else {
      this.showLabels = [...this.labels]
    }
  },
  methods: {
    updateComponent(val, old) {
      this.showing = false
      this.$nextTick(() => {
        this.showing = true
        this.$nextTick(() => {
          this.checkActiveTab(val, old)
        })
      })
    },
    checkActiveTab(val, old) {
      /* eslint no-useless-escape: 0 */
      const path = val.replace(/^\/de/, '')
      const matched = path.match(/[^\/]+/g)

      let label

      if (!matched) {
        label = 'welcome'
        if (this.$route.query && this.$route.query.id) {
          label = this.$route.query.id
        }
      } else {
        label = matched[0]
      }

      const indexFound = this.showLabels.indexOf(label)
      if (old) {
        const els = document.getElementsByClassName('v-tabs-slider-wrapper')
        const el = els.length && els[0]
        console.log('MASUK IF', el, els)
        if (el) {
          console.log('MASUK LAGI', indexFound)
          if (indexFound < 0) {
            el.style.display = 'none'
          } else {
            el.style.display = 'block'
          }
        }
      }
      this.tab = indexFound
      this.path = label
    },
    goto(label) {
      if (label === 'welcome') {
        this.$router.push({ path: this.locale === 'en' ? '/' : '/de/' })
        return
      }
      if (label === 'procedures') {
        this.$router.push({
          path: this.locale === 'en' ? '/' : '/de/',
          query: { id: 'procedures' },
        })
        return
      }
      this.$router.push({ path: label })
    },
    finalColor(opacity, color) {
      const splittedColor = color.split('#')
      splittedColor[2] = opacity
      const finalColor = splittedColor.join('')

      return `#${finalColor}`
    },
  },
}
</script>

<style scoped>
.tab-left {
  justify-content: flex-start !important;
}
.tab-right {
  justify-content: flex-end !important;
}
</style>
