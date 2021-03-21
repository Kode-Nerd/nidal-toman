<template>
  <div class="">
    <CustomSVG
      :src="require('~/assets/main-logo.svg')"
      :width="mainLogoWidth"
      :height="mainLogoHeight"
      :color="themes.light.primary3"
      cover
    ></CustomSVG>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainLogoWidthSize: '30vh',
    }
  },
  computed: {
    themes() {
      return this.$vuetify.theme.themes
    },
    mainLogoWidth() {
      return `${this.mainLogoWidthSize}vh`
    },
    mainLogoHeight() {
      return `${0.4 * this.mainLogoWidthSize}vh`
    },
  },
}
</script>

<style scoped></style>
