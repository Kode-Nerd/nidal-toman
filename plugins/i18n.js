import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, store }) => {
  // Set i18n instance on app
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'en',
    messages: {
      en: {
        nav: { ...require('~/assets/locales/en/nav.json') },
        welcome: { ...require(`~/assets/locales/en/welcome.json`) },
        treatments: { ...require(`~/assets/locales/en/treatment.json`) },
        practice: { ...require(`~/assets/locales/en/practice.json`) },
        profile: { ...require('~/assets/locales/en/profile.json') },
      },
      de: {
        nav: { ...require('~/assets/locales/de/nav.json') },
        welcome: { ...require(`~/assets/locales/de/welcome.json`) },
        treatments: { ...require(`~/assets/locales/de/treatment.json`) },
        practice: { ...require(`~/assets/locales/de/practice.json`) },
        profile: { ...require('~/assets/locales/de/profile.json') },
      },
    },
  })
}
