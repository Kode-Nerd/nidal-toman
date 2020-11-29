<template>
  <Profile />
</template>

<script>
import Profile from '@/components/Profile/Profile'

export default {
  components: {
    Profile,
  },
  head() {
    return {
      title: 'Dr. Nidal Toman',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'This is description from Profile Page',
        },
      ],
    }
  },
}
</script>

<style></style>
