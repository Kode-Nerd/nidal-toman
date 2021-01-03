<template>
  <div
    tabindex="0"
    :style="outerDot"
    class="outer__dot"
    @click="toggleTooltip"
    @blur="hideTooltip"
  >
    <div :style="innerDot" class="inner__dot">
      <Tooltip v-if="showingTooltip" />
    </div>
  </div>
</template>

<script>
import Tooltip from './Tooltip'

export default {
  components: {
    Tooltip,
  },
  props: {
    x: {
      type: String,
      default: '0%',
    },
    y: {
      type: String,
      default: '0%',
    },
    color: {
      type: String,
      default() {
        return this.$vuetify.theme.themes.light.background
      },
    },
  },
  data() {
    return {
      showingTooltip: false,
    }
  },
  computed: {
    outerDot() {
      return {
        left: this.x,
        top: this.y,
        borderColor: this.color,
      }
    },
    innerDot() {
      return {
        background: this.color,
      }
    },
  },
  methods: {
    toggleTooltip() {
      this.showingTooltip = !this.showingTooltip
    },
    hideTooltip() {
      this.showingTooltip = false
    },
  },
}
</script>

<style scoped>
div:focus {
  outline: none;
}

.outer__dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  fill-opacity: 0%;
  border: solid 0px;
  transform: translate(-50%, -50%);
  position: absolute;
}

.outer__dot:hover {
  width: 22px;
  height: 22px;
  border: solid 1px;
  transition: 200ms;
}

.inner__dot {
  position: absolute;
  top: calc(50% - 2.5px);
  left: calc(50% - 2.5px);
  width: 5px;
  height: 5px;
  border-radius: 50%;
}
</style>
