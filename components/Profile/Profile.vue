<template>
  <div :id="id" style="margin-top: -48px" class="wrapper">
    <CoverPicture :src="require('~/assets/images/treatments/treatment1.jpg')">
      <CoverScroll target="#top-profile" />
    </CoverPicture>
    <div id="top-profile" class="profile__container">
      <!-- <div class="profile__header">
        <div class="header__title">{{ $t('profile.title') }}</div>
        <div class="header__subtitle">
          {{ $t('profile.subtitle') }}
        </div>
      </div> -->

      <div class="profile__body">
        <div class="section">
          <Section title right>
            <p
              v-for="(text, index) in contentExtractor(
                $t('profile.description[0]')
              )"
              :key="index"
              class="text-h4 text-justify font-weight-light my-12"
              v-html="text"
            ></p>
          </Section>
          <div class="image-left">
            <ImageBlock
              :src="require('~/assets/images/profiles/profile.jpg')"
              height="90vh"
            />
          </div>
        </div>
        <div class="section" :style="lightBackground">
          <Section>
            <p
              v-for="(text, index) in contentExtractor(
                $t('profile.description[1]')
              )"
              :key="index"
              class="text-h4 text-justify font-weight-light my-12"
              v-html="text"
            ></p>
          </Section>
          <div class="image-right">
            <ImageBlock
              :src="require('~/assets/images/profiles/profile-2.png')"
              height="50vh"
            />
          </div>
        </div>
        <div class="section">
          <Section right>
            <span class="apposthrope font-weight-bold font-italic">"</span>
            <p
              v-for="(text, index) in contentExtractor(
                $t('profile.description[2]')
              )"
              :key="index"
              class="text-h4 text-justify font-weight-light mb-8"
              v-html="text"
            ></p>
            <span class="apposthrope font-weight-bold font-italic">"</span>
          </Section>
          <div class="image-left">
            <ImageBlock
              :src="require('~/assets/images/treatments/treatment4.jpg')"
              height="90vh"
            />
          </div>
        </div>

        <div class="history-container" :style="lightBackground">
          <div class="history-header">
            <div class="history-title">
              {{ $t('profile.publication.label') }}
            </div>
          </div>
          <div>
            <ProfilePublicationItem
              v-for="index in 9"
              :key="`publication-${index}`"
              :title="$t(`profile.publication.list.${index - 1}.title`)"
              :subtitle="$t(`profile.publication.list.${index - 1}.subtitle`)"
              :detail="$t(`profile.publication.list.${index - 1}.detail`)"
              :index="index < 10 ? `0${index}` : index"
            />
          </div>
        </div>

        <div class="section">
          <Section right width="75%">
            <div class="history-header">
              <div class="history-title">{{ $t('profile.books.label') }}</div>
            </div>
            <div>
              <ProfileBookItem
                :title="$t(`profile.books.list[0].title`)"
                :author="$t(`profile.books.list[0].author`)"
                :detail="$t(`profile.books.list[0].detail`)"
              />
            </div>
            <div class="image-left">
              <ImageBlock
                :src="require('~/assets/images/treatments/treatment7.jpg')"
                height="50vh"
              />
            </div>
          </Section>
        </div>

        <div class="history-container" :style="lightBackground">
          <div class="history-header">
            <div class="history-title">
              {{ $t('profile.summaries.label') }}
            </div>
          </div>
          <div>
            <ProfilePublishedSummary
              v-for="index in 10"
              :key="`published-summary-${index}`"
              :title="$t(`profile.summaries.list.${index - 1}.title`)"
              :author="$t(`profile.summaries.list.${index - 1}.author`)"
              :detail="$t(`profile.summaries.list.${index - 1}.detail`)"
              :index="index < 10 ? `0${index}` : index"
            />
          </div>
        </div>

        <div class="vita__container">
          <div>
            <v-img
              :src="require('~/assets/images/treatments/treatment2.jpg')"
              height="100%"
              width="30vw"
            ></v-img>
          </div>
          <div class="vita__subcontainer">
            <div class="vita__header">
              <div class="vita__title">{{ $t('profile.vita.label') }}</div>
            </div>
            <div>
              <ProfileVitaItem
                v-for="index in 7"
                :key="`vita-${index}`"
                :title="$t(`profile.vita.list.${index - 1}.title`)"
                :subtitle="$t(`profile.vita.list.${index - 1}.subtitle`)"
                :year="$t(`profile.vita.list.${index - 1}.year`)"
                :place="$t(`profile.vita.list.${index - 1}.place`)"
              />
            </div>
          </div>
        </div>

        <div class="history-container" :style="lightBackground">
          <div class="history-header">
            <div class="history-title">{{ $t('profile.posters.label') }}</div>
          </div>
          <div>
            <ProfileBookItem
              v-for="index in 12"
              :key="`posters-${index}`"
              :title="$t(`profile.posters.list.${index - 1}.title`)"
              :author="$t(`profile.posters.list.${index - 1}.author`)"
              :detail="$t(`profile.posters.list.${index - 1}.detail`)"
            />
          </div>
        </div>
        <div class="history-container">
          <div class="history-header">
            <div class="history-title">
              {{ $t('profile.conferences.label') }}
            </div>
          </div>
          <div>
            <ProfilePublicationItem
              v-for="index in 24"
              :key="`conferences-${index}`"
              :title="$t(`profile.conferences.list.${index - 1}.title`)"
              :subtitle="$t(`profile.conferences.list.${index - 1}.detail`)"
              :detail="$t(`profile.conferences.list.${index - 1}.author`)"
              :index="index < 10 ? `0${index}` : index"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- <FooterComponent /> -->
  </div>
</template>

<script>
import ProfileVitaItem from './ProfileVitaItem'
import ProfileBookItem from './ProfileBookItem'
import Section from './Section'
import ProfilePublicationItem from './ProfilePublicationItem'
import ProfilePublishedSummary from './ProfilePublishedSummary'
import ImageBlock from '~/components/Global/ImageBlock'
import CoverPicture from '~/components/Global/CoverPicture'
import CoverScroll from '~/components/Global/CoverScroll'
import ProfileImage from '~/assets/images/profiles/profile-2.png'

import { contentExtractor } from '~/helpers'

export default {
  components: {
    ProfileVitaItem,
    ProfileBookItem,
    ProfilePublicationItem,
    ProfilePublishedSummary,
    ImageBlock,
    CoverPicture,
    CoverScroll,
    Section,
  },
  data() {
    return {
      id: 'profile',
      ProfileImage,
    }
  },
  computed: {
    themes() {
      return this.$vuetify.theme.themes
    },
    backgroundComponentStyle() {
      return {
        background: this.themes.light.primary3,
      }
    },
    lightBackground() {
      return {
        background: this.themes.light.lightBackground,
      }
    },
  },
  methods: {
    contentExtractor(input) {
      return contentExtractor(input)
    },
  },
}
</script>

<style scoped>
.section {
  position: relative;
}

.image-left {
  position: absolute;
  bottom: -7vh;
  left: 84px;
  z-index: 1;
}

.image-right {
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  right: 84px;
  z-index: 1;
}

.apposthrope {
  font-size: 75px;
  font-family: Avenir;
  color: #868686;
}

.history-container {
  padding: 140px;
}
.history-header {
  margin-bottom: 40px;
}
.history-title {
  font-weight: 800;
  font-size: 48px;
  line-height: 66px;
  text-align: justify;
}

.vita__container {
  display: flex;
  align-items: stretch;
  padding: 0px;
}
.vita__subcontainer {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 84px;
}
.vita__header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
}
.vita__title {
  font-weight: 800;
  font-size: 48px;
  line-height: 66px;
  text-align: justify;
}

.wrapper {
  margin-top: 0px;
}

.line {
  height: 1px;
  width: 130px;
  background: #6c756b;
  margin: 0px 20px;
  margin-left: -150px;
}

.subtitle__name {
  font-weight: 800;
  font-size: 36px;
  line-height: 49px;
  text-align: justify;

  /* color: #6c756b; */
  margin-bottom: 30px;

  display: flex;
  align-items: center;
}

.detail__container {
  display: flex;
}

.profile__photo {
  padding: 100px 140px;
  background: #fcfcfc;
}
.profile-img {
  height: 570px;
  width: 420px;
  border-radius: 2px;
}
.profile__header {
  padding: 140px;
}
.profile__subtitle {
  display: flex;
  align-items: center;
  padding-right: 140px;
  margin-left: -50px;
}
.profile__description {
  /* font-weight: 300; */
  /* font-size: 24px; */
  line-height: 33px;
  text-align: justify;
  /* color: #868585; */
  /* margin-top: 40px; */
  padding: 80px 80px 80px 140px;
}
.profile__image {
  width: 30vw;
}
.description__container {
  display: flex;
  align-items: stretch;
}
</style>
