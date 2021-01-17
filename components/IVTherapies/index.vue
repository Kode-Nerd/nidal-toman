<template>
  <div style="margin-top: -48px">
    <CoverPicture :src="require('~/assets/_ivtherapies.jpeg')">
      <v-row :style="logoContainer" justify="center" align="center">
        <v-img
          :style="logoStyle"
          contain
          :src="require(`~/assets/B'lance.png`)"
          height="80vh"
        ></v-img>
      </v-row>
    </CoverPicture>
    <!-- <v-img
      :src="require('~/assets/_ivtherapies.jpeg')"
      width="100%"
      height="100vh"
    >
      <v-row :style="logoContainer" justify="center" align="center">
        <v-img
          :style="logoStyle"
          contain
          :src="require(`~/assets/B'lance.png`)"
          height="80vh"
        ></v-img>
      </v-row>
    </v-img> -->
  </div>
</template>

<script>
export default {
  computed: {
    logoContainer() {
      return {
        width: '100%',
        height: '100%',
      }
    },
    logoStyle() {
      return {
        opacity: '40%',
      }
    },
  },
}
</script>

<style></style>
