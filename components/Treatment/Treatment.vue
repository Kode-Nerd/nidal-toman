<template>
  <div v-if="!ready" class="__blank" />
  <div v-else class="treatment__container">
    <div class="treatment__main-nav">
      <MainNavigation v-if="isFemale" :parts="womanParts" />
      <MainNavigation v-if="isMale" :parts="manParts" />
    </div>
    <div class="treatment__back-button" @click="goBack">
      <div class="pa-8">
        <CustomSVG
          size="3rem"
          :src="require('bootstrap-icons/icons/arrow-left.svg')"
        />
      </div>
    </div>
    <div class="treatment__legal d-flex align-center">
      <SocialMedia :small="true" />
      <div class="mx-1" />
      <Legal />
    </div>
    <div
      v-if="!visibleTreatmentDetail"
      class="treatment__info d-flex flex-column align-start"
    >
      <span class="text-h3">{{ $t('treatments.virtual') }}</span>
      <v-btn
        class="text-lowercase"
        text
        small
        :color="themes.light.primary3"
        :ripple="false"
        @click="gotoProcedure"
      >
        {{ $t('treatments.changeGender') }}
      </v-btn>
      <span class="mt-8 text-h6 font-weight-light">{{
        $t('treatments.virtualDesc')
      }}</span>
    </div>

    <div class="treatment__main">
      <div class="treatment__image">
        <div v-if="isFemale" class="figure__woman" :class="detailClass">
          <v-img
            style="overflow: visible"
            contain
            position="bottom center"
            :src="require('~/assets/fig_3.png')"
            width="100%"
            height="100%"
          >
            <div v-if="!visibleTreatmentDetail">
              <Dot
                v-for="(part, index) in womanParts"
                :key="index"
                v-bind="{ ...part, part }"
              />
            </div>
            <div v-if="visibleTreatmentDetail">
              <Dot
                v-for="(part, index) in womanSubparts[figurePart]"
                :key="index"
                v-bind="{ ...part, part }"
              />
            </div>
          </v-img>
        </div>
        <div v-if="isMale" class="figure__man" :class="detailClass">
          <v-img
            style="overflow: visible"
            contain
            position="bottom center"
            :src="require('~/assets/fig_4.png')"
            width="100%"
            height="100%"
          >
            <div v-if="!visibleTreatmentDetail">
              <Dot
                v-for="(part, index) in manParts"
                :key="index"
                v-bind="{ ...part, part }"
              />
            </div>
          </v-img>
        </div>
      </div>
      <div v-if="visibleTreatmentDetail" class="right__detail">
        <TreatmentDetail
          v-if="isFemale"
          :subpart="womanSubparts[figurePart][figureSubpart]"
        />
        <TreatmentDetail
          v-if="isMale"
          :subpart="manSubparts[figurePart][figureSubpart]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TreatmentDetail from '../TreatmentDetail/TreatmentDetail'
import MainNavigation from './MainNavigation'
import Dot from './Dot'
import womanParts from './assets/womanParts.json'
import manParts from './assets/manParts.json'
import womanSubparts from './assets/womanSubparts.json'
import manSubparts from './assets/manSubparts.json'
import CustomSVG from '~/components/Global/CustomSVG'
import SocialMedia from '~/components/Global/SocialMedia'
import Legal from '~/components/Global/Legal'
import { finalpath } from '~/helpers'

export default {
  components: {
    TreatmentDetail,
    MainNavigation,
    Dot,
    CustomSVG,
    SocialMedia,
    Legal,
  },
  data() {
    return {
      ready: false,
      womanParts,
      manParts,
      womanSubparts,
      manSubparts,
    }
  },
  computed: {
    themes() {
      return this.$vuetify.theme.themes
    },
    visibleTreatmentDetail: {
      get() {
        return this.$store.state.visibleTreatmentDetail
      },
      set(val) {
        this.$store.commit('SET_VISIBLE_TREATMENT_DETAIL', val)
      },
    },
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
    locale() {
      return this.$store.state.locale
    },
    isFemale() {
      return this.figure === 'female'
    },
    isMale() {
      return this.figure === 'male'
    },
    detailClass() {
      return {
        zoom__in: this.visibleTreatmentDetail,
        face__head: this.figurePart === 'face_and_head',
        chest__area: this.figurePart === 'chest_area',
        body: this.figurePart === 'body',
        arms: this.figurePart === 'arms',
        leg: this.figurePart === 'legs',
      }
    },
  },
  watch: {
    '$route.query.part': {
      handler(val) {
        if (val) {
          this.visibleTreatmentDetail = true
          this.figurePart = val

          return
        }

        this.visibleTreatmentDetail = false
        this.figurePart = ''
        this.womanParts.forEach((part) => {
          part.active = false
        })
        this.manParts.forEach((part) => {
          part.active = false
        })
      },
      deep: true,
      immediate: true,
    },
  },
  beforeMount() {
    const { figure } = this.$route.query
    if (!figure || (figure !== 'male' && figure !== 'female')) {
      this.gotoProcedure()

      return
    }

    this.figure = figure
    this.ready = true
  },
  methods: {
    gotoProcedure() {
      this.$router.push({
        path: finalpath(this.locale, '/'),
        query: { id: 'procedures' },
      })
    },
    closeDetail() {
      const { figure } = this.$route.query
      this.$router.push({ query: { figure } })
    },
    goBack() {
      if (this.visibleTreatmentDetail) {
        this.closeDetail()
      } else {
        this.gotoProcedure()
      }
    },
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

.treatment__back-button {
  position: absolute;
  top: 0px;
  left: 0px;
  cursor: pointer;
  z-index: 1;
  transition: left 200ms;
}
.treatment__back-button:hover {
  left: -10px;
  transition: left 200ms;
}

.treatment__image {
  width: 50%;
}

.right__detail {
  width: 50%;
}

.treatment__info {
  position: absolute;
  top: 15vh;
  left: 5vw;
  width: 30vw;
}

.treatment__legal {
  position: absolute;
  bottom: 24px;
  right: 36px;
}

.treatment__main-nav {
  position: absolute;
  right: 80px;
  top: 50vh;
  transform: translate(0, -50%);
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
  transform: translate(0, 0);
  width: 150vh;
  height: 270vh;
  transition: 1000ms;
}
.figure__woman.zoom__in.face__head {
  left: -30vh;
  top: -30vh;
}
.figure__woman.zoom__in.chest__area {
  left: -30vh;
  top: -50vh;
}
.figure__woman.zoom__in.body {
  left: -30vh;
  top: -70vh;
}
.figure__woman.zoom__in.arms {
  left: -40vh;
  top: -70vh;
}
.figure__woman.zoom__in.leg {
  left: -30vh;
  top: -100vh;
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
  transform: translate(0, 0);
  width: 150vh;
  height: 270vh;
  transition: 1000ms;
}
.figure__man.zoom__in.face__head {
  left: -45vh;
  top: -40vh;
}
.figure__man.zoom__in.chest__area {
  left: -55vh;
  top: -55vh;
}
.figure__man.zoom__in.body {
  left: -65vh;
  top: -70vh;
}
.figure__man.zoom__in.arms {
  left: -40vh;
  top: -40vh;
}
.figure__man.zoom__in.leg {
  left: -70vh;
  top: -120vh;
}
</style>
