export const state = () => ({
  locales: ['en', 'de'],
  locale: 'de',

  tab: 0,
  labels: ['Welcome', 'Treatments', 'Info Desk', 'Dr. Nidal Toman', 'Contact'],
})

export const mutations = {
  SET_TAB(state, val) {
    state.tab = val
  },
  SET_LOCALE(state, val) {
    state.locale = val
  },
}
