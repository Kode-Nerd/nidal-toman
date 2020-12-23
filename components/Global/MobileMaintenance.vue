<template>
  <div
    :style="fontPrimaryStyle"
    class="fullscreen py-6 px-8 d-flex flex-column justify-space-between align-center"
  >
    <v-img
      :style="figure1"
      contain
      :src="require('~/assets/_asset3.png')"
      height="50vh"
    ></v-img>
    <v-img
      contain
      :src="require('~/assets/main-logo.png')"
      max-width="50vw"
      width="50vw"
      max-height="10vh"
    ></v-img>
    <div style="height: 5vh" />
    <div class="text-h5 font-weight-light">
      <p>
        We are currently working on to improve your mobile experience. You will
        then find the new version of our mobile website.
      </p>
      <p>
        Until then we look forward to seeing you in our desktop version or our
        clinic.
      </p>
    </div>
    <div style="height: 20vh" />
    <div class="font-weight-light" style="width: 100%">
      <span class="text-h6 font-weight-bold">Contact:</span><br />
      <span>
        Uhlandstraße 33, 10719 Berlin<br />
        Phone: +49 30 213008000<br />
        info@nidal-toman.de
      </span>
    </div>
  </div>
  <!-- <v-carousel
    cycle
    height="100vh"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item v-for="(slide, i) in 6" :key="i">
      <v-img
        :src="require(`~/assets/images/practice/praxis${i + 1}.jpg`)"
        height="100%"
      >
        <div class="fill-height carousel-dark">
          <v-row class="fill-height" align="center" justify="center">
            <v-col :offset="2" :cols="10"> </v-col>
          </v-row>
        </div>
      </v-img>
    </v-carousel-item>
  </v-carousel> -->
</template>

<script>
export default {
  computed: {
    themes() {
      return this.$vuetify.theme.themes
    },
    fontPrimaryStyle() {
      return {
        color: this.themes.light.primary,
      }
    },
    figure1() {
      return {
        position: 'absolute',
        marginRight: '0px',
        right: '0px',
        bottom: '0px',
      }
    },
  },
}
</script>

<style scoped>
.fullscreen {
  width: 100vw;
  height: 100vh;
  overflow: visible;
}
</style>
