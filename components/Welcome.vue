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
          <v-img
            contain
            :src="require('~/assets/main-logo.png')"
            max-width="20vw"
            :style="mainLogoStyle"
          ></v-img>
        </v-col>
        <v-col :style="localeStyle" cols="2">
          <v-row justify="end">
            <Locale custom-class="mr-4" />
          </v-row>
        </v-col>
        <v-col cols="6"></v-col>
      </v-row>
      <v-row class="full-height" align-content="end">
        <TopNav :nav-style="[topNavStyle, moreInfoStyle]" />
        <div :style="welcomeBannerStyle">
          <div class="d-flex flex-column">
            <span :style="welcomeStyle" class="text-h5 font-weight-medium">
              {{ $t('welcome.title1') }}
            </span>
            <span :style="nameStyle" class="text-h3 font-weight-bold">
              {{ $t('welcome.title2') }}
            </span>
            <span :style="textStyle" class="text-h6 mb-10">
              {{ $t('welcome.title3') }}
            </span>
            <v-col cols="6">
              <TopNav
                :nav-style="[tabsStyle]"
                :vertical="true"
                :custom-slider="true"
                :slider-color="themes.light.primary3"
                tab-justify="left"
              />
            </v-col>
          </div>
        </div>
        <div :style="figure1">
          <v-img
            contain
            :src="require('~/assets/_asset3.png')"
            max-height="100vh"
          ></v-img>
        </div>
        <div :style="figure2" class="d-flex flex-column align-center">
          <span :style="textStyle" class="text-h6 mb-n10">
            {{ $t('welcome.infusion') }}
          </span>
          <v-img
            :style="figure2LogoStyle"
            contain
            :src="require(`~/assets/_B'lance.png`)"
            height="80%"
            width="160%"
          ></v-img>
          <v-img
            contain
            :src="require('~/assets/_asset1.png')"
            max-height="65vh"
          ></v-img>
          <nuxt-link :style="[discoverTextStyle, figure2MoreInfoStyle]" to="#"
            >{{ $t('welcome.discover') }}
            <v-icon class="ml-2" :color="themes.light.primary3" medium
              >fas fa-long-arrow-alt-right</v-icon
            >
          </nuxt-link>
        </div>
        <div :style="figureWoman" class="d-flex flex-column align-center">
          <span :style="[discoverTextStyle, womanLabel]" class="text-h6">
            {{ $t('welcome.woman') }}
          </span>
          <nuxt-link
            :style="[textStyle, moreInfoStyle, moreInfoWoman, discover2Style]"
            to="#"
            >{{ $t('welcome.discover2') }}
            <v-icon class="ml-2" :color="themes.light.text" medium
              >fas fa-long-arrow-alt-right</v-icon
            >
          </nuxt-link>
          <v-img
            contain
            :src="require('~/assets/_asset2.png')"
            max-height="80vh"
          ></v-img>
        </div>
        <div :style="figureMan" class="d-flex flex-column align-center">
          <span :style="[discoverTextStyle, manLabel]" class="text-h6">
            {{ $t('welcome.man') }}
          </span>
          <nuxt-link
            :style="[textStyle, moreInfoStyle, moreInfoMan, discover2Style]"
            to="#"
            >{{ $t('welcome.discover2') }}
            <v-icon class="ml-2" :color="themes.light.text" medium
              >fas fa-long-arrow-alt-right</v-icon
            >
          </nuxt-link>
          <v-img
            contain
            :src="require('~/assets/_asset4.png')"
            max-height="80vh"
          ></v-img>
        </div>
      </v-row>
    </div>
  </div>
</template>

<script>
import TopNav from '~/components/global/TopNav'
import Locale from '~/components/global/Locale'

export default {
  components: {
    TopNav,
    Locale,
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
      figureWomanRightPos: 0,
      figureManRightPos: 0,
      moreInfoOpacity: 0,
      figure2MoreInfoRightPos: 45,
      atStart: true,
      atEnd: false,
    }
  },
  computed: {
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
        color: this.themes.light.text,
      }
    },
    nameStyle() {
      return {
        color: this.themes.light.primary3,
      }
    },
    textStyle() {
      return {
        color: this.themes.light.text,
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
        zIndex: this.bannerOpacity === 0 ? -1 : 6,
      }
    },
    welcomeBannerStyle() {
      return {
        width: '20%',
        position: 'absolute',
        left: `${24 + this.welcomeBannerLeftPos}px`,
        bottom: '36px',
        opacity: this.bannerOpacity,
      }
    },
    leftMainLogoPos() {
      return `calc(50vw - 10vw + ${this.welcomeBannerLeftPos}px)`
    },
    mainLogoStyle() {
      return {
        position: 'absolute',
        left: this.leftMainLogoPos,
        top: '72px',
      }
    },
    discover2Style() {
      return {
        width: '30%',
      }
    },
    figure1() {
      return {
        width: '100vh',
        position: 'absolute',
        bottom: '0px',
        left: `${this.figure1LeftPos + 62}vw`,
      }
    },
    figure2() {
      return {
        width: '100vh',
        position: 'absolute',
        bottom: '5vh',
        left: `${this.figure2LeftPos + 110}vw`,
      }
    },
    figure2MoreInfoStyle() {
      return {
        position: 'absolute',
        bottom: '0%',
        right: `${this.figure2MoreInfoRightPos + 10}%`,
      }
    },
    figure2LogoStyle() {
      return {
        position: 'absolute',
        bottom: '7%',
        right: `${this.figure2MoreInfoRightPos - 10}%`,
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
        left: '42%',
      }
    },
    moreInfoWoman() {
      return {
        position: 'absolute',
        top: '15%',
        right: '16%',
        zIndex: 1,
      }
    },
    manLabel() {
      return {
        position: 'absolute',
        top: '15%',
        left: '38%',
      }
    },
    moreInfoMan() {
      return {
        position: 'absolute',
        top: '35%',
        left: '10%',
        zIndex: 1,
      }
    },
    topNavStyle() {
      return {
        position: 'absolute',
        top: '10px',
        left: `${this.welcomeBannerLeftPos}px`,
        zIndex: this.moreInfoOpacity === 0 ? -1 : 1,
      }
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
  },
  methods: {
    getEvent(e) {
      e.preventDefault()
      e.stopPropagation()

      this.checkEdgeSection()

      this.animateMainContainer(e.deltaX, e.deltaY)
      this.animateWelcomeBanner(e.deltaX, e.deltaY)
      this.animateFigureOne(e.deltaX, e.deltaY)
      this.animateFigureTwo(e.deltaX, e.deltaY)
      this.animateFigureWoman(e.deltaX, e.deltaY)
      this.animateFigureMan(e.deltaX, e.deltaY)

      // this.jumpSection(e.deltaX, e.deltaY)
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
        this.figure2LeftPos -= deltaY / 110
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
        this.figure2LeftPos = -65.5
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
