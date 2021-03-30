<template>
  <v-navigation-drawer v-model="drawer" absolute temporary>
    <v-list-item class="d-flex align-end">
      <CustomSVG
        :src="require('~/assets/mini-logo.svg')"
        size="48px"
        :color="themes.light.primary3"
      ></CustomSVG>

      <CustomSVG
        class="mb-2"
        :src="require('~/assets/name.svg')"
        :width="'10rem'"
        :height="'1.25rem'"
        :color="themes.light.primary3"
        cover
      ></CustomSVG>
    </v-list-item>

    <v-divider></v-divider>

    <v-list shaped>
      <v-list-item
        v-for="(item, index) in mobileLabels"
        :key="index"
        link
        :input-value="item.active"
        :color="item.active ? themes.light.primary3 : themes.light.primary4"
        @click="goto(item.label)"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ $t(`nav.${item.label}`) }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import CustomSVG from '~/components/Global/CustomSVG'

import { finalpath } from '~/helpers'

export default {
  components: {
    CustomSVG,
  },
  computed: {
    locale() {
      return this.$store.state.locale
    },
    themes() {
      return this.$vuetify.theme.themes
    },
    mobileLabels() {
      return this.$store.state.mobileLabels
    },
    drawer: {
      set(val) {
        this.$store.commit('SET_SIDENAV', val)
      },
      get() {
        return this.$store.state.sideNav
      },
    },
    path: {
      set(val) {
        this.$store.commit('SET_PATH', val)
      },
      get() {
        return this.$store.state.path
      },
    },
  },
  watch: {
    '$route.path': {
      handler(val, old) {
        this.checkActiveTab()
      },
      deep: true,
      immediate: true,
    },
  },
  mounted() {
    this.checkActiveTab()
  },
  methods: {
    finalpath(path) {
      return finalpath(this.locale, path, true)
    },
    goto(label) {
      this.path = label
      const labelSet =
        label === 'mobileHome'
          ? '/'
          : label === 'mobileProfile'
          ? 'profile'
          : label
      this.$router.push({ path: finalpath(this.locale, labelSet, true) })
    },
    checkActiveTab() {
      const routePath = this.$route.path

      /* eslint no-useless-escape: 0 */
      const path = routePath.replace(/^\/de/, '').replace(/^\/mobile/, '')
      const matched = path.match(/[^\/]+/g)

      let label

      if (!matched) {
        label = 'mobileHome'
      } else if (matched[0] === 'profile') {
        label = 'mobileProfile'
      } else {
        label = matched[0]
      }

      const indexFound = this.mobileLabels.findIndex(
        (item) => item.label === label
      )

      this.path = label
      this.resetActive(indexFound)
    },
    resetActive(activeIndex) {
      this.mobileLabels.forEach((label, index) => {
        this.mobileLabels[index].active = index === activeIndex
      })
    },
  },
}
</script>

<style></style>
