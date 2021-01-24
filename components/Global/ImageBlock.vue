<template>
  <div class="container" :style="containerStyle">
    <img class="image" :src="src" alt="no-image" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: '',
    },
    height: {
      type: String,
      default: '100px',
    },
  },
  computed: {
    containerStyle() {
      return {
        height: this.height,
        backgroundImage: `url(${this.src})`,
        backgroundSize: 'contain',
      }
    },
  },
}
</script>

<style scoped>
.container {
  padding: 0px;
  display: inline-block;
}
.image {
  height: 100%;
  object-fit: contain;
  visibility: hidden;
}
</style>
