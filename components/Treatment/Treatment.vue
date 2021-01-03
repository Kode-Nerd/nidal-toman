<template>
  <div v-if="!ready" class="__blank" />
  <div v-else class="treatment__container">
    <div class="treatment__main-nav">
      <MainNavigation />
    </div>
    <!-- <div class="treatment__sub-nav">
      <VerticalNavigation />
    </div> -->

    <div class="treatment__main">
      <div class="treatment__image">
        <div v-if="isFemale" class="figure__woman">
          <v-img
            style="overflow: visible"
            contain
            position="bottom center"
            :src="require('~/assets/fig_3.png')"
            width="100%"
            height="100%"
          >
            <Dot
              v-for="(part, index) in womanParts"
              :key="index"
              v-bind="part"
            />
          </v-img>
        </div>
        <div v-if="isMale" class="figure__man">
          <v-img
            style="overflow: visible"
            contain
            position="bottom center"
            :src="require('~/assets/fig_4.png')"
            width="100%"
            height="100%"
          >
            <Dot v-for="(part, index) in manParts" :key="index" v-bind="part" />
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
import { finalpath } from '~/helpers'

export default {
  components: {
    TreatmentDetail,
    MainNavigation,
    // VerticalNavigation,
    Dot,
  },
  data() {
    return {
      ready: false,
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
          name: 'Arms',
          x: '65%',
          y: '40%',
        },
        {
          name: 'Leg',
          x: '45%',
          y: '60%',
        },
      ],
      manParts: [
        {
          name: 'Face and Head',
          x: '55%',
          y: '30%',
        },
        {
          name: 'Chest Area',
          x: '82%',
          y: '40%',
        },
        {
          name: 'Body',
          x: '84%',
          y: '50%',
        },
        {
          name: 'Arms',
          x: '42%',
          y: '38%',
        },
        {
          name: 'Leg',
          x: '70%',
          y: '65%',
        },
      ],
    }
  },
  computed: {
    visibleTreatmentDetail() {
      return this.$store.state.visibleTreatmentDetail
    },
    locale() {
      return this.$store.state.locale
    },
    isFemale() {
      return this.figure === 'female'
    },
    isMale() {
      return this.figure === 'male'
    },
  },
  beforeMount() {
    const { figure } = this.$route.query
    if (!figure || (figure !== 'male' && figure !== 'female')) {
      this.$router.push({
        path: finalpath(this.locale, '/'),
        query: { id: 'procedures' },
      })

      return
    }

    this.figure = figure
    this.ready = true
  },
}
</script>

<style scoped>
.__blank {
  width: 100%;
  height: calc(100vh - 48px);
}

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
  transform: translate(-50%, 0);
  left: 50%;
  width: 50vh;
  height: 90vh;
  transition: 1000ms;
}

.figure__woman.zoom__in {
  position: absolute;
  top: -30vh;
  transform: translate(0, 0);
  left: -30vh;
  width: 150vh;
  height: 270vh;
  transition: 1000ms;
}

.figure__man {
  position: absolute;
  bottom: 10vh;
  transform: translate(-50%, 0);
  left: 50%;
  width: 50vh;
  height: 90vh;
  transition: 1000ms;
}

.figure__man.zoom__in {
  position: absolute;
  top: 0px;
  transform: translate(0, 0);
  left: -30vh;
  width: 150vh;
  height: 270vh;
  transition: 1000ms;
}
</style>
