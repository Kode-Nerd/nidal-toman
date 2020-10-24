<template>
  <div class="treatments-container">
    <div id="treatments" class="treatments-main pa-6">
      <v-row class="treatments-main-logo"></v-row>
      <v-row class="full-height">
        <v-tabs
          v-model="tab"
          background-color="transparent"
          :color="$vuetify.theme.themes.light.primary"
          right
        >
          <v-tab v-for="label in labels" :key="label">{{ label }}</v-tab>
        </v-tabs>
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
    }
  },
}
</script>

<style>
.treatments-container {
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
}
.treatments-main {
  width: 100%;
  height: 200%;
}
.treatments-main-logo {
  height: 0%;
}
.full-height {
  height: 100%;
}
.full-width {
  width: 100%;
}
</style>
