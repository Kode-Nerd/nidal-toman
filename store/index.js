export const state = () => ({
  locales: ['en', 'de'],
  locale: 'de',

  tab: 0,
  labels: ['treatments', 'practice', 'infoDesk', 'profile', 'contact'],

  maxScrollDeltaSpeedBetweenSection: 70,
  currentID: '#welcome',
  fromID: '',
  sectionID: [
    '#welcome',
    // 'treatments',
    '#practices',
    '#infoDesk',
    '#drNidalToman',
    '#contact',
  ],

  // treatment details
  activeTab: 'general',
})

export const mutations = {
  SET_TAB(state, val) {
    state.tab = val
  },
  SET_LOCALE(state, val) {
    state.locale = val
  },
  SET_ACTIVE_TAB_TREATMENT_DETAIL(state, { activeTab }) {
    state.activeTab = activeTab
  },
  SET_CURRENT_ID(state, val) {
    state.currentID = val
  },
  SET_FROM_ID(state, val) {
    state.fromID = val
  },
}
