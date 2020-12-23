<template>
  <!-- <div class="fullscreen d-flex justify-center align-center">
    We are building mobile mode for better experience
  </div> -->
  <v-carousel
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
            <v-col :offset="2" :cols="10">
              <!-- <div class="display-3">{{ slide }}</div> -->
              <!-- <div class="title">{{ sub[i] }}</div> -->
            </v-col>
          </v-row>
        </div>
      </v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {}
</script>

<style scoped>
.fullscreen {
  width: 100vw;
  height: 100vh;
}
</style>
