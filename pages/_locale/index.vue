<template>
  <div>
    <Welcome />
    <!-- <Treatments />
    <TreatmentDetail /> -->
    <!-- <Contact /> -->
    <!-- <Practice /> -->
    <Profile />
  </div>
</template>

<script>
import Welcome from '~/components/Welcome'
// import Treatments from '~/components/Treatments'
// import TreatmentDetail from '~/components/TreatmentDetail/TreatmentDetail'
// import Contact from '~/components/Contact/Contact'
// import Practice from '~/components/Practice/Practice'
import Profile from '~/components/Profile/Profile'

export default {
  components: {
    Welcome,
    // Treatments,
    // Contact,
    // TreatmentDetail,
    // Practice,
    Profile,
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
