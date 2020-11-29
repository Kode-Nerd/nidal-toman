<template>
  <v-tabs
    v-model="tab"
    :style="navStyle"
    background-color="transparent"
    :color="color"
    :vertical="vertical"
  >
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
