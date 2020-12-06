<template>
  <div :class="customClass">
    <nuxt-link
      :style="locale === 'en' ? localeActive : textStyle"
      :to="
        locale === 'de'
          ? $route.fullPath.replace(/^\/[^\/]+/, '')
          : $route.fullPath
      "
      >Impressum</nuxt-link
    >
    <span :style="dividerStyle" class="mx-1">|</span>
    <nuxt-link
      :style="locale === 'de' ? localeActive : textStyle"
      :to="locale === 'en' ? '/de' + $route.fullPath : $route.fullPath"
      >Datenschutz</nuxt-link
    >
    <span :style="dividerStyle" class="mx-1">|</span>
    <nuxt-link
      :style="locale === 'de' ? localeActive : textStyle"
      :to="locale === 'en' ? '/de' + $route.fullPath : $route.fullPath"
      >Info Desk</nuxt-link
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
    locale: {
      set(val) {
        this.$store.commit('SET_LOCALE', val)
      },
      get() {
        return this.$store.state.locale
      },
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
    localeActive() {
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

      return this.localeActive
    },
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
