<template>
  <div class="cost-financing__container">
    <div class="cost-financing__title">Costs & Financing</div>

    <div class="cost-financing__list">
      <CostFinancingItem
        v-for="(item, index) in costFinanceData"
        :key="`cost-finance-item-${index}`"
        :title="item.title"
        :subtitle="item.subtitle"
      />
    </div>
  </div>
</template>

<script>
import CostFinancingData from './assets/costFinancingData.json'

// component
import CostFinancingItem from './CostFinancingItem'

export default {
  components: {
    CostFinancingItem,
  },
  data() {
    return {
      costFinanceData: CostFinancingData,
    }
  },
}
</script>

<style scoped>
.cost-financing__container {
  padding: 90px 100px;
  background: #6c756b;
  color: #fff;
}

.cost-financing__title {
  font-weight: bold;
  font-size: 48px;
  line-height: 65px;
}
</style>
