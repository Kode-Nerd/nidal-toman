<template>
  <MobileView>
    <v-fab-transition>
      <v-btn
        v-show="buttonShow"
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
    <MobileView class="vertical-swiper-page">
      <swiper
        ref="verticalCarousel"
        class="swiper"
        :options="verticalSwiperOption"
        @slideChange="showFAB"
      >
        <swiper-slide>
          <div ref="headerMobile" class="d-flex justify-start header">
            <div class="d-flex align-center">
              <v-btn small icon color="primary3" @click="drawer = !drawer"
                ><v-icon small>fas fa-bars</v-icon></v-btn
              >
            </div>
          </div>
          <MobileView
            class="justify-space-between align-center section main mt-n12"
          >
            <MobileView class="align-center">
              <CustomSVG
                :src="require('~/assets/main-logo.svg')"
                :width="mainLogoWidth"
                :height="mainLogoHeight"
                :color="themes.light.primary3"
                cover
              ></CustomSVG>
            </MobileView>
            <MobileView class="full-width align-end">
              <v-img
                contain
                position="center"
                :src="require('~/assets/fig_2.png')"
                width="32vh"
                height="68vh"
              ></v-img>
            </MobileView>
          </MobileView>
        </swiper-slide>
        <swiper-slide>
          <MobileView
            :style="lightBackground"
            class="justify-center align-center section philosophy"
          >
            <span class="text-h6">
              {{ $t('welcome.philosophy') }}
            </span>
          </MobileView>
        </swiper-slide>
        <swiper-slide>
          <MobileView class="justify-center align-center section infusion">
            <span class="text-h6 mb-4 text-uppercase font-weight-light">
              {{ $t('welcome.infusion') }}
            </span>
            <v-img
              :style="figure2LogoStyle"
              contain
              :src="require(`~/assets/B'lance.png`)"
              width="85vw"
            ></v-img>
            <v-img
              contain
              :src="require('~/assets/fig_1.png')"
              width="25vh"
            ></v-img>
            <nuxt-link
              :style="[{ color: themes.light.primary3 }, figure2MoreInfoStyle]"
              :to="finalpath('ivtherapies')"
            >
              <div class="d-flex align-center">
                <span>
                  {{ $t('welcome.discover') }}
                </span>
                <CustomSVG
                  class="ml-2"
                  size="1.5rem"
                  :src="require('bootstrap-icons/icons/arrow-right.svg')"
                  :color="themes.light.primary3"
                />
              </div>
            </nuxt-link>
          </MobileView>
        </swiper-slide>
        <swiper-slide>
          <MobileView
            :style="lightBackground"
            class="justify-center align-center section infusion procedure"
          >
            <swiper style="margin: 0" :options="swiperOption">
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
              <div
                slot="pagination"
                class="swiper-pagination swiper-pagination-h"
              ></div>
            </swiper>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            <span
              class="text-h6 mb-4 text-uppercase text-center font-weight-light procedure-title"
            >
              {{ $t('welcome.procedure') }}
            </span>
            <MobileView class="discover-procedure">
              <v-btn
                elevation="2"
                color="primary3"
                tile
                dark
                block
                @click="$router.push({ path: finalpath('procedures') })"
              >
                <span>{{ $t('welcome.discover3') }}</span>
              </v-btn>
            </MobileView>
          </MobileView>
        </swiper-slide>
        <div
          slot="pagination"
          class="swiper-pagination swiper-pagination-v"
        ></div>
      </swiper>
    </MobileView>
  </MobileView>
</template>

<script>
import MobileView from '~/components/Mobile/View'
import CustomSVG from '~/components/Global/CustomSVG'

import { finalpath } from '~/helpers'

export default {
  components: {
    MobileView,
    CustomSVG,
  },
  data() {
    return {
      mainLogoWidthSize: 35,
      buttonShow: false,
      verticalSwiperOption: {
        direction: 'vertical',
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 0,
        loop: false,
        loopFillGroupWithBlank: true,
        grabCursor: true,
        pagination: {
          el: '.swiper-pagination-v',
          dynamicBullets: true,
        },
      },
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
          el: '.swiper-pagination-h',
          dynamicBullets: true,
        },
      },
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
    themes() {
      return this.$vuetify.theme.themes
    },
    mainLogoWidth() {
      return `${this.mainLogoWidthSize}vh`
    },
    mainLogoHeight() {
      return `${0.4 * this.mainLogoWidthSize}vh`
    },
    lightBackground() {
      return {
        background: this.themes.light.lightBackground,
      }
    },
    figure2LogoStyle() {
      return {
        position: 'absolute',
        transform: 'translateX(-50%)',
        top: '17%',
        left: '50%',
        opacity: '70%',
      }
    },
    figure2MoreInfoStyle() {
      return {
        position: 'absolute',
        bottom: '15%',
        right: '4%',
      }
    },
  },
  methods: {
    showFAB(swiper) {
      const val = swiper.activeIndex

      if (val > 0) {
        this.buttonShow = true
      } else {
        this.buttonShow = false
      }
    },
    finalpath(path) {
      return finalpath(this.locale, path, true)
    },
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
}
.vertical-swiper-page {
  position: relative;
  width: 100vw;
  height: 100vh;
}
.header {
  padding: 10px;
}
.section {
  box-sizing: border-box;
  padding: 10vh 10vw;
  height: 100vh;
}
.section.main {
  padding: 10vh 3vw 0px 3vw;
}
.section.philosophy {
  min-height: 50vh;
  height: auto;
}
.section.infusion {
  position: relative;
}
.full {
  height: 100vh;
  width: 100vw;
}
.section.procedure {
  padding: 0px;
}
.full-height {
  height: 100%;
}
.full-width {
  width: 100%;
}
.discover-procedure {
  z-index: 1;
  position: absolute;
  padding: 5vh 5vw;
  width: 100vw;
  bottom: 0px;
}
.procedure-title {
  transform: translate(-50%, -50%);
  position: absolute;
  left: 50vw;
  top: 60px;
  width: 100vw;
}

.swiper-container {
  margin-left: 0px;
  margin-right: 0px;
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
