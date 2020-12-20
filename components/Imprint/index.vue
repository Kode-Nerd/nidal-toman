<template>
  <v-container>
    <v-row class="mt-16">
      <div class="d-flex flex-column mb-6">
        <span class="text-h2 mb-4">{{ $t('imprint.mainTitle') }}</span>
        <div class="d-flex flex-column">
          <span
            v-for="(text, index) in contentExtractor($t('imprint.subtitle'))"
            :key="index"
            class="text-subtitle-1 mb-3"
            >{{ text }}</span
          >
        </div>
      </div>
    </v-row>
    <v-row v-for="key in 8" :key="key">
      <Section :title="$t(`imprint.title${key}`)">
        <div class="d-flex flex-column">
          <span
            v-for="(text, index) in contentExtractor($t(`imprint.text${key}`))"
            :key="index"
            class="text-subtitle-1 mb-3"
            v-html="text"
          ></span>
        </div>
      </Section>
    </v-row>
  </v-container>
</template>

<script>
import Section from '~/components/Imprint/Section'
export default {
  components: {
    Section,
  },
  computed: {
    themes() {
      return this.$vuetify.theme.themes
    },
  },
  methods: {
    contentExtractor(input) {
      return input.split('\n').map((text) => {
        const matched = `${text} `.match(
          /(http)s*(:\/\/)+(www\.)*(\w|\W)+\.+\w+(\/.*)*(\s|\.)+/g
        )
        let transformed = text
        if (matched) {
          matched.forEach((link) => {
            let validLink = link.split(' ')[0]
            if (validLink[validLink.length - 1] === '.') {
              validLink = validLink.slice(0, -1)
            }

            transformed = text.replace(
              validLink,
              `<a href="${validLink}" target="_blank">${validLink}</a>`
            )
          })
        }

        return transformed
      })
    },
  },
}
</script>

<style></style>
