<template>
  <div
    :id="id"
    class="welcome-container"
    :style="welcomeContainerStyle"
    @wheel="getEvent"
  >
    <div :style="welcomeMainStyle" class="welcome-main pa-6">
      <v-row class="welcome-main-logo">
        <v-col cols="2"></v-col>
        <v-col cols="2">
          <CustomSVG
            :style="mainLogoStyle"
            :src="require('~/assets/main-logo.svg')"
            :width="this.mainLogoWidth"
            :height="this.mainLogoHeight"
            :color="themes.light.logo"
            position="top"
          >
            <div v-if="showPos">
              {{ welcomeMainLeftPos }} | {{ innerWidth }} | {{ userAgent }}
            </div>
          </CustomSVG>
        </v-col>
        <v-col :style="localeStyle" cols="2">
          <v-row justify="end">
            <Locale custom-class="mr-4" />
          </v-row>
        </v-col>
        <v-col cols="6"></v-col>
      </v-row>
      <v-row class="full-height" align-content="end">
        <TopNav
          :nav-style="[topNavStyle]"
          :slider-color="themes.light.primary3"
          :custom-slider="true"
        />
        <div :style="welcomeBannerStyle">
          <div class="d-flex flex-column">
            <span :style="welcomeStyle" class="text-h5 font-weight-bold">
              {{ $t('welcome.title1') }}
            </span>
            <CustomSVG
              class="ml-n8 mb-n6 mt-4"
              :src="require('~/assets/name.svg')"
              :width="'38rem'"
              :height="'4rem'"
              :color="themes.light.logo"
              :cover="true"
            ></CustomSVG>
            <!-- <span :style="nameStyle" class="text-h3 mt-3">
              {{ $t('welcome.title2') }}
            </span> -->
            <v-col cols="8">
              <v-row>
                <span :style="textStyle" class="text-h6 mb-8">
                  {{ $t('welcome.title3') }}
                </span>
              </v-row>
            </v-col>
            <span class="text-h6 font-weight-thin">
              {{ $t('welcome.philosophy') }}
            </span>
          </div>
        </div>
        <div :style="figure1">
          <v-img
            contain
            position="bottom right"
            :src="require('~/assets/fig_2.png')"
            width="40vh"
            height="85vh"
          ></v-img>
        </div>
        <div :style="figure2" class="d-flex flex-column align-center">
          <span :style="textStyle" class="text-h4 mb-n3 font-weight-light">
            {{ $t('welcome.infusion') }}
          </span>
          <v-img
            :style="figure2LogoStyle"
            contain
            :src="require(`~/assets/B'lance.png`)"
            width="90vh"
          ></v-img>
          <v-img
            contain
            :src="require('~/assets/fig_1.png')"
            height="60vh"
          ></v-img>
          <nuxt-link
            :style="[discoverTextStyle, figure2MoreInfoStyle]"
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
        </div>
        <div :style="figureWoman" class="d-flex flex-column align-center">
          <span
            :style="[maleFemaleStyle, womanLabel]"
            class="text-h5 font-weight-light"
          >
            {{ $t('welcome.woman') }}
          </span>
          <nuxt-link
            class="font-weight-light"
            :style="[moreInfoStyle, moreInfoWoman, discover2Style]"
            :to="finalpath('treatment') + '?figure=female'"
          >
            <div class="d-flex align-center justify-end">
              <span style="width: 130px">
                {{ $t('welcome.discover2') }}
              </span>
              <CustomSVG
                class="ml-2"
                size="1.5rem"
                :src="require('bootstrap-icons/icons/arrow-right.svg')"
                :color="themes.light.primary4"
              />
            </div>
          </nuxt-link>
          <v-img
            contain
            :src="require('~/assets/fig_3.png')"
            height="80vh"
          ></v-img>
        </div>
        <div :style="figureMan" class="d-flex flex-column align-center">
          <span
            :style="[maleFemaleStyle, manLabel]"
            class="text-h5 font-weight-light"
          >
            {{ $t('welcome.man') }}
          </span>
          <nuxt-link
            class="font-weight-light"
            :style="[moreInfoStyle, moreInfoMan, discover2Style]"
            :to="finalpath('treatment') + '?figure=male'"
          >
            <div class="d-flex align-center justify-start">
              <span style="width: 130px">
                {{ $t('welcome.discover2') }}
              </span>
              <CustomSVG
                class="ml-2"
                size="1.5rem"
                :src="require('bootstrap-icons/icons/arrow-right.svg')"
                :color="themes.light.primary4"
              />
            </div>
          </nuxt-link>
          <v-img
            contain
            :src="require('~/assets/fig_4.png')"
            height="80vh"
          ></v-img>
        </div>
        <div :style="[moreInfoStyle, secondLocaleStyle]">
          <Locale />
        </div>
        <div class="d-flex align-center" :style="[moreInfoStyle, legalStyle]">
          <SocialMedia :small="true" />
          <div class="mx-1" />
          <Legal />
        </div>
      </v-row>
    </div>
  </div>
</template>

<script>
import CustomSVG from '~/components/Global/CustomSVG'
import TopNav from '~/components/Global/TopNav'
import Locale from '~/components/Global/Locale'
import Legal from '~/components/Global/Legal'
import { finalpath } from '~/helpers'
import SocialMedia from '~/components/Global/SocialMedia'

export default {
  components: {
    TopNav,
    Locale,
    Legal,
    SocialMedia,
    CustomSVG,
  },
  data() {
    return {
      // please aware this default position in default condition of animation function
      id: 'welcome',
      timeoutID: null,
      welcomeMainLeftPos: 0,
      welcomeBannerLeftPos: 0,
      bannerOpacity: 1,
      figure1LeftPos: 0,
      figure2LeftPos: 0,
      mainLogoWidthSize: 65,
      figureWomanRightPos: 0,
      figureManRightPos: 0,
      moreInfoOpacity: 0,
      figure2MoreInfoRightPos: 45,
      atStart: true,
      atEnd: false,
      innerWidth: 0,
      showPos: false,
    }
  },
  computed: {
    userAgent: {
      set(val) {
        this.$store.commit('SET_USERAGENT', val)
      },
      get() {
        return this.$store.state.userAgent
      },
    },
    tab: {
      set(val) {
        this.$store.commit('SET_TAB', val)
      },
      get() {
        return this.$store.state.tab
      },
    },
    path: {
      set(val) {
        this.$store.commit('SET_PATH', val)
      },
      get() {
        return this.$store.state.path
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
    labels() {
      return this.$store.state.labels
    },
    sectionID() {
      return this.$store.state.sectionID
    },
    maxDelta() {
      return this.$store.state.maxScrollDeltaSpeedBetweenSection
    },
    atLeft() {
      return this.welcomeMainLeftPos === 0
    },
    atRight() {
      return this.welcomeMainLeftPos === -window.innerWidth
    },
    fromID() {
      return this.$store.state.fromID
    },
    currentID() {
      return this.$store.state.currentID
    },

    // custom-styling
    themes() {
      return this.$vuetify.theme.themes
    },
    welcomeContainerStyle() {
      return {
        background: `linear-gradient(180.17deg, rgba(254, 249, 255, 0.46) 0.14%, rgba(229, 229, 229, 0) 64.64%)`,
      }
    },
    welcomeStyle() {
      return {
        color: this.themes.light.primary,
      }
    },
    nameStyle() {
      return {
        fontFamily: 'Adamina!important',
        color: this.themes.light.primary3,
      }
    },
    textStyle() {
      return {
        color: this.themes.light.primary,
      }
    },
    maleFemaleStyle() {
      return {
        color: this.themes.light.primary3,
      }
    },
    discoverTextStyle() {
      return {
        color: this.themes.light.primary3,
      }
    },
    tabsStyle() {
      return {
        borderLeftStyle: 'solid',
        borderColor: this.themes.light.primary3,
        borderWidth: '1px',
      }
    },
    welcomeMainStyle() {
      return {
        position: 'absolute',
        left: `${this.welcomeMainLeftPos}px`,
      }
    },
    localeStyle() {
      return {
        opacity: this.bannerOpacity,
        zIndex: this.bannerOpacity === 0 ? -1 : 5,
      }
    },
    welcomeBannerStyle() {
      return {
        width: '30%',
        position: 'absolute',
        left: `${24 + this.welcomeBannerLeftPos}px`,
        bottom: '22%',
        opacity: this.bannerOpacity,
      }
    },
    leftMainLogoPos() {
      return `calc(50vw - ${this.mainLogoWidthSize / 2}vh + ${
        this.welcomeBannerLeftPos
      }px)`
    },
    mainLogoStyle() {
      return {
        position: 'absolute',
        left: this.leftMainLogoPos,
        top: '24px',
      }
    },
    discover2Style() {
      return {
        color: this.themes.light.primary4,
        width: '30%',
      }
    },
    figure1() {
      return {
        position: 'absolute',
        bottom: '0px',
        right: `${100 - this.figure1LeftPos}vw`,
      }
    },
    figure2() {
      return {
        width: '100vh',
        position: 'absolute',
        bottom: '5vh',
        left: `${this.figure2LeftPos + 200}vw`,
      }
    },
    figure2MoreInfoStyle() {
      return {
        position: 'absolute',
        bottom: '2%',
        right: `${this.figure2MoreInfoRightPos}%`,
      }
    },
    figure2LogoStyle() {
      return {
        position: 'absolute',
        bottom: '7%',
        right: `calc(50vh - 45vh)`,
        // right: `${this.figure2MoreInfoRightPos - 3}%`,
        opacity: '70%',
      }
    },
    figureWoman() {
      return {
        width: '50vw',
        position: 'absolute',
        bottom: '0vh',
        right: `${this.figureWomanRightPos}px`,
      }
    },
    figureMan() {
      return {
        width: '50vw',
        position: 'absolute',
        bottom: '18vh',
        right: `${this.figureManRightPos}px`,
      }
    },
    moreInfoStyle() {
      return {
        opacity: this.moreInfoOpacity,
      }
    },
    womanLabel() {
      return {
        position: 'absolute',
        top: '5%',
        left: '46%',
      }
    },
    moreInfoWoman() {
      return {
        position: 'absolute',
        top: '20%',
        right: '15%',
        zIndex: 1,
      }
    },
    manLabel() {
      return {
        position: 'absolute',
        top: '12%',
        right: '48%',
      }
    },
    moreInfoMan() {
      return {
        position: 'absolute',
        top: '35%',
        left: '15%',
        zIndex: 1,
      }
    },
    topNavStyle() {
      return {
        position: 'absolute',
        top: '0px',
        left: `${this.welcomeBannerLeftPos}px`,
      }
    },
    legalStyle() {
      return {
        position: 'absolute',
        bottom: '24px',
        right: '36px',
        zIndex: 2,
      }
    },
    secondLocaleStyle() {
      return {
        position: 'absolute',
        top: '24px',
        right: '36px',
        zIndex: 5,
      }
    },
    mainLogoWidth() {
      return `${this.mainLogoWidthSize}vh`
    },
    mainLogoHeight() {
      return `${0.4 * this.mainLogoWidthSize}vh`
    },
  },
  watch: {
    currentID(val) {
      const fromIndex = this.sectionID.indexOf(this.fromID)
      const currentIndex = this.sectionID.indexOf(val)

      if (this.fromID !== `#${this.id}`) {
        if (fromIndex < currentIndex) {
          this.welcomeMainLeftPos = 0
        }
        if (fromIndex > currentIndex) {
          this.welcomeMainLeftPos = -window.innerWidth
        }
      }
    },
    welcomeMainLeftPos(val) {
      if (val <= -window.innerWidth) {
        const proceduresIndex = this.labels.indexOf('procedures')
        this.tab = proceduresIndex
        this.path = 'procedures'
      }
      if (val >= 0) {
        const welcomeIndex = this.labels.indexOf('welcome')
        this.tab = welcomeIndex
        this.path = 'welcome'
      }
    },
    path(val, old) {
      if (old === undefined) {
        return
      }
      const innerWidth = window.innerWidth
      let deltaY = 0
      const delta = 5 * innerWidth
      if (val === 'welcome') {
        deltaY = -delta
      }
      if (val === 'procedures') {
        deltaY = delta
      }
      this.animateAll(0, deltaY)
    },
    '$route.query': {
      handler(val, old) {
        if (!old) {
          return
        }

        const innerWidth = window.innerWidth
        let deltaY = 5 * innerWidth

        if (val.id !== 'procedures') {
          deltaY = -deltaY
        }

        this.animateAll(0, deltaY)
      },
      deep: true,
      immediate: true,
    },
  },
  mounted() {
    if (this.$route.query.pos === 'true') {
      this.showPos = true
    }
    const innerWidth = window.innerWidth
    this.innerWidth = innerWidth
    let deltaY = 0

    if (this.$route.query && this.$route.query.id === 'procedures') {
      deltaY = 5 * innerWidth
    }

    this.animateAll(0, deltaY)
  },
  methods: {
    getEvent(e) {
      e.preventDefault()
      e.stopPropagation()

      this.checkEdgeSection()

      this.animateAll(e.deltaX, e.deltaY)

      // this.jumpSection(e.deltaX, e.deltaY)
    },
    finalpath(path) {
      return finalpath(this.locale, path)
    },
    animateAll(deltaX, deltaY) {
      this.animateMainContainer(deltaX, deltaY)
      this.animateWelcomeBanner(deltaX, deltaY)
      this.animateFigureOne(deltaX, deltaY)
      this.animateFigureTwo(deltaX, deltaY)
      this.animateFigureWoman(deltaX, deltaY)
      this.animateFigureMan(deltaX, deltaY)
    },
    checkEdgeSection() {
      if (this.atLeft) {
        if (this.timeoutID === null) {
          this.timeoutID = setTimeout(() => {
            this.atStart = true
          }, 1000)
        }
      } else if (this.atRight) {
        if (this.timeoutID === null) {
          this.timeoutID = setTimeout(() => {
            this.atEnd = true
          }, 1000)
        }
      } else {
        if (this.timeoutID !== null) {
          clearTimeout(this.timeoutID)
          this.timeoutID = null
        }

        this.atStart = false
        this.atEnd = false
      }
    },
    jumpSection(deltaX, deltaY) {
      const prevSection = this.sectionID.find(
        (id, index) => this.sectionID[index + 1] === '#' + this.id
      )
      const nextSection = this.sectionID.find(
        (id, index) => this.sectionID[index - 1] === '#' + this.id
      )

      // executing next / prev section
      if (this.atStart || this.atEnd) {
        const options = {
          duration: 1000,
          offset: 0,
          easing: 'easeInOutQuint',
        }
        let target

        if (deltaY < -this.maxDelta && this.atStart && prevSection) {
          target = prevSection

          this.$vuetify.goTo(target, options)
        }
        if (deltaY > this.maxDelta && this.atEnd && nextSection) {
          target = nextSection

          this.$vuetify.goTo(target, options)
        }

        if (target) {
          this.$store.commit('SET_FROM_ID', `#${this.id}`)
          this.$store.commit('SET_CURRENT_ID', target)
        }
      }
    },

    animateMainContainer(deltaX, deltaY) {
      let leftPos = this.welcomeMainLeftPos
      if (leftPos <= 0 && leftPos >= -window.innerWidth) {
        this.welcomeMainLeftPos -= deltaY / 5

        // to avoid offset set by wheel event
        leftPos = this.welcomeMainLeftPos
        if (leftPos >= 0) {
          this.welcomeMainLeftPos = 0
        }
        if (leftPos <= -window.innerWidth) {
          this.welcomeMainLeftPos = -window.innerWidth
        }
      }
    },
    animateWelcomeBanner(deltaX, deltaY) {
      const leftPosMain = this.welcomeMainLeftPos
      if (leftPosMain <= 0 && leftPosMain >= -window.innerWidth) {
        this.welcomeBannerLeftPos += deltaY / 5
      }

      // to avoid offset set by wheel event
      if (leftPosMain >= 0) {
        this.welcomeBannerLeftPos = 0
      }
      if (leftPosMain <= -window.innerWidth) {
        this.welcomeBannerLeftPos = window.innerWidth
      }

      // animating opacity
      if (
        leftPosMain <= -window.innerWidth / 12 &&
        leftPosMain >= -window.innerWidth / 6
      ) {
        this.bannerOpacity -= (deltaY / (5 * window.innerWidth)) * 12
      }
      if (leftPosMain >= -window.innerWidth / 12) {
        this.bannerOpacity = 1
      }
      if (leftPosMain <= -window.innerWidth / 6) {
        this.bannerOpacity = 0
      }
    },
    animateFigureOne(deltaX, deltaY) {
      const leftPosMain = this.welcomeMainLeftPos
      if (leftPosMain <= 0 && leftPosMain > -window.innerWidth) {
        this.figure1LeftPos -= deltaY / 60
      }

      // to avoid offset set by wheel event
      if (leftPosMain >= 0) {
        this.figure1LeftPos = 0
      }
      if (leftPosMain <= -window.innerWidth) {
        this.figure1LeftPos = -119
      }
    },
    animateFigureTwo(deltaX, deltaY) {
      const leftPosMain = this.welcomeMainLeftPos
      if (leftPosMain <= 0 && leftPosMain > -window.innerWidth) {
        this.figure2LeftPos -= deltaY / 30
      }

      // to animate "Discover More"
      if (leftPosMain <= 0 && leftPosMain >= (-window.innerWidth / 3) * 2) {
        this.figure2MoreInfoRightPos -= deltaY / 100
      }

      // to avoid offset set by wheel event
      if (leftPosMain >= 0) {
        this.figure2LeftPos = 0
        this.figure2MoreInfoRightPos = 45
      }
      if (leftPosMain <= -window.innerWidth) {
        this.figure2LeftPos = -237
        this.figure2MoreInfoRightPos = -2.5
      }
    },

    animateFigureWoman(deltaX, deltaY) {
      const leftPosMain = this.welcomeMainLeftPos
      if (
        leftPosMain <= -window.innerWidth / 2 &&
        leftPosMain >= -window.innerWidth
      ) {
        this.figureWomanRightPos += deltaY / 5
      }

      // to avoid offset set by wheel event
      if (leftPosMain >= -window.innerWidth / 2) {
        this.figureWomanRightPos = 0
      }
      if (leftPosMain <= -window.innerWidth) {
        this.figureWomanRightPos = window.innerWidth / 2
      }

      // animating opacity
      if (
        leftPosMain <= (-window.innerWidth / 12) * 11 &&
        leftPosMain >= -window.innerWidth
      ) {
        this.moreInfoOpacity += (deltaY / (5 * window.innerWidth)) * 12
      }
      if (leftPosMain >= (-window.innerWidth / 12) * 11) {
        this.moreInfoOpacity = 0
      }
      if (leftPosMain <= -window.innerWidth) {
        this.moreInfoOpacity = 1
      }
    },
    animateFigureMan(deltaX, deltaY) {
      const leftPosMain = this.welcomeMainLeftPos
      if (leftPosMain >= 0) {
        this.figureManRightPos = 0
      }
    },
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
}
.welcome-container {
  width: 100%;
  height: 100vh;
  position: relative;
}
.welcome-main {
  width: 200%;
  height: 100%;
}
.welcome-main-logo {
  height: 0%;
}
.full-height {
  height: 100%;
}
.full-width {
  width: 100%;
}
</style>
