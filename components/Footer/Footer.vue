<template>
  <div class="footer__container">
    <div class="footer__row">
      <div>
        <div class="footer__title">Dr. Nidal Toman</div>
        <div class="footer__subtitle">Plasticher Chirurg</div>
      </div>

      <div v-if="!isOnContactPage" class="button" @click="gotoContact">
        Contact Us <img :src="ArrowIcon" />
      </div>
    </div>

    <div class="footer__row">
      <div class="copyright">Dr. Nidal Toman</div>
      <Locale :dark-style="true" />
      <div class="detail__container">
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
import Locale from '~/components/global/Locale'

export default {
  components: {
    Locale,
  },
  data() {
    return {
      ArrowIcon,
      MailIcon,
      PlaceIcon,
      CallIcon,
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
  },
  methods: {
    gotoContact() {
      this.$router.push({ path: 'contact', hash: '#contact-form' })
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
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
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

.detail__container {
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
