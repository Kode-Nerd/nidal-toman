<template>
  <MobileView>
    <div class="d-flex justify-space-between header">
      <SocialMedia small />
      <Locale is-mobile />
    </div>
    <MobileView class="justify-space-between align-center section">
      <MobileView class="align-center mb-4">
        <CustomSVG
          :src="require('~/assets/main-logo.svg')"
          :width="mainLogoWidth"
          :height="mainLogoHeight"
          :color="themes.light.primary3"
          cover
        ></CustomSVG>
        <span
          :style="{ color: themes.light.lightPrimary3 }"
          class="font-weight-medium text-center text-uppercase"
        >
          {{ $t('welcome.title') }}
        </span>
      </MobileView>
      <v-img
        contain
        position="center"
        :src="require('~/assets/fig_2.png')"
        width="32vh"
        height="68vh"
      ></v-img>
    </MobileView>
    <MobileView
      :style="lightBackground"
      class="justify-center align-center section"
    >
      <span class="text-h6">
        {{ $t('welcome.philosophy') }}
      </span>
    </MobileView>
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
      <v-img contain :src="require('~/assets/fig_1.png')" width="25vh"></v-img>
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
    <MobileView
      :style="lightBackground"
      class="justify-center align-center section"
    >
      <nuxt-link
        :style="[{ color: themes.light.primary3 }]"
        :to="finalpath('procedures')"
      >
        <div class="d-flex align-center">
          <span>
            {{ $t('welcome.procedure') }}
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
  </MobileView>
</template>

<script>
import MobileView from '~/components/Mobile/View'
import CustomSVG from '~/components/Global/CustomSVG'
import SocialMedia from '~/components/Global/SocialMedia'
import Locale from '~/components/Global/Locale'

import { finalpath } from '~/helpers'

export default {
  components: {
    MobileView,
    CustomSVG,
    SocialMedia,
    Locale,
  },
  data() {
    return {
      mainLogoWidthSize: 30,
      locales: ['en', 'de'],
    }
  },
  computed: {
    locale: {
      get() {
        return this.$store.state.locale
      },
      set(val) {
        this.$store.commit('SET_LOCALE', val)
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
.header {
  padding: 10px;
}
.section {
  padding: 10vh 10vw;
  min-height: 100vh;
}
.section.infusion {
  position: relative;
}
</style>
