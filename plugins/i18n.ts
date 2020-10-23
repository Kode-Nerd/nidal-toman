import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, store }) => {
  // Set i18n instance on app
  app.i18n = new VueI18n({
    locale: 'de',
    fallbackLocale: 'de',
    messages: {
      en: require(`~/assets/locales/en/treatment.json`),
      de: require(`~/assets/locales/de/treatment.json`),
    },
  })
}
