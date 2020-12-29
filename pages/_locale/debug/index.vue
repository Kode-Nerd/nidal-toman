<template>
  <CustomSVG
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
}
</script>

<style></style>
