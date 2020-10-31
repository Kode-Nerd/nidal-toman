export const state = () => ({
  locales: ['en', 'de'],
  locale: 'de',

  tab: 0,
  labels: [
    'home',
    'treatments',
    'practice',
    'infoDesk',
    'drNidalToman',
    'contact',
  ],
})

export const mutations = {
  SET_TAB(state, val) {
    state.tab = val
  },
  SET_LOCALE(state, val) {
    state.locale = val
  },
}
