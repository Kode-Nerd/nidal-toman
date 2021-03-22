<template>
  <MobileView>
    <MobileView class="section">
      <p class="text-h6 font-weight-bold mt-16">
        {{ $t('ivtherapies.texts[0].title') }}
      </p>
      <p
        v-for="(text, index) in contentExtractor(
          $t('ivtherapies.texts[0].text')
        )"
        :key="index"
        class="font-weight-light my-4"
        v-html="text"
      ></p>
      <div class="d-flex justify-end">
        <a
          class="text-subtitle-1 font-weight-light text-uppercase text-decoration-none"
          :style="{ color: themes.light.primary3 }"
          href="https://b-lance.me"
          target="_blank"
          >{{ $t('ivtherapies.visit') }}</a
        >
      </div>
    </MobileView>
    <v-img
      position="top center"
      :src="require('~/assets/images/treatments/treatment13.jpg')"
      width="100vw"
      height="100vw"
    ></v-img>
    <MobileView class="section">
      <p class="text-h6 font-weight-bold">
        {{ $t('ivtherapies.texts[1].title') }}
      </p>
      <p
        v-for="(text, index) in contentExtractor(
          $t('ivtherapies.texts[1].text')
        )"
        :key="index"
        class="font-weight-light my-4"
        v-html="text"
      ></p>
      <div class="d-flex justify-end">
        <a
          class="text-subtitle-1 font-weight-light text-uppercase text-decoration-none"
          :style="{ color: themes.light.primary3 }"
          href="https://b-lance.me"
          target="_blank"
          >{{ $t('ivtherapies.visit') }}</a
        >
      </div>
    </MobileView>
    <MobileView class="post">
      <p class="text-h6 font-weight-bold">
        {{ $t('ivtherapies.texts[2].title') }}
      </p>
    </MobileView>
    <v-img
      contain
      position="top center"
      :src="require('~/assets/images/treatments/treatment12.jpg')"
      width="100vw"
    ></v-img>
    <MobileView class="post content">
      <p
        v-for="(text, index) in contentExtractor(
          $t('ivtherapies.texts[2].text')
        )"
        :key="index"
        class="font-weight-light my-4"
        v-html="text"
      ></p>
      <div class="d-flex justify-end">
        <a
          class="text-subtitle-1 font-weight-light text-uppercase text-decoration-none"
          :style="{ color: themes.light.primary3 }"
          href="https://b-lance.me"
          target="_blank"
          >{{ $t('ivtherapies.visit') }}</a
        >
      </div>
    </MobileView>
  </MobileView>
</template>

<script>
import MobileView from '~/components/Mobile/View'

import { contentExtractor, finalpath } from '~/helpers'

export default {
  components: {
    MobileView,
  },
  data() {
    return {
      mainLogoWidthSize: '30vh',
    }
  },
  computed: {
    themes() {
      return this.$vuetify.theme.themes
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
        path: finalpath(this.locale, 'contact'.true),
        hash: '#contact-form',
      })
    },
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
}
.section {
  padding: 10vh 10vw;
}
.post {
  padding: 10px 5vw;
}
.post.content {
  padding: 10px 10vw 10vh 10vw;
}
</style>
