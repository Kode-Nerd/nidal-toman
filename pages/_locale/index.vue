<template>
  <div>
    <Welcome />
    <Treatments />
    <TreatmentDetail />
    <Practice />
    <Profile />
    <Contact />
  </div>
</template>

<script>
import Welcome from '~/components/Welcome'
import Treatments from '~/components/Treatments'
import TreatmentDetail from '~/components/TreatmentDetail/TreatmentDetail'
import Practice from '~/components/Practice/Practice'
import Profile from '~/components/Profile/Profile'
import Contact from '~/components/Contact/Contact'

export default {
  components: {
    Welcome,
    Treatments,
    TreatmentDetail,
    Practice,
    Profile,
    Contact,
  },
  head() {
    return {
      title: 'Home',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'This is description from Home Page',
        },
      ],
    }
  },
}
</script>

<style></style>
