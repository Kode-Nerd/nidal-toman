<template>
  <div class="footer__container">
    <div class="footer__row">
      <!-- <div>
        <div class="footer__title">Dr. Nidal Toman</div>
        <div class="footer__subtitle">Plasticher Chirurg</div>
      </div> -->
      <CustomSVG
        class="ml-n8 mt-n8"
        :src="require('~/assets/main-logo.svg')"
        :width="this.mainLogoWidth"
        :height="this.mainLogoHeight"
        :color="themes.light.background"
        position="left"
      ></CustomSVG>
      <div v-if="!isOnContactPage" class="button" @click="gotoContact">
        Contact Us <img :src="ArrowIcon" />
      </div>
    </div>
    <div class="footer__row">
      <SocialMedia :icon-color="themes.light.background" />
    </div>
    <div class="footer__row">
      <div class="flex__container">
        <div class="copyright">Dr. Nidal Toman - {{ latestYear }}</div>
        <Legal class="ml-3" :dark-style="true" />
      </div>
      <div class="flex__container">
        <div class="detail__item">
          <img :src="PlaceIcon" height="24" />
          <div class="divider" />
          <div>Uhlandstrasse 33 10719 Berlin</div>
        </div>
        <div class="detail__item">
          <img :src="MailIcon" height="24" />
          <div class="divider" />
          <div>info@nidal-toman.de</div>
        </div>
        <div class="detail__item">
          <img :src="CallIcon" height="24" />
          <div class="divider" />
          <div>(+49) 030 21 300 8000</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowIcon from '~/assets/icons/arrow.svg'
import MailIcon from '~/assets/icons/mail-outline.svg'
import PlaceIcon from '~/assets/icons/place-outline.svg'
import CallIcon from '~/assets/icons/call-outline.svg'
// import Locale from '~/components/Global/Locale'
import Legal from '~/components/Global/Legal'
import SocialMedia from '~/components/Global/SocialMedia'
import CustomSVG from '~/components/Global/CustomSVG'
import { finalpath } from '~/helpers'

export default {
  components: {
    // Locale,
    Legal,
    SocialMedia,
    CustomSVG,
  },
  data() {
    return {
      ArrowIcon,
      MailIcon,
      PlaceIcon,
      CallIcon,
      mainLogoWidthSize: 30,
    }
  },
  computed: {
    locale: {
      set(val) {
        this.$store.commit('SET_LOCALE', val)
      },
      get() {
        return this.$store.state.locale
      },
    },
    themes() {
      return this.$vuetify.theme.themes
    },
    isOnContactPage() {
      return /\/contact/.test(this.$route.fullPath)
    },
    latestYear() {
      return new Date().getFullYear()
    },
    mainLogoWidth() {
      return `${this.mainLogoWidthSize}vh`
    },
    mainLogoHeight() {
      return `${0.6 * this.mainLogoWidthSize}vh`
    },
  },
  methods: {
    gotoContact() {
      this.$router.push({
        path: finalpath(this.locale, 'contact'),
        hash: '#contact-form',
      })
    },
  },
}
</script>

<style scoped>
.footer__container {
  background: #363636;
  padding: 50px 100px;
}

.footer__row {
  /* max-width: 1200px; */
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.footer__title {
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  color: #ffffff;
}

.footer__subtitle {
  font-weight: 300;
  font-size: 14px;
  line-height: 19px;

  color: #ffffff;
}

.button {
  max-height: 46px;
  border-radius: 2px;
  border: 1px solid #fff;
  padding: 10px 25px;

  display: flex;
  align-items: center;
  color: #fff;
  cursor: pointer;
}

.copyright {
  color: #c0c0c0;
}

.button:hover {
  box-shadow: 1px 1px 15px 0px #8e8e8e;
  transition: 0.5s;
}

.button img {
  margin-left: 10px;
}

.footer__row:last-child {
  margin-top: 45px;
}

.flex__container {
  display: flex;
}

.detail__item {
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.detail__item:not(:first-child) {
  margin-left: 32px;
}

.divider {
  height: 18px;
  width: 2px;
  background: #fff;
  margin: 0px 10px;
}
</style>
