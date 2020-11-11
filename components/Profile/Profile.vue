<template>
  <div class="profile__container">
    <div class="profile__header">
      <div class="header__title">Dr. med. Nidal Toman</div>
      <div class="header__subtitle">
        Specialist in plastic, aesthetic & reconstructive surgery.
      </div>
      <div class="header__description">
        As an experienced specialist in plastic, aesthetic and reconstructive
        surgery, Dr. Nidal Toman specializes in aesthetic operations. Here he
        can look back on over 15 years of experience. His operative treatment
        focuses on facial surgery, breast surgery, body contouring and
        liposuction. Another main focus is on minimally invasive skin
        rejuvenating procedures, wrinkle treatments. His many years of
        experience and the trust of his patients led to the establishment of his
        private practice for aesthetic surgery in Uhlandstr. 33 on
        Kurfürstendamm in Berlin-Charlottenburg.
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
              <div>Dr. med. Nidal Toman</div>
            </div>
            <div class="sutitle__description">
              It is important to me to achieve the best possible and natural
              results with healthy recovery phases for my patients through the
              most modern treatment methods and scar-saving surgical techniques.
              At numerous national and international congresses, I was
              constantly educated about current and modern procedures in plastic
              and aesthetic surgery. I would be happy to inform you in an
              exclusive atmosphere about the latest developments and forms of
              treatment in the field of aesthetic medicine and take a lot of
              time for your concerns and wishes. I look forward to meeting you!
            </div>
          </div>
        </div>
      </div>
      <div class="vita__container">
        <div class="vita__header">
          <div class="vita__title">Vita</div>
        </div>
        <div>
          <ProfileVitaItem />
        </div>
      </div>
      <div class="publication__container">
        <div class="publication__header">
          <div class="publication__title">Publication</div>
        </div>
        <div>
          <ProfilePublicationItem />
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
          <ProfilePublishedSummary />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileVitaItem from './ProfileVitaItem'
import ProfileBookItem from './ProfileBookItem'
import ProfilePublicationItem from './ProfilePublicationItem'
import ProfilePublishedSummary from './ProfilePublishedSummary'
import ProfileImage from '~/assets/images/profile/profile_dr-nidal-toman.png'

export default {
  components: {
    ProfileVitaItem,
    ProfileBookItem,
    ProfilePublicationItem,
    ProfilePublishedSummary,
  },
  data() {
    return {
      ProfileImage,
    }
  },
}
</script>

<style scoped>
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
