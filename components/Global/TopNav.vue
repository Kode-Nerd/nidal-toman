<template>
  <div>
    <div v-if="!backgroundIsTransparent" :style="backgroundSupportStyle"></div>
    <v-tabs v-model="tab" v-bind="bindObj">
      <v-tabs-slider v-if="customSlider" :color="sliderColor"></v-tabs-slider>
      <v-tab
        v-for="label in labels"
        :key="label"
        :ripple="false"
        :class="justifyContentTab"
        @click="goto(label)"
        >{{ $t(label) }}</v-tab
      >
    </v-tabs>
  </div>
</template>

<script>
export default {
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
  },
  computed: {
    tab: {
      set(val) {
        this.$store.commit('SET_TAB', val)
      },
      get() {
        return this.$store.state.tab
      },
    },
    labels() {
      return this.$store.state.labels
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
        background: this.background,
        height: '48px',
        width: '100%',
        position: 'fixed',
        top: '0px',
      }
    },
    bindObj() {
      const { color, vertical, right } = this

      return {
        style: this.navStyle,
        backgroundColor: this.background,
        color,
        vertical,
        right,
      }
    },
  },
  watch: {
    '$route.fullPath': {
      handler(val) {
        /* eslint no-useless-escape: 0 */
        const regex = /^\/en/
        const path = val.replace(regex, '')
        const matched = path.match(/[^\/]+/g)

        let label

        if (!matched) {
          label = 'treatments'
        } else {
          label = matched[0]
        }

        this.tab = this.labels.indexOf(label)
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    goto(label) {
      this.$router.push({ path: label })
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
