<template>
  <div :id="id" class="wrapper">
    <CoverPicture
      video
      :src="require('~/assets/Mental_Balance_Edited+Compressed.mp4')"
    >
      <v-row :style="logoContainer" justify="center" align="center">
        <v-img
          :style="logoStyle"
          contain
          :src="require(`~/assets/B'lance.png`)"
          height="80vh"
        >
        </v-img>
      </v-row>
      <CoverScroll target="#top-ivtherapies" />
    </CoverPicture>
    <div id="top-ivtherapies">
      <div class="section">
        <Section width="100%">
          <p class="text-h2 font-weight-bold my-12">
            {{ $t('ivtherapies.texts[0].title') }}
          </p>
          <p
            v-for="(text, index) in contentExtractor(
              $t('ivtherapies.texts[0].text')
            )"
            :key="index"
            class="text-h4 font-weight-light my-12"
            v-html="text"
          ></p>
          <div class="d-flex justify-end">
            <a
              class="text-h6 font-weight-light text-uppercase text-decoration-none"
              :style="linkStyle"
              href="https://b-lance.me"
              target="_blank"
              >{{ $t('ivtherapies.visit') }}</a
            >
          </div>
        </Section>
      </div>
      <div :style="parallaxStyle" class="parallax-section"></div>
      <div class="section" :style="lightBackground">
        <Section width="100%">
          <p class="text-h3 font-weight-bold my-12">
            {{ $t('ivtherapies.texts[1].title') }}
          </p>
          <p
            v-for="(text, index) in contentExtractor(
              $t('ivtherapies.texts[1].text')
            )"
            :key="index"
            class="text-h4 font-weight-light my-12"
            v-html="text"
          ></p>
          <div class="d-flex justify-end">
            <a
              class="text-h6 font-weight-light text-uppercase text-decoration-none"
              :style="linkStyle"
              href="https://b-lance.me"
              target="_blank"
              >{{ $t('ivtherapies.visit') }}</a
            >
          </div>
        </Section>
      </div>
      <div class="section">
        <Section right>
          <p class="text-h3 font-weight-bold my-12">
            {{ $t('ivtherapies.texts[2].title') }}
          </p>
          <p
            v-for="(text, index) in contentExtractor(
              $t('ivtherapies.texts[2].text')
            )"
            :key="index"
            class="text-h4 font-weight-light my-12"
            v-html="text"
          ></p>
          <div class="d-flex justify-end">
            <a
              class="text-h6 font-weight-light text-uppercase text-decoration-none"
              :style="linkStyle"
              href="https://b-lance.me"
              target="_blank"
              >{{ $t('ivtherapies.visit') }}</a
            >
          </div>
        </Section>
        <div class="image-left">
          <ProfilePicture
            :src="require('~/assets/images/treatments/treatment12.jpg')"
            height="90vh"
            width="60vh"
            vertical
          ></ProfilePicture>
        </div>
      </div>

      <div
        class="d-flex justify-center full-width end-page"
        :style="lightBackground"
      >
        <div class="d-flex flex-column align-center footer-comp mr-12">
          <span
            v-for="(text, index) in contentExtractor(
              $t('ivtherapies.footers[0].title')
            )"
            :key="index"
            class="text-h4 font-weight-bold text-center"
            v-html="text"
          ></span>
          <p class="text-h5 font-weight-light text-center mt-4">
            {{ $t('ivtherapies.footers[0].text') }}
          </p>
          <div class="d-flex flex-column align-center button">
            <v-btn
              elevation="2"
              :color="themes.light.primary4"
              large
              dark
              block
              :ripple="false"
              @click="goto('https://b-lance.me')"
            >
              <span>{{ $t('ivtherapies.footers[0].button') }}</span>
            </v-btn>
          </div>
        </div>
        <div class="d-flex flex-column align-center footer-comp">
          <p class="text-h4 font-weight-bold text-center">
            {{ $t('ivtherapies.footers[1].title') }}
          </p>
          <p class="text-h5 font-weight-light text-center">
            {{ $t('ivtherapies.footers[1].text') }}
          </p>
          <div class="d-flex flex-column align-center button">
            <v-btn
              elevation="2"
              :color="themes.light.primary4"
              outlined
              large
              dark
              block
              :ripple="false"
              @click="gotoContact"
            >
              <span>{{ $t('ivtherapies.footers[1].button') }}</span>
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CoverScroll from '~/components/Global/CoverScroll'
import Section from '~/components/Profile/PSection'
import ProfilePicture from '~/components/Profile/ProfilePicture'

import { contentExtractor, finalpath } from '~/helpers'

export default {
  components: {
    CoverScroll,
    Section,
    ProfilePicture,
  },
  data() {
    return {
      id: 'ivtherapies',
    }
  },
  computed: {
    locale() {
      return this.$store.state.locale
    },
    themes() {
      return this.$vuetify.theme.themes
    },
    logoContainer() {
      return {
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        top: '50%',
        left: '50%',
        width: '100vw',
        height: '100vh',
      }
    },
    logoStyle() {
      return {
        opacity: '40%',
      }
    },
    lightBackground() {
      return {
        background: this.themes.light.lightBackground,
      }
    },
    linkStyle() {
      return {
        color: this.themes.light.primary3,
      }
    },
    parallaxStyle() {
      return {
        backgroundImage: `url(${require('~/assets/images/treatments/treatment13.jpg')})`,
      }
    },
  },
  methods: {
    contentExtractor(input) {
      return contentExtractor(input)
    },
    goto(link) {
      window.open(link, '_blank')
    },
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
.wrapper {
  margin-top: -48px;
}

.section {
  position: relative;
}

.parallax-section {
  width: 100vw;
  height: 60vh;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: top;
}

.image-left {
  position: absolute;
  bottom: -7vh;
  left: 84px;
  z-index: 1;
}

.end-page {
  padding: 140px 84px;
}

.full-width {
  width: 100vw;
}

.footer-comp {
  width: 21%;
}

.button {
  width: 85%;
}
</style>
