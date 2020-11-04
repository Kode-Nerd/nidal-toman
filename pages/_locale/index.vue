<template>
  <div>
    <Welcome />
    <Treatments />
    <TreatmentDetail />
    <Contact />
    <Practice />
  </div>
</template>

<script>
import Treatments from '~/components/Treatments'
import Welcome from '~/components/Welcome'
import TreatmentDetail from '~/components/TreatmentDetail/TreatmentDetail'
import Contact from '~/components/Contact/Contact'
import Practice from '~/components/Practice/Practice'

export default {
  components: {
    Welcome,
    Treatments,
    Contact,
    TreatmentDetail,
    Practice,
  },
}
</script>

<style></style>
