<template>
  <div
    tabindex="0"
    :style="outerDot"
    class="outer__dot"
    :class="{ hover: part.active }"
    @click="toggleTooltip"
    @blur="hideTooltip"
    @mouseover="part.active = true"
    @mouseleave="part.active = false"
  >
    <div :style="innerDot" class="inner__dot">
      <v-fade-transition>
        <Tooltip v-if="showingTooltip" :name="name" />
      </v-fade-transition>
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
    name: {
      type: String,
      default: '',
    },
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
    part: {
      type: Object,
      default() {
        return {}
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

.outer__dot.hover {
  width: 22px;
  height: 22px;
  border: solid 1px;
  transition: 200ms;
}

.inner__dot {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5px;
  height: 5px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}
</style>
