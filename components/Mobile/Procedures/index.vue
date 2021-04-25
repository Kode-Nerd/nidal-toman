<template>
  <MobileView>
    <v-fab-transition>
      <v-btn
        elevation="2"
        color="primary3"
        dark
        fab
        fixed
        top
        left
        small
        @click="drawer = !drawer"
        ><v-icon small>fas fa-bars</v-icon></v-btn
      >
    </v-fab-transition>
    <v-fab-transition>
      <v-btn
        v-show="figure"
        elevation="2"
        color="primary3"
        dark
        fab
        fixed
        top
        right
        small
        @click="closeFigure"
      >
        <v-icon v-if="!visibleTreatmentDetail" small>fas fa-times</v-icon>
        <v-icon v-else small>fas fa-chevron-right</v-icon>
      </v-btn>
    </v-fab-transition>
    <MobileView v-if="!figure" class="justify-center align-center relative">
      <swiper ref="procedureCarousel" style="margin: 0" :options="swiperOption">
        <swiper-slide :key="0">
          <MobileView class="justify-center align-center full">
            <v-img
              contain
              :src="require('~/assets/fig_3.png')"
              width="80vw"
            ></v-img>
          </MobileView>
        </swiper-slide>
        <swiper-slide :key="1">
          <MobileView class="justify-center align-center full">
            <v-img
              contain
              :src="require('~/assets/fig_4.png')"
              width="80vw"
            ></v-img>
          </MobileView>
        </swiper-slide>
        <div slot="pagination" class="swiper-pagination"></div>
      </swiper>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <MobileView class="bottom-button">
        <v-btn
          style="padding: 0"
          elevation="2"
          color="primary3"
          tile
          block
          dark
          @click="gotoConsultation"
        >
          <span>{{ $t('welcome.discover2') }}</span>
        </v-btn>
      </MobileView>
    </MobileView>
    <MobileView v-else>
      <MobileView class="full relative">
        <div
          v-if="isFemale"
          id="female"
          ref="female"
          class="figure__woman"
          :class="detailClass"
        >
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
                :index="index"
                v-bind="{ ...part, part }"
              />
            </div>
            <div v-else>
              <Dot
                v-for="(part, index) in womanSubparts[figurePart]"
                :key="index"
                :index="index"
                v-bind="{ ...part, part }"
                for-subpart
                @reset-active-parts="resetActiveParts"
                @open-detail="openDetail"
              />
            </div>
          </v-img>
        </div>
        <div
          v-if="isMale"
          id="male"
          ref="male"
          class="figure__man"
          :class="detailClass"
        >
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
            <div v-else>
              <Dot
                v-for="(part, index) in manSubparts[figurePart]"
                :key="index"
                :index="index"
                v-bind="{ ...part, part }"
                for-subpart
                @reset-active-parts="resetActiveParts"
                @open-detail="openDetail"
              />
            </div>
          </v-img>
        </div>
      </MobileView>
      <MobileView class="bottom-button">
        <v-btn
          v-show="!detailButtonDisabled"
          style="padding: 0"
          elevation="2"
          color="primary3"
          tile
          block
          dark
          @click="gotoDetails"
        >
          <span>{{ $t('treatments.detail') }}</span>
        </v-btn>
        <v-btn
          v-show="visibleTreatmentDetail"
          style="padding: 0"
          elevation="2"
          color="primary3"
          tile
          block
          dark
          @click="subpartDialog = true"
        >
          <span>{{ $t('treatments.allDetail') }}</span>
        </v-btn>
      </MobileView>
    </MobileView>

    <v-dialog
      v-model="subpartDialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card class="overflow-y-auto">
        <v-toolbar dark color="primary3">
          <v-btn icon dark @click="subpartDialog = false">
            <v-icon>fas fa-times</v-icon>
          </v-btn>
          <v-toolbar-title>
            <span>
              {{ $t(`treatments.${figurePart}.title`) }}
              {{ $t('treatments.procedures') }}
            </span>
          </v-toolbar-title>
          <v-spacer />
          <v-btn v-if="!showingList" icon dark @click="showingList = true">
            <v-icon>fas fa-chevron-right</v-icon>
          </v-btn>
        </v-toolbar>
        <MobileView>
          <MobileView v-if="showingList" class="detail-section">
            <span class="text-h5">{{ $t('treatments.surgeries') }}</span>
            <VerticalNavigation
              class="mt-3 mb-6"
              tab-justify="left"
              :subparts="subparts"
              @close-list="toogleList"
            />
            <span class="text-h5">{{ $t('treatments.nonsurgeries') }}</span>
            <VerticalNavigation
              class="mt-3"
              tab-justify="left"
              :subparts="outpatient"
              outpatient
              @close-list="toogleList"
            />
          </MobileView>
          <MobileView v-else class="detail-section"> Detail </MobileView>
        </MobileView>
      </v-card>
    </v-dialog>
  </MobileView>
</template>

<script>
import MobileView from '~/components/Mobile/View'
import Dot from '~/components/Treatment/Dot'
import VerticalNavigation from '~/components/Treatment/VerticalNavigation'

import womanParts from '~/components/Treatment/assets/womanParts.json'
import manParts from '~/components/Treatment/assets/manParts.json'
import womanSubparts from '~/components/Treatment/assets/womanSubparts.json'
import manSubparts from '~/components/Treatment/assets/manSubparts.json'
import outpatient from '~/components/Treatment/assets/outpatient.json'

import { finalpath } from '~/helpers'

export default {
  components: {
    MobileView,
    Dot,
    VerticalNavigation,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 0,
        centeredSlides: true,
        grabCursor: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
        },
      },

      ready: false,
      figure: '',
      subpartDialog: false,
      showingList: true,
      womanParts,
      manParts,
      womanSubparts,
      manSubparts,
      outpatient,
    }
  },
  computed: {
    drawer: {
      set(val) {
        this.$store.commit('SET_SIDENAV', val)
      },
      get() {
        return this.$store.state.sideNav
      },
    },
    locale() {
      return this.$store.state.locale
    },
    outpatientDetail: {
      get() {
        return this.$store.state.outpatientDetail
      },
      set(val) {
        this.$store.commit('SET_OUTPATIENTDETAIL', val)
      },
    },
    visibleTreatmentDetail: {
      get() {
        return this.$store.state.visibleTreatmentDetail
      },
      set(val) {
        this.$store.commit('SET_VISIBLE_TREATMENT_DETAIL', val)
      },
    },
    subparts() {
      if (this.isFemale) {
        return this.womanSubparts[this.figurePart]
      }
      if (this.isMale) {
        return this.manSubparts[this.figurePart]
      }

      return []
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
    isFemale() {
      return this.figure === 'female'
    },
    isMale() {
      return this.figure === 'male'
    },
    isOutpatient() {
      const { outpatient } = this.$route.query
      return outpatient === '1'
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
    detailButtonDisabled() {
      if (this.isFemale) {
        return this.womanParts.every((item) => !item.active)
      }

      if (this.isMale) {
        return this.manParts.every((item) => !item.active)
      }

      return true
    },
  },
  watch: {
    '$route.query.part': {
      handler(val) {
        if (val) {
          setTimeout(() => {
            this.visibleTreatmentDetail = true
          }, 100)
          this.figurePart = val

          this.checkActiveSubpart()
          this.checkOutpatient()
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
    '$route.query.outpatient': {
      handler(val) {
        if (val === '1') {
          this.outpatientDetail = true
          if (this.isFemale) {
            this.womanSubparts[this.figurePart].forEach((subpart) => {
              subpart.active = false
            })
          }

          if (this.isMale) {
            this.manSubparts[this.figurePart].forEach((subpart) => {
              subpart.active = false
            })
          }
        } else {
          this.outpatientDetail = false
          this.outpatient.forEach((subpart) => {
            subpart.active = false
          })
        }
      },
      deep: true,
      immediate: true,
    },
  },
  beforeMount() {
    this.prechecking()
  },
  mounted() {
    this.checkActiveSubpart()
    this.checkOutpatient()
  },
  methods: {
    prechecking() {
      const { figure } = this.$route.query
      if (!figure || (figure !== 'male' && figure !== 'female')) {
        this.closeFigure()

        return
      }

      this.figure = figure
      this.ready = true
    },
    checkActiveSubpart() {
      if (this.isFemale) {
        this.womanSubparts[this.figurePart].forEach((subpart) => {
          subpart.active = false
        })
        this.figureSubpart = 0
        this.womanSubparts[this.figurePart][0].active = true
      }
      if (this.isMale) {
        this.manSubparts[this.figurePart].forEach((subpart) => {
          subpart.active = false
        })
        this.figureSubpart = 0
        this.manSubparts[this.figurePart][0].active = true
      }
      this.$store.commit('SET_ACTIVE_TAB_TREATMENT_DETAIL', {
        activeTab: 'general',
      })
    },
    checkOutpatient() {
      if (this.isOutpatient) {
        this.outpatientDetail = true
        if (this.isFemale) {
          this.womanSubparts[this.figurePart].forEach((subpart) => {
            subpart.active = false
          })
        }

        if (this.isMale) {
          this.manSubparts[this.figurePart].forEach((subpart) => {
            subpart.active = false
          })
        }

        this.outpatient.forEach((subpart) => {
          subpart.active = false
        })
        this.figureSubpart = 0
        this.outpatient[0].active = true
      } else {
        this.outpatientDetail = false
        this.outpatient.forEach((subpart) => {
          subpart.active = false
        })
      }
    },
    openDetail() {
      this.subpartDialog = true
    },
    toogleList() {
      this.showingList = !this.showingList
    },
    finalpath(path) {
      return finalpath(this.locale, path, true)
    },
    gotoConsultation() {
      const activeIndex = this.$refs.procedureCarousel.$swiper.activeIndex

      if (activeIndex === 0) {
        this.$router.push({
          path: this.finalpath('procedures'),
          query: { figure: 'female' },
        })
        this.figure = 'female'
      } else if (activeIndex === 1) {
        this.$router.push({
          path: this.finalpath('procedures'),
          query: { figure: 'male' },
        })
        this.figure = 'male'
      }

      this.ready = true
    },
    closeFigure() {
      if (!this.visibleTreatmentDetail) {
        this.$router.push({
          path: this.finalpath('procedures'),
        })
        this.figure = ''
      } else {
        const { figure } = this.$route.query

        this.$router.push({ query: { figure } })
      }
    },
    gotoDetails() {
      const { figure } = this.$route.query
      let query = ''

      if (this.isFemale) {
        const active = this.womanParts.find((part) => part.active)
        query = active.query
      } else if (this.isMale) {
        const active = this.manParts.find((part) => part.active)
        query = active.query
      }

      if (!query) {
        return
      }

      this.$router.push({ query: { figure, part: query } })
    },
    resetActiveParts(val) {
      if (this.isFemale) {
        this.womanSubparts[this.figurePart].forEach((subpart) => {
          subpart.active = false
        })
      }
      if (this.isMale) {
        this.manSubparts[this.figurePart].forEach((subpart) => {
          subpart.active = false
        })
      }
      this.figureSubpart = val
    },
  },
}
</script>

<style scoped>
.full {
  height: 93vh;
  width: 100vw;
}
.relative {
  position: relative;
}
.bottom-button {
  height: 7vh;
  width: 100vw;
}
.detail-section {
  padding: 5vw;
}

.figure__woman {
  position: absolute;
  bottom: 0px;
  transform: translate(-50%, 0);
  left: 50%;
  width: 80vw;
  height: 144vw;
  transition: 1000ms;
}

.figure__woman.zoom__in {
  position: absolute;
  width: 240vw;
  height: 432vw;
  transition: 1000ms;
}
.figure__woman.zoom__in.face__head {
  top: -10vh;
}
.figure__woman.zoom__in.chest__area {
  top: -20vh;
}
.figure__woman.zoom__in.body {
  top: -50vh;
}
.figure__woman.zoom__in.arms {
  left: 10%;
  top: -50vh;
}
.figure__woman.zoom__in.leg {
  top: -80vh;
}

.figure__man {
  position: absolute;
  bottom: 10vh;
  transform: translate(-50%, 0);
  left: 50%;
  width: 80vw;
  height: 144vw;
  transition: 1000ms;
}

.figure__man.zoom__in {
  position: absolute;
  width: 240vw;
  height: 432vw;
  transition: 1000ms;
}
.figure__man.zoom__in.face__head {
  left: 10%;
  top: -20vh;
}
.figure__man.zoom__in.chest__area {
  left: 10%;
  top: -35vh;
}
.figure__man.zoom__in.body {
  left: -10%;
  top: -50vh;
}
.figure__man.zoom__in.arms {
  top: -40vh;
}
.figure__man.zoom__in.leg {
  left: 10%;
  top: -70vh;
}

.swiper-slide {
  width: auto;
  height: auto;
}
.swiper-button-prev {
  color: #d2af69;
}
.swiper-button-next {
  color: #d2af69;
}
.swiper-pagination >>> .swiper-pagination-bullet-active {
  background-color: #d2af69;
}
</style>
