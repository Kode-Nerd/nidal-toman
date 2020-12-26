<template>
  <svg :style="iconStyle" />
</template>

<script>
export default {
  props: {
    type: {
      required: true,
      type: String,
      default: 'app',
    },
    size: {
      type: String,
      default: '1rem',
    },
    color: {
      type: String,
      default: 'black',
    },
  },
  data() {
    return {
      icon: '',
    }
  },
  computed: {
    iconStyle() {
      return {
        maskImage: `url(${this.icon})`,
        backgroundColor: this.color,
        maskSize: this.size,
        width: this.size,
        height: this.size,
        margin: '0px',
        verticalAlign: 'middle',
      }
    },
  },
  created() {
    this.icon = require(`bootstrap-icons/icons/${this.type}.svg`)
  },
}
</script>

<style></style>
