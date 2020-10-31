<template>
  <div class="welcome-container" @wheel="getEvent">
    <div id="welcome" :style="welcomeMainStyle" class="welcome-main pa-6">
      <v-row class="welcome-main-logo">
        <v-col cols="2"></v-col>
        <v-col cols="2">
          <v-img
            contain
            :src="require('~/assets/main-logo.png')"
            max-height="120"
          ></v-img>
        </v-col>
        <v-col cols="2">
          <v-row justify="end">
            <nuxt-link
              :style="locale === 'de' && localeActive"
              :to="
                locale === 'en'
                  ? $route.fullPath.replace(/^\/[^\/]+/, '')
                  : $route.fullPath
              "
              @click="setLanguage('de')"
              >DE</nuxt-link
            >
            <span :style="localeActive" class="mx-2">|</span>
            <nuxt-link
              :style="locale === 'en' && localeActive"
              :to="locale === 'de' ? '/en' + $route.fullPath : $route.fullPath"
              class="mr-4"
              @click="setLanguage('en')"
              >EN</nuxt-link
            >
          </v-row>
        </v-col>
        <v-col cols="6"></v-col>
      </v-row>
      <v-row class="full-height" align-content="end">
        <div :style="welcomeBannerStyle">
          <div class="d-flex flex-column">
            <span :style="welcomeStyle" class="text-h5 font-weight-medium">
              {{ $t('title1') }}
            </span>
            <span :style="nameStyle" class="text-h3 font-weight-bold">
              {{ $t('title2') }}
            </span>
            <span :style="descriptionStyle" class="text-h6 mb-10">
              {{ $t('title3') }}
            </span>
            <v-col cols="4">
              <v-tabs
                v-model="tab"
                background-color="transparent"
                :color="themes.light.primary"
                vertical
              >
                <v-tabs-slider :color="themes.light.primary3"></v-tabs-slider>
                <v-tab v-for="label in labels" :key="label">{{
                  $t(label)
                }}</v-tab>
              </v-tabs>
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
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      welcomeMainLeftPos: 0,
      welcomeBannerLeftPos: 0,
      bannerOpacity: 1,
      figure1LeftPos: 0,
    }
  },
  computed: {
    tab: {
      set(val) {
        this.$store.commit('SET_TAB', val)
      },
      get() {
        return this.$store.state.tab
      },
    },
    labels() {
      return this.$store.state.labels
    },
    locale: {
      set(val) {
        this.$store.commit('SET_LOCALE', val)
      },
      get() {
        return this.$store.state.locale
      },
    },

    // custom-styling
    themes() {
      return this.$vuetify.theme.themes
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
    descriptionStyle() {
      return {
        color: this.themes.light.text,
      }
    },
    localeActive() {
      return {
        color: this.themes.light.primary3,
      }
    },
    welcomeMainStyle() {
      return {
        position: 'absolute',
        left: `${this.welcomeMainLeftPos}px`,
      }
    },
    welcomeBannerStyle() {
      return {
        width: '25%',
        position: 'absolute',
        left: `${24 + this.welcomeBannerLeftPos}px`,
        bottom: '36px',
        opacity: this.bannerOpacity,
      }
    },
    figure1() {
      return {
        width: '100vh',
        position: 'absolute',
        bottom: '0px',
        left: `${this.figure1LeftPos + 65}vw`,
      }
    },
  },
  methods: {
    setLanguage(val) {
      this.locale = val
    },
    getEvent(e) {
      e.preventDefault()
      e.stopPropagation()

      this.animateMainContainer(e.deltaX, e.deltaY)
      this.animateWelcomeBanner(e.deltaX, e.deltaY)
      this.animateFigureOne(e.deltaX, e.deltaY)
    },
    animateMainContainer(deltaX, deltaY) {
      let leftPos = this.welcomeMainLeftPos
      if (leftPos <= 0 && leftPos > -window.innerWidth) {
        this.welcomeMainLeftPos -= deltaY / 5

        // to avoid offset set by wheel event
        leftPos = this.welcomeMainLeftPos
        if (leftPos > 0) {
          this.welcomeMainLeftPos = 0
        }
        if (leftPos <= -window.innerWidth) {
          this.welcomeMainLeftPos = -window.innerWidth + 1
        }
      }
    },
    animateWelcomeBanner(deltaX, deltaY) {
      let leftPosMain = this.welcomeMainLeftPos
      if (leftPosMain <= 0 && leftPosMain > -window.innerWidth) {
        this.welcomeBannerLeftPos += deltaY / 5
      }

      // to avoid offset set by wheel event
      leftPosMain = this.welcomeMainLeftPos
      if (leftPosMain >= 0) {
        this.welcomeBannerLeftPos = 0
      }
      if (leftPosMain <= -window.innerWidth + 1) {
        this.welcomeBannerLeftPos = window.innerWidth - 1
      }

      // animating obacity
      if (
        leftPosMain <= -window.innerWidth / 6 &&
        leftPosMain > -window.innerWidth
      ) {
        this.bannerOpacity -= (deltaY / (5 * window.innerWidth)) * 4
      }
      if (this.bannerOpacity < 0) {
        this.bannerOpacity = 0
      }
      if (this.bannerOpacity >= 0.9 && deltaY < 0) {
        this.bannerOpacity = 1
      }
    },
    animateFigureOne(deltaX, deltaY) {
      let leftPosMain = this.welcomeMainLeftPos
      if (leftPosMain <= 0 && leftPosMain > -window.innerWidth + 1) {
        this.figure1LeftPos -= deltaY / 200
      }

      // to avoid offset set by wheel event
      leftPosMain = this.welcomeMainLeftPos
      if (leftPosMain >= 0) {
        this.figure1LeftPos = 0
      }
    },
  },
}
</script>

<style>
a {
  text-decoration: none;
}
.welcome-container {
  width: 100%;
  height: 100vh;
  position: relative;
  /* overflow-x: scroll; */
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
