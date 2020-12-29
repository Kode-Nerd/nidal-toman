<template>
  <svg v-if="src" class="no-repeat" :style="[svgStyle, ...customStyle]" />
  <div v-else>Source undefined.</div>
</template>

<script>
export default {
  props: {
    src: {
      required: true,
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '1rem',
    },
    height: {
      type: String,
      default: '1rem',
    },
    color: {
      type: String,
      default: 'black',
    },
    customStyle: {
      type: Array,
      default() {
        return []
      },
    },
    position: {
      type: String,
      default: 'center',
    },
  },
  computed: {
    svgStyle() {
      return {
        maskImage: `url(${this.src})`,
        backgroundColor: this.color,
        maskSize: this.size || `${this.width} ${this.height}`,
        width: this.size || this.width,
        height: this.size || this.height,
        margin: '0px',
        maskPosition: this.position,
      }
    },
  },
}
</script>

<style scoped>
.no-repeat {
  mask-repeat: no-repeat;
}
</style>
