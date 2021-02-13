<template>
  <Treatment />
</template>

<script>
import Treatment from '@/components/Treatment/Treatment'

export default {
  components: {
    Treatment,
  },
  layout: 'customNoFooter',
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
