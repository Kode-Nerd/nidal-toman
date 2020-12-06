<template>
  <div class="insurance__container">
    <div class="insurance__title">Follow-up insurance</div>
    <div class="insurance__subtitle">
      No matter how small the procedure and how careful your doctor has been -
      every major medical treatment carries a risk of subsequent complications
      such as secondary bleeding or wound healing disorders. However, you
      usually have to pay for any follow-up treatments outside of your health
      insurance’s range of services, such as cosmetic surgery or dental
      implantation. medassure assumes these costs. So that you can concentrate
      fully on your healing, you should secure a non-medically necessary
      treatment in advance.
    </div>

    <div class="insurance__list">
      <DetailItem />
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
.insurance__container {
  color: #6c756b;
  padding: 90px 100px;
}
.insurance__title {
  font-weight: bold;
  font-size: 48px;
  line-height: 65px;
}

.insurance__subtitle {
  margin-top: 40px;
  font-size: 18px;
  line-height: 25px;
}

.insurance__list {
  margin-top: 40px;
}
</style>
