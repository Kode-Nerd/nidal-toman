<template>
  <div class="title">
    <div :style="titleStyle">
      <span class="text-h4"><slot /></span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    themes() {
      return this.$vuetify.theme.themes
    },
    titleStyle() {
      return {
        borderBottom: `1px solid ${this.themes.light.primary}`,
      }
    },
  },
}
</script>

<style scoped>
.title {
  padding: 0px;
}
</style>
