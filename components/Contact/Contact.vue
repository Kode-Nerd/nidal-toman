<template>
  <div :id="id" class="contact-wrapper">
    <v-carousel
      style="margin-top: -48px"
      cycle
      height="100vh"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-img
          :src="require(`~/assets/images/practice/${imagePaths[i]}`)"
          height="100%"
        >
          <div class="fill-height carousel-dark">
            <!-- <v-row class="fill-height" align="center" justify="center">
              <v-col :offset="2" :cols="10">
                <div class="display-3">{{ slide }}</div>
                <div class="title">{{ sub[i] }}</div>
              </v-col>
            </v-row> -->
          </div>
        </v-img>
      </v-carousel-item>
    </v-carousel>
    <div :style="titleStyle" class="contact-section__header">
      <div class="contact__title">We available for you</div>
      <div class="contact__subtitle">
        Would you like more information or individual advice?
      </div>
      <div class="contact__subtitle">We look forward to helping you.</div>
    </div>

    <div class="contact-section__profile">
      <div class="contact-person">
        <div class="profile-container">
          <div class="profile__pict">
            <v-img
              style="border-radius: 5px"
              :src="require('~/assets/images/practice/profile.jpg')"
              height="100%"
              width="100%"
              position="top"
            ></v-img>
          </div>
          <div class="profile__detail">
            <div class="profile__name">Dr. med. Nidal Toman</div>
            <div class="profile__title">
              Specialist in aesthetic & plastic surgery
            </div>
          </div>
        </div>
        <div class="profile__link" @click="gotoProfile">know more</div>
      </div>
      <!-- <div class="contact-person">
        <div class="profile-container">
          <div class="profile__pict"></div>
          <div class="profile__detail">
            <div class="profile__name">Ms. Haase</div>
            <div class="profile__title">Management assistant</div>
          </div>
        </div>
      </div> -->
      <div class="contact-description text-h6 mt-10">
        Our modern practice for aesthetic and cosmetic treatments is located in
        the middle of Berlin City (West). The outpatient treatments are carried
        out by Dr. Nidal Toman and his team on their own premises. You will feel
        comfortable with us!
      </div>
    </div>

    <div class="contact-section__detail">
      <!-- <div class="message-container">
        <img :src="MessageIcon" alt="Message" />
      </div> -->

      <v-row id="contact-form" class="contact-address-container">
        <v-col>
          <div class="contact-detail__title">Contact Us</div>
          <div class="contact-detail__subtitle">
            You can make appointments with us using our contact form or by
            telephone.
          </div>

          <div class="contact-detail__etc">
            <div class="detail-info">Uhlandstrasse 33 10719 Berlin</div>
            <div class="detail-info">(+49) 030 21 300 8000</div>
            <div class="detail-info">info@nidal-toman.de</div>
            <div class="detail-info">www.nidal-toman.de</div>
          </div>
        </v-col>

        <v-col>
          <form class="contact-form">
            <input class="contact-input-text" placeholder="Your name" />
            <input class="contact-input-text" placeholder="Your email" />
            <input class="contact-input-text" placeholder="Your phone number" />
            <input
              class="contact-input-text"
              placeholder="Reason Contactin use"
            />
            <textarea
              class="contact-input-text text-area-style"
              placeholder="Message"
            />
            <button class="submit-button">Submit</button>
          </form>
        </v-col>
      </v-row>
    </div>
    <Map />
  </div>
</template>

<script>
import Map from './Map'
import MessageIcon from '~/assets/icons/message.svg'
import { finalpath } from '~/helpers'

export default {
  components: {
    Map,
  },
  data() {
    return {
      MessageIcon,
      id: 'contact',
      indexList: [1, 2, 3, 4, 5, 6],
    }
  },
  computed: {
    locale() {
      return this.$store.state.locale
    },
    themes() {
      return this.$vuetify.theme.themes
    },
    slides() {
      return this.indexList.map((index) =>
        this.$t(`practice.content.title${index}`)
      )
    },
    sub() {
      return this.indexList.map((index) =>
        this.$t(`practice.content.subtitle${index}`)
      )
    },
    imagePaths() {
      return this.indexList.map((index) => `praxis${index}.jpg`)
    },
    titleStyle() {
      return {
        color: this.themes.light.primary4,
      }
    },
  },
  methods: {
    gotoProfile() {
      this.$router.push({ path: finalpath(this.locale, 'profile') })
    },
  },
}
</script>

<style>
.submit-button {
  background: #cca43b;
  border-radius: 2px;
  height: 40px;
  font-size: 14px;
  line-height: 19px;
  /* color: #6c756b; */
  color: #ffffff;
  margin-top: 22px;
}

.contact-form {
  display: flex;
  flex-direction: column;
}

.contact-input-text {
  border: 0.5px solid #a2a2a2;
  box-sizing: border-box;
  border-radius: 2px;
  height: 42px;
  font-size: 14px;
  line-height: 19px;
  color: #a2a2a2;
  padding: 0px 20px 0px 20px;
  outline: none;
}

.text-area-style {
  padding: 15px 20px;
  height: 100px;
}

.contact-input-text:not(:first-child) {
  margin-top: 10px;
}

.contact-input-text:hover {
  border-color: #cca43b;
}

.contact-detail__title {
  font-weight: 800;
  font-size: 36px;
  line-height: 49px;
  /* color: #6c756b; */
}

.contact-detail__subtitle {
  font-size: 14px;
  line-height: 19px;

  color: #a2a2a2;

  max-width: 250px;
}

.detail-info:not(:first-child) {
  margin-top: 10px;
}

.contact-detail__etc {
  margin-top: 75px;
}

.contact-section__detail {
  display: flex;
  background: #fcfcfc;
  padding: 120px 0px 0px 140px;
}

.message-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 140px;
  width: 120px;
  background: #cca43b;
}

.contact-address-container {
  padding: 60px;
  background: #fff;
}

.contact-section__header {
  padding: 70px 140px 0px 140px;
  font-weight: 300;
  font-size: 24px;
  line-height: 33px;

  position: absolute;
  left: 30px;
  top: 100px;
  /* color: #868585; */
}

.contact__title {
  font-weight: 800;
  font-size: 96px;
  line-height: 131px;
  font-family: Butler;
  /* color: #6c756b; */
}

.contact__subtitle {
  margin-left: 500px;
}

.contact-section__profile {
  padding: 140px;
}

.contact-person {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.profile__name {
  font-weight: 500;
  font-size: 48px;
  line-height: 66px;
  color: #494949;
}

.profile__title {
  font-size: 24px;
  line-height: 33px;

  color: #494949;
}

.profile__link {
  cursor: pointer;
}

.profile-container {
  display: flex;
  align-items: center;
}

.profile__detail {
  margin-left: -35px;
  z-index: 1;
}

.profile__pict {
  height: 200px;
  width: 200px;
  background: grey;
  border-radius: 5px;
}

.contact-person:not(:first-child) {
  margin-top: 110px;
}

.carousel-dark {
  background: rgba(0, 0, 0, 0.3);
}
</style>
