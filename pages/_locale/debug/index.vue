<template>
  <div v-if="!debug" />
  <div v-else>
    <CoverPicture :src="require('~/assets/images/practice/praxis1.jpg')" />
  </div>
</template>

<script>
import CoverPicture from '~/components/Global/CoverPicture'
export default {
  components: {
    CoverPicture,
  },
  data() {
    return {
      debug: false,
    }
  },
  computed: {
    themes() {
      return this.$vuetify.theme.themes
    },
  },
  mounted() {
    const isDebug = this.$route.query.debug === '1'
    console.log({ isDebug })
    if (isDebug) {
      this.debug = true
    }
  },
}
</script>

<style></style>
