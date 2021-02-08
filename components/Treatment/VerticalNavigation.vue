<template>
  <div class="vertical-navigation__container">
    <div
      v-for="(subpart, index) in subparts"
      :key="index"
      class="item__container"
      :class="{ active: subpart.active }"
      @click="setActive(index)"
    >
      <div class="item__title">
        {{ $t(`treatments.${figurePart}.${subpart.query}.title`) }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    subparts: {
      type: Array,
      default() {
        return []
      },
    },
  },
  computed: {
    figurePart: {
      get() {
        return this.$store.state.figurePart
      },
      set(val) {
        this.$store.commit('SET_FIGURE_PART', val)
      },
    },
    figureSubpart: {
      get() {
        return this.$store.state.figureSubpart
      },
      set(val) {
        this.$store.commit('SET_FIGURE_SUBPART', val)
      },
    },
  },
  mounted() {
    const isEmpty = this.subparts.length === 0

    if (isEmpty) {
      return
    }

    let isNew = true

    this.subparts.forEach((subpart) => {
      if (subpart.active) {
        isNew = false
      }
    })

    if (isNew) {
      this.subparts[0].active = true
    }
  },
  methods: {
    setActive(index) {
      this.subparts.forEach((subpart) => {
        subpart.active = false
      })
      this.subparts[index].active = true
      this.figureSubpart = index
    },
  },
}
</script>

<style scoped>
.vertical-navigation__container {
  margin-left: 0px;
}

.item__container {
  display: flex;
  align-items: center;
  padding: 8px 15px;
  border-left: 1px solid #c4c4c4;
  cursor: pointer;
}

.item__title {
  margin-right: 10px;
}

.active .item__title {
  font-weight: 700;
}

.active {
  border-left: 3px solid #c4c4c4;
  transition: 50ms;
}
</style>
