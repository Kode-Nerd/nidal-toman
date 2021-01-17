<template>
  <div class="fullscreen">
    <div v-if="!src" class="no-image">No image source</div>
    <div v-else class="cover" :class="{ coverOut: borderZero }">
      <v-img
        :position="position"
        :src="src"
        width="100%"
        height="100%"
        @load="showCover"
        ><slot
      /></v-img>
    </div>
    <div v-if="src" class="border" :class="{ borderZero }"></div>
  </div>
</template>

<script>
export default {
  props: {
    position: {
      type: String,
      default: 'center',
    },
    src: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      borderZero: false,
    }
  },
  methods: {
    showCover() {
      setTimeout(() => {
        this.borderZero = true
      }, 500)
    },
  },
}
</script>

<style scoped>
.fullscreen {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.no-image {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cover {
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50vh;
  left: 50vw;
  width: 130vw;
  height: 130vh;
}
.coverOut {
  width: 100vw;
  height: 100vh;
  transition: 1500ms;
  transition-timing-function: ease-in-out;
}

.border {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0px;
  left: 0px;
  border-style: solid;
  border-width: 50vh 50vw;
  border-color: white;
}
.borderZero {
  border-style: solid;
  border-width: 0px;
  border-color: white;
  transition: 1500ms ease;
}
</style>
