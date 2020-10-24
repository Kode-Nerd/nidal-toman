<template>
  <div class="welcome-container">
    <div id="welcome" class="welcome-main pa-6">
      <v-row class="welcome-main-logo">
        <v-col cols="2"></v-col>
        <v-col cols="2">
          <v-img
            contain
            :src="require('~/assets/main-logo.png')"
            max-height="120"
          ></v-img>
        </v-col>
        <v-col cols="2">
          <v-row justify="end">
            <span
              :style="lang === 'EN' && langActive"
              class="international"
              @click="lang = 'EN'"
              >EN</span
            >
            <span :style="langActive" class="mx-2">|</span>
            <span
              :style="lang === 'DE' && langActive"
              class="international mr-4"
              @click="lang = 'DE'"
              >DE</span
            >
          </v-row>
        </v-col>
        <v-col cols="6"></v-col>
      </v-row>
      <v-row class="full-height" align-content="center">
        <v-col cols="2">
          <div class="d-flex flex-column">
            <span :style="welcomeStyle" class="text-h5"
              >Welcome to Clinic of</span
            >
            <span :style="nameStyle" class="text-h3">Dr med Nidal Toman</span>
            <span :style="descriptionStyle" class="text-h6 mb-10">
              Plastic surgeon and specialist for plastic, aesthetic and
              reconstructive surgery in Berlin
            </span>
            <v-col cols="6">
              <v-tabs
                v-model="tab"
                background-color="transparent"
                :color="$vuetify.theme.themes.light.primary"
                vertical
              >
                <v-tabs-slider
                  :color="$vuetify.theme.themes.light.primary3"
                ></v-tabs-slider>
                <v-tab v-for="label in labels" :key="label">{{ label }}</v-tab>
              </v-tabs>
            </v-col>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 0,
      labels: [
        'Welcome',
        'Treatments',
        'Info Desk',
        'Dr. Nidal Toman',
        'Contact',
      ],
      lang: 'EN',

      welcomeStyle: {
        color: this.$vuetify.theme.themes.light.text,
      },
      nameStyle: {
        color: this.$vuetify.theme.themes.light.primary3,
      },
      descriptionStyle: {
        color: this.$vuetify.theme.themes.light.text,
      },
      langActive: {
        color: this.$vuetify.theme.themes.light.primary3,
      },
    }
  },
}
</script>

<style>
.international {
  cursor: pointer;
}
.welcome-main-logo {
  height: 0%;
}
.welcome-container {
  width: 100%;
  height: 100vh;
  overflow-x: scroll;
}
.welcome-main {
  width: 200%;
  height: 100%;
}
.full-height {
  height: 100%;
}
.full-width {
  width: 100%;
}
</style>
