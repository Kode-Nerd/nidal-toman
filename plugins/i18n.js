import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, store }) => {
  // Set i18n instance on app
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'de',
    messages: {
      en: {
        ...require(`~/assets/locales/en/welcome.json`),
        ...require(`~/assets/locales/en/treatment.json`),
        ...require(`~/assets/locales/en/practice.json`),
        profile: { ...require('~/assets/locales/en/profile.json') },
      },
      de: {
        ...require(`~/assets/locales/de/welcome.json`),
        ...require(`~/assets/locales/de/treatment.json`),
        ...require(`~/assets/locales/de/practice.json`),
        profile: { ...require('~/assets/locales/de/profile.json') },
      },
    },
  })
}
