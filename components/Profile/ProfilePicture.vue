<template>
  <div ref="profpict" class="profpict-container" :style="profpictstyle">
    <v-img
      :src="src"
      :height="height"
      :width="width"
      @load="ready = true"
    ></v-img>
    <div :style="borderStyle" class="border" :class="{ noborder }"></div>
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
    width: {
      type: String,
      default: '100px',
    },
    border: {
      type: String,
      default() {
        return this.$vuetify.theme.themes.light.background
      },
    },
    vertical: {
      type: Boolean,
      default: false,
    },
    horizontal: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      inView: false,
      ready: false,
    }
  },
  computed: {
    borderStyle() {
      const style = {
        width: this.width,
        height: this.height,
        borderColor: this.border,
      }

      if (this.horizontal && this.vertical) {
        style.borderWidth = `calc(${this.height} / 2) calc(${this.width} / 2)`
      } else if (this.horizontal) {
        style.borderWidth = `0px calc(${this.width} / 2)`
      } else if (this.vertical) {
        style.borderWidth = `calc(${this.height} / 2) 0px`
      } else {
        style.borderWidth = '0px'
      }

      return style
    },
    noborder() {
      return this.ready && this.inView
    },
    profpictstyle() {
      const style = {
        width: this.width,
        height: this.height,
      }

      return style
    },
  },
  mounted() {
    document.addEventListener(
      'scroll',
      () => {
        if (this.isInViewport()) {
          this.inView = true
        }
      },
      {
        passive: true,
      }
    )
  },
  methods: {
    isInViewport() {
      const el = this.$refs.profpict
      if (!el) {
        return false
      }

      const rect = el.getBoundingClientRect()

      return (
        rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) / 2
      )
    },
  },
}
</script>

<style scoped>
.profpict-container {
  position: relative;
}

.border {
  position: absolute;
  top: 0px;
  left: 0px;
  box-sizing: border-box;
  border-style: solid;
}

.noborder {
  border-width: 0px !important;
  transition: 1500ms;
  transition-timing-function: ease-in-out;
}
</style>
