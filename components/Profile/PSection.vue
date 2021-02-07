<template>
  <div class="section">
    <div v-if="title" class="title">
      <CustomSVG
        class="ml-n8 mb-n8 mt-n3"
        :src="require('~/assets/name.svg')"
        :width="'38rem'"
        :height="'5rem'"
        :color="themes.light.logo"
        cover
      ></CustomSVG>
      <span class="text-h6 font-weight-light text-uppercase">{{
        $t('profile.subtitle')
      }}</span>
    </div>
    <div class="d-flex align-center">
      <div :style="profileText" :class="{ right, left: !right }">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import CustomSVG from '~/components/Global/CustomSVG'
export default {
  components: {
    CustomSVG,
  },
  props: {
    right: {
      type: Boolean,
      default: false,
    },
    title: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: '60%',
    },
  },
  computed: {
    themes() {
      return this.$vuetify.theme.themes
    },
    profileText() {
      return {
        width: this.width,
      }
    },
  },
}
</script>

<style scoped>
.title {
  margin-bottom: 84px;
}

.section {
  padding: 140px 84px;
  width: 100vw;
}

.right {
  margin-left: auto;
}

.left {
  margin-right: auto;
}
</style>
