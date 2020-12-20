<template>
  <div
    id="error-container"
    class="d-flex flex-column justify-center align-center"
  >
    <span class="text-h3" :style="titleStyle">404</span>
    <span class="text-h6" :style="subtitleStyle"
      >The page is not found. Redirecting to home{{ dot }}</span
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      dot: '',
    }
  },
  computed: {
    titleStyle() {
      return {
        color: this.$vuetify.theme.themes.light.color1,
      }
    },
    subtitleStyle() {
      return {
        color: this.$vuetify.theme.themes.light.text,
      }
    },
  },
  beforeCreate() {
    const timer = setInterval(() => {
      this.dot += '.'
    }, 1000)
    setTimeout(() => {
      clearInterval(timer)

      const englishPageDetected = /^\/en/.test(this.$route.fullPath)
      if (englishPageDetected) {
        this.$router.push('/en/')
      } else {
        this.$router.push('/')
      }
    }, 3000)
  },
}
</script>

<style>
#error-container {
  width: 100%;
  height: 100vh;
}
</style>
