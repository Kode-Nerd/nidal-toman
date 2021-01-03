<template>
  <div class="treatment__container">
    <div class="treatment__main-nav">
      <MainNavigation />
    </div>
    <!-- <div class="treatment__sub-nav">
      <VerticalNavigation />
    </div> -->

    <div class="treatment__main">
      <div class="treatment__image">
        <div class="figure__woman">
          <v-img
            style="overflow: visible"
            contain
            position="bottom center"
            :src="require('~/assets/fig_3.png')"
            width="50vh"
            height="90vh"
          >
            <Dot
              v-for="(part, index) in womanParts"
              :key="index"
              v-bind="part"
            />
          </v-img>
        </div>
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
// import VerticalNavigation from './VerticalNavigation'
import Dot from './Dot'

export default {
  components: {
    TreatmentDetail,
    MainNavigation,
    // VerticalNavigation,
    Dot,
  },
  data() {
    return {
      womanParts: [
        {
          name: 'Face and Head',
          x: '55%',
          y: '26%',
        },
        {
          name: 'Chest Area',
          x: '40%',
          y: '36%',
        },
        {
          name: 'Body',
          x: '42%',
          y: '46%',
        },
        {
          name: 'Outpatient Treatment',
          x: '65%',
          y: '40%',
        },
      ],
    }
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
  height: calc(100vh - 48px);
  position: relative;
  overflow: hidden;
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

.figure__woman {
  position: absolute;
  bottom: 0px;
  left: calc(50% - 25vh);
}
</style>
