export const state = () => ({
  locales: ['en', 'de'],
  locale: 'en',

  tab: 0,
  labels: ['welcome', 'ivtherapies', 'procedures', 'profile', 'contact'],

  path: 'welcome',
  userAgent: '',
  ready: false,

  maxScrollDeltaSpeedBetweenSection: 70,
  currentID: '#welcome',
  fromID: '',
  sectionID: [
    '#welcome',
    // 'treatments',
    // '#practices',
    '#infoDesk',
    '#drNidalToman',
    '#contact',
  ],

  // treatment
  treatmentFigure: '',

  // treatment details
  activeTab: 'general',
  visibleTreatmentDetail: false,
})

export const mutations = {
  SET_READY(state, val) {
    state.ready = val
  },
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
  SET_PATH(state, val) {
    state.path = val
  },
  SET_USERAGENT(state, val) {
    state.userAgent = val
  },
  SET_VISIBLE_TREATMENT_DETAIL(state, val) {
    state.visibleTreatmentDetail = val
  },
}
