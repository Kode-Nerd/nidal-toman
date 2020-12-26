<template>
  <div class="treatment__container">
    <div class="treatment__main-nav">
      <MainNavigation />
    </div>
    <div class="treatment__sub-nav">
      <VerticalNavigation />
    </div>

    <div class="treatment__main">
      <div class="treatment__image">
        <Tooltip />
      </div>
      <div v-if="visibleTreatmentDetail" class="right__detail">
        <TreatmentDetail />
      </div>
    </div>
  </div>
</template>

<script>
import TreatmentDetail from '../TreatmentDetail/TreatmentDetail'
import MainNavigation from './MainNavigation'
import VerticalNavigation from './VerticalNavigation'
import Tooltip from './Tooltip'

export default {
  components: {
    TreatmentDetail,
    MainNavigation,
    VerticalNavigation,
    Tooltip,
  },
  computed: {
    visibleTreatmentDetail() {
      return this.$store.state.visibleTreatmentDetail
    },
  },
}
</script>

<style scoped>
.treatment__container {
  width: 100%;
  min-height: 800px;
}

.treatment__main {
  width: 100%;
  display: flex;
}

.treatment__image {
  width: 50%;
}

.right__detail {
  width: 50%;
}

.treatment__sub-nav {
  position: absolute;
  top: 100px;
}

.treatment__main-nav {
  position: absolute;
  right: 80px;
  top: 100px;
  z-index: 1;
}
</style>
