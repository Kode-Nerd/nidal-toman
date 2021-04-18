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
        ><v-icon small>fas fa-times</v-icon></v-btn
      >
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
  </MobileView>
</template>

<script>
import MobileView from '~/components/Mobile/View'
import { finalpath } from '~/helpers'

export default {
  components: {
    MobileView,
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

      figure: '',
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
    locale: {
      set(val) {
        this.$store.commit('SET_LOCALE', val)
      },
      get() {
        return this.$store.state.locale
      },
    },
  },
  methods: {
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
    },
    closeFigure() {
      this.$router.push({
        path: this.finalpath('procedures'),
      })
      this.figure = ''
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
