<template>
  <div class="d-flex flex-column mb-6">
    <span class="text-h4 mb-4" :style="titleStyle">{{ title }}</span>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    titleColor: {
      type: String,
      default() {
        return this.$vuetify.theme.themes.light.color1
      },
    },
  },
  computed: {
    titleStyle() {
      return {
        color: this.titleColor,
      }
    },
  },
}
</script>

<style></style>
