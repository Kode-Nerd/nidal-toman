<template>
  <div
    :style="fontPrimaryStyle"
    class="fullscreen py-6 px-8 d-flex flex-column justify-space-between align-center"
  >
    <div :style="[figureContainer, figure1]">
      <v-img
        contain
        :src="require('~/assets/_asset3.png')"
        :height="figureSize"
      ></v-img>
    </div>
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
    <div style="height: 20vh; width: 100%">
      <a
        class="text-h6 font-weight-bold"
        href="https://www.google.com/maps/place/Plastische+Chirurgie/@52.5003229,13.3247357,21z/data=!4m12!1m6!3m5!1s0x47a850fa4954eca3:0x1406c2788da9ed70!2sPlastische+Chirurgie!8m2!3d52.5003285!4d13.3246307!3m4!1s0x47a850fa4954eca3:0x1406c2788da9ed70!8m2!3d52.5003285!4d13.3246307"
        target="_blank"
        >Find us!</a
      >
    </div>
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
  data() {
    return {
      figureSize: '50vh',
    }
  },
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
        right: '-18vh',
        bottom: '2vh',
      }
    },
    figureContainer() {
      return {
        width: this.figureSize,
        height: this.figureSize,
      }
    },
  },
}
</script>

<style scoped>
.fullscreen {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
