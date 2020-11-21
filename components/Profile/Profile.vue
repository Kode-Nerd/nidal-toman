<template>
  <div id="profile" class="wrapper">
    <NavHeader />
    <div class="profile__container">
      <div class="profile__header">
        <div class="header__title">{{ $t('profile.title') }}</div>
        <div class="header__subtitle">
          {{ $t('profile.subtitle') }}
        </div>
        <div class="header__description">
          {{ $t('profile.description') }}
        </div>
      </div>

      <div class="profile__body">
        <div class="detail__container">
          <div class="profile__photo">
            <img :src="ProfileImage" class="profile-img" />
          </div>
          <div class="profile__subtitle">
            <div>
              <div class="subtitle__name">
                <div class="line" />
                <div>{{ $t('profile.title') }}</div>
              </div>
              <div class="sutitle__description">
                {{ $t('profile.profileDescription') }}
              </div>
            </div>
          </div>
        </div>
        <div class="vita__container">
          <div class="vita__header">
            <div class="vita__title">Vita</div>
          </div>
          <div>
            <ProfileVitaItem
              v-for="index in 7"
              :key="`vita-${index}`"
              :title="$t(`profile.vita.${index - 1}.title`)"
              :subtitle="$t(`profile.vita.${index - 1}.subtitle`)"
              :year="$t(`profile.vita.${index - 1}.year`)"
              :place="$t(`profile.vita.${index - 1}.place`)"
            />
          </div>
        </div>
        <div class="publication__container">
          <div class="publication__header">
            <div class="publication__title">Publication</div>
          </div>
          <div>
            <ProfilePublicationItem
              v-for="(item, index) in PublicationData"
              :key="item.title"
              :title="item.title"
              :subtitle="item.subtitle"
              :detail="item.detail"
              :index="index + 1 < 10 ? `0${index + 1}` : index + 1"
            />
          </div>
        </div>
        <div class="book__container">
          <div class="book__header">
            <div class="book__title">Books</div>
          </div>
          <div>
            <ProfileBookItem />
          </div>
        </div>
        <div class="publication__container">
          <div class="publication__header">
            <div class="publication__title">Published Summaries</div>
          </div>
          <div>
            <ProfilePublishedSummary
              v-for="(item, index) in PublishedSummaries"
              :key="`published-summary-${index}`"
              :title="item.title"
              :author="item.author"
              :detail="item.detail"
              :index="index + 1 < 10 ? `0${index + 1}` : index + 1"
            />
          </div>
        </div>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import ProfileVitaItem from './ProfileVitaItem'
import ProfileBookItem from './ProfileBookItem'
import ProfilePublicationItem from './ProfilePublicationItem'
import ProfilePublishedSummary from './ProfilePublishedSummary'
import PublicationData from './assets/publications.json'
import PublishedSummaries from './assets/publishedSummaries.json'
import ProfileImage from '~/assets/images/profile/profile_dr-nidal-toman.png'
import NavHeader from '~/components/global/NavigationHeader'
import FooterComponent from '~/components/Footer/Footer'

export default {
  components: {
    ProfileVitaItem,
    ProfileBookItem,
    ProfilePublicationItem,
    ProfilePublishedSummary,
    NavHeader,
    FooterComponent,
  },
  data() {
    return {
      ProfileImage,
      PublicationData,
      PublishedSummaries,
    }
  },
}
</script>

<style scoped>
.wrapper {
  margin-top: 50px;
}

.profile__body {
}

.profile__subtitle {
  display: flex;
  align-items: center;
  padding-right: 140px;
  margin-left: -50px;
}

.vita__header {
  margin-bottom: 40px;
}

.vita__title {
  font-weight: 800;
  font-size: 48px;
  line-height: 66px;
  text-align: justify;

  color: #6c756b;
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

  color: #6c756b;
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

.header__title {
  font-weight: 800;
  font-size: 96px;
  line-height: 131px;

  color: #6c756b;
}

.header__subtitle {
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  color: #cca43b;
  margin-top: 15px;
}

.header__description {
  font-weight: 300;
  font-size: 24px;
  line-height: 33px;
  text-align: justify;
  color: #868585;
  margin-top: 40px;
}

.vita__container {
  background: #e5e5e5;
  padding: 80px 140px;
}

.publication__title {
  font-weight: 800;
  font-size: 48px;
  line-height: 66px;
  text-align: justify;

  color: #fff;
  margin-bottom: 40px;
}

.publication__container {
  background: #6c756b;
  padding: 80px 140px;
}

.publication__header {
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

  color: #6c756b;
}
</style>
