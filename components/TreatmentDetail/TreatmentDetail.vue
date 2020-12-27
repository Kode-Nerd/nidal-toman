<template>
  <div class="treat-detail-container">
    <div class="treat-detail__button-container">
      <img
        :src="icons.closeIcon"
        alt="close"
        @click="setVisibleTreatmentDetail(false)"
      />
    </div>
    <div class="treat-detail__title">Face Lift</div>
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
          index="0"
          title="How i do preparation for operation"
        />
      </div>
      <div v-if="activeTab !== 'additional'">
        The natural aging process inevitably leads to reduced skin elasticity
        with more or less pronounced wrinkling. The face lift is certainly the
        most invasive but also the most effective method to achieve a visual
        rejuvenation by tightening the entire face or neck region. The
        anatomical characteristics that determine our facial expressions require
        special surgical techniques. Essentially, this procedure uses
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

// assets
import CloseIcon from '../../assets/icons/close-icon.svg'
import BurgerMenuIcon from '../../assets/icons/burger-menu.svg'

// components
import ExpandedCardInfo from '../ExpandedCardInfo'
import TreatmentDetailButtonNav from './TreatmentDetailButtonNav'

export default {
  components: {
    ButtonNav: TreatmentDetailButtonNav,
    ExpandedCardInfo,
  },
  data() {
    return {
      icons: { closeIcon: CloseIcon, burgerMenu: BurgerMenuIcon },
      items: [
        { label: 'General Information', value: 'general' },
        { label: 'Engagment', value: 'engagment' },
        { label: 'Additional Information', value: 'additional' },
      ],
    }
  },
  computed: {
    activeTab() {
      return this.$store.state.activeTab
    },
  },
  methods: {
    ...mapMutations({
      setVisibleTreatmentDetail: 'SET_VISIBLE_TREATMENT_DETAIL',
    }),
  },
}
</script>

<style>
.treat-detail-container {
  position: relative;
  width: 100%;
  padding: 60px;
  box-shadow: 0px 2px 10px rgba(185, 185, 185, 0.25);
  height: 100vh;
  z-index: 2;
  background: #fff;
}

.treat-detail__title {
  font-weight: 600;
  font-size: 36px;
  line-height: 49px;
  color: #6c756b;
  margin-bottom: 50px;
}

.treat-detail-nav__container {
  overflow-x: scroll;
}

.treat-detail__button-container {
  position: absolute;
  top: 40px;
  right: 40px;
}

.treat-detail__button-container > button {
  cursor: pointer;
}

.treat-detail__button-container > img:not(:first-child) {
  margin-left: 15px;
}

.treat-detail__content {
  margin-top: 50px;
  font-size: 18px;
  line-height: 26px;
  text-align: justify;
  color: #828282;
}
</style>
