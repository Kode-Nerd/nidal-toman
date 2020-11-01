<template>
  <div>
    <Welcome />
    <Treatments />
    <TreatmentDetail />
  </div>
</template>

<script>
import Treatments from '~/components/Treatments'
import Welcome from '~/components/Welcome'
import TreatmentDetail from '~/components/TreatmentDetail/TreatmentDetail'

export default {
  components: {
    Welcome,
    Treatments,
    TreatmentDetail,
  },
}
</script>

<style></style>
