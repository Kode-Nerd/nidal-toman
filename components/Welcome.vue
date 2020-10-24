<template>
  <div class="welcome-container">
    <div id="welcome" class="welcome-main pa-6">
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
              :style="locale === 'en' && localeActive"
              :to="
                locale === 'de'
                  ? $route.fullPath.replace(/^\/[^\/]+/, '')
                  : $route.fullPath
              "
              @click="setLanguage('en')"
              >EN</nuxt-link
            >
            <span :style="localeActive" class="mx-2">|</span>
            <nuxt-link
              :style="locale === 'de' && localeActive"
              :to="locale === 'en' ? '/de' + $route.fullPath : $route.fullPath"
              class="mr-4"
              @click="setLanguage('de')"
              >DE</nuxt-link
            >
          </v-row>
        </v-col>
        <v-col cols="6"></v-col>
      </v-row>
      <v-row class="full-height" align-content="end">
        <v-col cols="3">
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
                :color="$vuetify.theme.themes.light.primary"
                vertical
              >
                <v-tabs-slider
                  :color="$vuetify.theme.themes.light.primary3"
                ></v-tabs-slider>
                <v-tab v-for="label in labels" :key="label">{{
                  $t(label)
                }}</v-tab>
              </v-tabs>
            </v-col>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      welcomeStyle: {
        color: this.$vuetify.theme.themes.light.text,
      },
      nameStyle: {
        color: this.$vuetify.theme.themes.light.primary3,
      },
      descriptionStyle: {
        color: this.$vuetify.theme.themes.light.text,
      },
      localeActive: {
        color: this.$vuetify.theme.themes.light.primary3,
      },
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
  },
  methods: {
    setLanguage(val) {
      this.locale = val
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
  overflow-x: scroll;
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
