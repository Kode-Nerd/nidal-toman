<template>
  <div class="main-navigation__container" :style="normalColor">
    <div
      v-for="(part, index) in parts"
      :key="index"
      class="item__container"
      :class="{ active: part.active }"
      @mouseover="part.active = true"
      @mouseleave="part.active = false"
      @click="openDetail(part.query)"
    >
      <div
        class="item__title font-weight-light"
        :style="part.active ? activeColor : normalColor"
      >
        {{ $t(`treatments.${part.query}.title`) }}
      </div>
      <div class="item__line"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    parts: {
      type: Array,
      default() {
        return []
      },
    },
  },
  computed: {
    themes() {
      return this.$vuetify.theme.themes
    },
    normalColor() {
      return {
        borderColor: this.themes.light.border,
        color: this.themes.light.border,
      }
    },
    activeColor() {
      return {
        borderColor: this.themes.light.primary4,
        color: this.themes.light.primary4,
      }
    },
  },
  methods: {
    openDetail(query) {
      const { figure } = this.$route.query

      this.$router.push({ query: { figure, part: query } })
    },
  },
}
</script>

<style scoped>
.main-navigation__container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  height: 500px;
  width: 400px;
  border-right: 1px solid #c4c4c4;
}

.item__container {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.item__container:not(:first-child) {
  margin-top: 20px;
}

.item__title {
  margin-right: 10px;
}

.item__line {
  height: 1px;
  width: 20px;
  border-top: 1px solid #c4c4c4;
  transition: width 0.3s;
}

.active .item__line {
  width: 50px;
}

.active .item__title {
  /* font-weight: 700; */
}
</style>
