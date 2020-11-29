<template>
  <div />
</template>

<script>
export default {
  beforeCreate() {
    const englishPageDetected = /^\/en/.test(this.$route.fullPath)

    if (englishPageDetected) {
      this.$router.push({ path: '/en/' })
    } else {
      this.$router.push({ path: '/' })
    }
  },
}
</script>

<style></style>
