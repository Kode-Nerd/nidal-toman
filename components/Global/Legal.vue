<template>
  <div :class="customClass">
    <nuxt-link
      :style="path === 'imprint' ? linkActive : textStyle"
      to="imprint"
      >{{ $t('nav.imprint') }}</nuxt-link
    >
    <span :style="dividerStyle" class="mx-1">|</span>
    <nuxt-link
      :style="path === 'privacy' ? linkActive : textStyle"
      to="privacy"
      >{{ $t('nav.privacy') }}</nuxt-link
    >
    <span :style="dividerStyle" class="mx-1">|</span>
    <nuxt-link
      :style="path === 'infodesk' ? linkActive : textStyle"
      to="infodesk"
      >{{ $t('nav.infodesk') }}</nuxt-link
    >
  </div>
</template>

<script>
export default {
  props: {
    darkStyle: {
      type: Boolean,
      default: false,
    },
    customClass: {
      type: String,
      default: '',
    },
  },
  computed: {
    path() {
      return this.$store.state.path
    },
    themes() {
      return this.$vuetify.theme.themes
    },
    textStyle() {
      if (this.darkStyle) {
        return {
          color: this.themes.light.background,
        }
      }

      return {
        color: this.themes.light.text,
      }
    },
    linkActive() {
      if (this.darkStyle) {
        return {
          color: this.themes.light.background,
          textDecoration: 'underline',
        }
      }

      return {
        color: this.themes.light.primary3,
      }
    },
    dividerStyle() {
      if (this.darkStyle) {
        return this.textStyle
      }

      return this.linkActive
    },
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
