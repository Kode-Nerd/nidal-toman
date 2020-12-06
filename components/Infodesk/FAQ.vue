<template>
  <div class="faq__container">
    <div class="faq__title">FAQ</div>
    <div class="faq__list">
      <DetailItem :dark="true" />
    </div>
  </div>
</template>

<script>
import DetailItem from './DetailItem'

export default {
  components: {
    DetailItem,
  },
}
</script>

<style scoped>
.faq__container {
  color: #fff;
  background: #6c756b;
  padding: 90px 100px;
}
.faq__title {
  font-weight: bold;
  font-size: 48px;
  line-height: 65px;
}

.faq__list {
  margin-top: 40px;
}
</style>
