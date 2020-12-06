<template>
  <div class="finding-doctor__container">
    <div class="finding-doctor__title">Tips for finding doctors</div>
    <div class="finding-doctor__subtitle">
      You should allow yourself enough time to choose the right doctor. Be clear
      about how you want to change your appearance and what expectations you
      have for the operation or treatment.
    </div>
    <div class="finding-doctor__list">
      <FindingDoctorItem
        v-for="(item, index) in findingDoctorData"
        :key="`finding-doctor-item-${index}`"
        :title="item.title"
        :subtitle="item.subtitle"
        :index="index"
      />
    </div>
  </div>
</template>

<script>
import FindingDoctorData from './assets/findingDoctorData.json'

// component
import FindingDoctorItem from './TipsFindingDoctorsItem'

export default {
  components: {
    FindingDoctorItem,
  },
  data() {
    return {
      findingDoctorData: FindingDoctorData,
    }
  },
}
</script>

<style scoped>
.finding-doctor__container {
  color: #6c756b;
  padding: 90px 100px;
}

.finding-doctor__title {
  font-weight: bold;
  font-size: 48px;
  line-height: 65px;
}

.finding-doctor__subtitle {
  font-size: 24px;
  line-height: 33px;

  margin-top: 18px;
}

.finding-doctor__list {
  width: 100%;
}
</style>
