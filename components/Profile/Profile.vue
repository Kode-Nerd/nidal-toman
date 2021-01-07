<template>
  <div :id="id" class="wrapper">
    <v-carousel
      style="margin-top: -48px"
      cycle
      height="100vh"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(imagePath, i) in imagePaths" :key="i">
        <v-img
          :src="require(`~/assets/images/profile/${imagePaths[i]}`)"
          height="100%"
          :position="i === 2 ? 'top' : 'center'"
        >
        </v-img>
      </v-carousel-item>
    </v-carousel>
    <!-- <NavHeader /> -->
    <div class="profile__container">
      <!-- <div class="profile__header">
        <div class="header__title">{{ $t('profile.title') }}</div>
        <div class="header__subtitle">
          {{ $t('profile.subtitle') }}
        </div>
      </div> -->

      <div class="profile__body">
        <div class="detail__container">
          <div class="profile__photo">
            <img :src="ProfileImage" class="profile-img" />
          </div>
          <div class="profile__subtitle">
            <div>
              <div
                class="subtitle__name text-h4 font-weight-bold"
                :style="titleStyle"
              >
                <div class="line" :style="backgroundComponentStyle" />
                <CustomSVG
                  class="ml-n8 mb-n8 mt-n3"
                  :src="require('~/assets/name.svg')"
                  :width="'38rem'"
                  :height="'6rem'"
                  :color="themes.light.logo"
                  :cover="true"
                ></CustomSVG>
                <!-- <div>{{ $t('profile.title') }}</div> -->
              </div>
              <div class="text-h5 sutitle__description">
                {{ $t('profile.profileDescription') }}
              </div>
            </div>
          </div>
        </div>
        <div class="vita__container">
          <div class="vita__header">
            <div class="vita__title">{{ $t('profile.vita.label') }}</div>
          </div>
          <div class="vita__subcontainer">
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
        <div class="description__container">
          <div class="profile__description text-h6">
            <p>{{ $t('profile.description[0]') }}</p>
            <p>{{ $t('profile.description[1]') }}</p>
            <p>{{ $t('profile.description[2]') }}</p>
          </div>
          <div class="profile__image">
            <v-img
              :src="require('~/assets/images/profile/profile0.jpg')"
              width="100%"
              height="100%"
            ></v-img>
          </div>
        </div>
        <div class="publication__container">
          <div class="publication__header">
            <div class="publication__title">
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
        <div class="book__container">
          <div class="book__header">
            <div class="book__title">{{ $t('profile.books.label') }}</div>
          </div>
          <div>
            <ProfileBookItem
              :title="$t(`profile.books.list[0].title`)"
              :author="$t(`profile.books.list[0].author`)"
              :detail="$t(`profile.books.list[0].detail`)"
            />
          </div>
        </div>
        <div class="publication__container">
          <div class="publication__header">
            <div class="publication__title">
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
      </div>
    </div>
    <!-- <FooterComponent /> -->
  </div>
</template>

<script>
import ProfileVitaItem from './ProfileVitaItem'
import ProfileBookItem from './ProfileBookItem'
import ProfilePublicationItem from './ProfilePublicationItem'
import ProfilePublishedSummary from './ProfilePublishedSummary'
import CustomSVG from '~/components/Global/CustomSVG'
import ProfileImage from '~/assets/images/profile/profile_dr-nidal-toman.png'

export default {
  components: {
    ProfileVitaItem,
    ProfileBookItem,
    ProfilePublicationItem,
    ProfilePublishedSummary,
    CustomSVG,
  },
  data() {
    return {
      id: 'profile',
      ProfileImage,
      indexList: [1, 2, 3, 4],
    }
  },
  computed: {
    themes() {
      return this.$vuetify.theme.themes
    },
    titleStyle() {
      return {
        color: this.themes.light.primary3,
      }
    },
    backgroundComponentStyle() {
      return {
        background: this.themes.light.primary3,
      }
    },
    imagePaths() {
      return this.indexList.map((index) => `profile${index}.jpg`)
    },
  },
}
</script>

<style scoped>
.wrapper {
  margin-top: 0px;
}

.profile__subtitle {
  display: flex;
  align-items: center;
  padding-right: 140px;
  margin-left: -50px;
}

.vita__header {
  /* margin-bottom: 40px; */
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
  transform: rotate(-90deg);
  /* color: #6c756b; */
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

/* .header__title {
  font-weight: 800;
  font-size: 96px;
  line-height: 131px;

  color: #6c756b;
} */

/* .header__subtitle {
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  color: #cca43b;
  margin-top: 15px;
} */

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

.vita__container {
  /* background: #e5e5e5; */
  display: flex;
  padding: 0px;
  /* padding: 80px 140px; */
}

.vita__subcontainer {
  display: flex;
  flex: 1;
  padding: 80px;
  background: #e5e5e5;
  /* background: rgba(178, 121, 168, 0.51); */
}

.publication__title {
  font-weight: 800;
  font-size: 48px;
  line-height: 66px;
  text-align: justify;

  /* color: #6c756b; */
  /* color: #fff; */
  margin-bottom: 40px;
}

.publication__container {
  background: #e5e5e5;
  /* background: #6c756b; */
  padding: 80px 140px;
}

.book__container {
  padding: 80px 140px;
}

.book__header {
  margin-bottom: 40px;
}

.book__title {
  font-weight: 800;
  font-size: 48px;
  line-height: 66px;

  /* color: #6c756b; */
}

.description__container {
  display: flex;
  align-items: stretch;
}
</style>
