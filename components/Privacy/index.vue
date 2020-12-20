<template>
  <v-container>
    <v-row class="mt-16">
      <Section
        :title="$t('privacy.title1.title')"
        title-component="h2"
        :title-color="themes.light.text"
      >
        <Section :title="$t('privacy.title1.sub[0].title')">
          <div class="d-flex flex-column">
            <span
              v-for="(text, index) in contentExtractor(
                $t('privacy.title1.sub[0].text')
              )"
              :key="index"
              class="text-subtitle-1 mb-3"
              v-html="text"
            ></span>
          </div>
        </Section>
        <Section :title="$t('privacy.title1.sub[0].title')">
          <Section
            v-for="(q, i) in 4"
            :key="i"
            title-component="h6"
            :title="$t(`privacy.title1.sub[1].q[${i}].title`)"
            :title-class="['font-weight-bold']"
            :title-color="themes.light.text"
          >
            <div class="d-flex flex-column">
              <span
                v-for="(text, j) in contentExtractor(
                  $t(`privacy.title1.sub[1].q[${i}].text`)
                )"
                :key="j"
                class="text-subtitle-1 mb-3"
                v-html="text"
              ></span>
            </div>
          </Section>
        </Section>
        <Section :title="$t('privacy.title1.sub[2].title')">
          <div class="d-flex flex-column">
            <span
              v-for="(text, index) in contentExtractor(
                $t('privacy.title1.sub[2].text')
              )"
              :key="index"
              class="text-subtitle-1 mb-3"
              v-html="text"
            ></span>
          </div>
        </Section>
      </Section>
    </v-row>
    <v-row> </v-row>
    <v-row> </v-row>
    <v-row> </v-row>
    <v-row> </v-row>
  </v-container>
</template>

<script>
// import Section from '~/components/Global/Section'
import { contentExtractor } from '~/helpers'
export default {
  components: {
    // Section,
  },
  computed: {
    themes() {
      return this.$vuetify.theme.themes
    },
  },
  methods: {
    contentExtractor(input) {
      return contentExtractor(input)
    },
  },
}
</script>

<style></style>
