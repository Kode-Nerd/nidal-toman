<template>
  <div class="d-flex align-stretch detail-container">
    <div
      class="treat-detail-container"
      :class="{ closed: showingList }"
      :style="lightBackground"
    >
      <div v-if="!showingList" class="d-flex flex-column full-height">
        <div class="treat-detail__button-container">
          <img :src="icons.closeIcon" alt="close" @click="closeDetail" />
        </div>
        <div class="treat-detail__title d-flex flex-column align-start">
          <span>
            {{ $t(`treatments.${figurePart}.${subpart.query}.title`) }}
          </span>
          <v-btn
            class="text-lowercase"
            text
            small
            :color="themes.light.primary3"
            :ripple="false"
            @click="showingList = !showingList"
          >
            {{ $t('treatments.changeArea') }}
          </v-btn>
        </div>
        <div class="d-flex treat-detail-nav__container">
          <ButtonNav
            v-for="item in items"
            :key="`${item.value}-${activeTab === item.value}`"
            :title="item.label"
            :value="item.value"
            :is-active="activeTab === item.value"
          />
        </div>

        <div class="treat-detail__content">
          <div v-if="activeTab === 'additional'">
            <ExpandedCardInfo
              v-for="(content, index) in MasterContent[figurePart][
                subpart.query
              ].additional.content"
              :key="index"
              :index="index"
              :title="
                $t(
                  `treatments.${figurePart}.${subpart.query}.additional.content[${index}].title`
                )
              "
              >{{
                $t(
                  `treatments.${figurePart}.${subpart.query}.additional.content[${index}].subtitle`
                )
              }}</ExpandedCardInfo
            >
          </div>
          <div v-if="activeTab === 'general'">
            {{
              $t(`treatments.${figurePart}.${subpart.query}.general.content`)
            }}
          </div>
          <div v-if="activeTab === 'engagement'">
            {{
              $t(`treatments.${figurePart}.${subpart.query}.engagement.content`)
            }}
          </div>
        </div>
      </div>
    </div>
    <div
      class="d-flex justify-center align-center side-button"
      :style="darkBackground"
      @click="toogleList"
    >
      <span
        v-if="!showingList"
        class="text-h6 font-weight-light side-button-text"
        >{{ $t('treatments.procedures') }}</span
      >
      <img v-else :src="icons.right" alt="right" />
    </div>
    <div
      class="d-flex flex-column subpart-list"
      :class="{ closed: !showingList }"
      :style="background"
    >
      <div v-if="showingList">
        <div class="treat-detail__button-container">
          <img :src="icons.closeIcon" alt="close" @click="closeDetail" />
        </div>
        <div class="treat-detail__title d-flex flex-column align-start">
          <span>
            {{ $t(`treatments.${figurePart}.title`) }}
            {{ $t('treatments.procedures') }}
          </span>
          <v-btn
            class="text-lowercase"
            text
            small
            :color="themes.light.primary3"
            :ripple="false"
            @click="closeDetail"
          >
            {{ $t('treatments.changeArea') }}
          </v-btn>
        </div>
        <div>
          <span class="text-h5">{{ $t('treatments.surgeries') }}</span>
          <VerticalNavigation
            class="mt-3 mb-6"
            tab-justify="left"
            :subparts="womanSubparts[figurePart]"
            @close-list="toogleList"
          />
          <span class="text-h5">{{ $t('treatments.nonsurgeries') }}</span>
          <VerticalNavigation
            class="mt-3"
            tab-justify="left"
            :subparts="womanSubparts[figurePart]"
            @close-list="toogleList"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// assets
import ChevronRight from 'bootstrap-icons/icons/chevron-right.svg'
import CloseIcon from '../../assets/icons/close-icon.svg'
import BurgerMenuIcon from '../../assets/icons/burger-menu.svg'
import ExpandedCardInfo from '../ExpandedCardInfo'
import TreatmentDetailButtonNav from './TreatmentDetailButtonNav'
import womanSubparts from '~/components/Treatment/assets/womanSubparts.json'
import manSubparts from '~/components/Treatment/assets/manSubparts.json'

// components
import VerticalNavigation from '~/components/Treatment/VerticalNavigation'
import MasterContent from '~/assets/locales/en/treatments.json'

export default {
  components: {
    ButtonNav: TreatmentDetailButtonNav,
    ExpandedCardInfo,
    VerticalNavigation,
  },
  props: {
    subpart: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      icons: {
        closeIcon: CloseIcon,
        burgerMenu: BurgerMenuIcon,
        right: ChevronRight,
      },
      items: [
        { label: this.$t('treatments.general'), value: 'general' },
        { label: this.$t('treatments.engagement'), value: 'engagement' },
        { label: this.$t('treatments.additional'), value: 'additional' },
      ],
      showingList: false,
      MasterContent,
      womanSubparts,
      manSubparts,
    }
  },
  computed: {
    themes() {
      return this.$vuetify.theme.themes
    },
    figurePart: {
      get() {
        return this.$store.state.figurePart
      },
      set(val) {
        this.$store.commit('SET_FIGURE_PART', val)
      },
    },
    figureSubpart: {
      get() {
        return this.$store.state.figureSubpart
      },
      set(val) {
        this.$store.commit('SET_FIGURE_SUBPART', val)
      },
    },
    isFemale() {
      const { figure } = this.$route.query
      return figure === 'female'
    },
    isMale() {
      const { figure } = this.$route.query
      return figure === 'male'
    },
    activeTab() {
      return this.$store.state.activeTab
    },
    darkBackground() {
      return {
        background: this.themes.light.darkBackground,
      }
    },
    lightBackground() {
      return {
        background: this.themes.light.lightBackground,
      }
    },
    background() {
      return {
        background: this.themes.light.background,
      }
    },
  },
  mounted() {
    this.checkActiveSubpart()
  },
  methods: {
    closeDetail() {
      const { figure } = this.$route.query

      this.$router.push({ query: { figure } })
    },
    toogleList() {
      this.showingList = !this.showingList
    },
    checkActiveSubpart() {
      if (
        this.isFemale &&
        !this.womanSubparts[this.figurePart][this.figureSubpart].active
      ) {
        this.this.womanSubparts[this.figurePart][this.figureSubpart] = false
        this.figureSubpart = 0
        this.this.womanSubparts[0].active = true
      }
      if (
        this.isMale &&
        !this.manSubparts[this.figurePart][this.figureSubpart].active
      ) {
        this.this.manSubparts[this.figurePart][this.figureSubpart] = false
        this.figureSubpart = 0
        this.this.manSubparts[0].active = true
      }
    },
  },
}
</script>

<style scoped>
.full-height {
  height: 100%;
}
.detail-container {
  /* box-shadow: 0px 2px 10px rgba(185, 185, 185, 0.25); */
  z-index: 2;
  width: 100%;
  height: calc(100vh - 48px);
}
.side-button {
  z-index: 1;
  width: 7%;
  transition: 200ms;
  cursor: pointer;
}
.side-button:hover {
  width: 8%;
  transition: 200ms;
}
.side-button-text {
  transform: rotate(-90deg);
}

.subpart-list {
  flex-grow: 1;
  position: relative;
  padding: 60px;
}
.subpart-list.closed {
  flex-grow: 0;
  padding: 0px;
  width: 0% !important;
}

.treat-detail-container {
  flex-grow: 1;
  position: relative;
  padding: 60px;
  transition: flex-grow 500ms;
}
.treat-detail-container.closed {
  flex-grow: 0;
  padding: 0px;
  width: 0% !important;
  transition: flex-grow 500ms;
}

.treat-detail__title {
  font-weight: 600;
  font-size: 36px;
  line-height: 49px;
  margin-bottom: 50px;
}

.treat-detail-nav__container {
  /* overflow-x: scroll; */
  margin-bottom: 50px;
}

.treat-detail__button-container {
  position: absolute;
  top: 40px;
  right: 40px;
  cursor: pointer;
}

.treat-detail__button-container > button {
  cursor: pointer;
}

.treat-detail__button-container > img:not(:first-child) {
  margin-left: 15px;
}

.treat-detail__content {
  font-size: 18px;
  line-height: 26px;
  text-align: justify;
  overflow: scroll;
}
</style>
