<template>
  <div v-if="true" />
  <CustomSVG
    v-else
    :src="require('~/assets/main-logo.svg')"
    width="300px"
    height="120px"
    :color="themes.light.logo"
  />
</template>

<script>
import CustomSVG from '~/components/Global/CustomSVG'
export default {
  components: {
    CustomSVG,
  },
  computed: {
    themes() {
      return this.$vuetify.theme.themes
    },
  },
}
</script>

<style></style>
