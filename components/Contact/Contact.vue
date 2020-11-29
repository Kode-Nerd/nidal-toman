<template>
  <div id="contact" class="contact-wrapper">
    <div class="contact-section__header">
      <div class="contact__title">We available for you</div>
      <div class="contact__subtitle">
        Would you like more information or individual advice?
      </div>
      <div class="contact__subtitle">We look forward to helping you.</div>
    </div>

    <div class="contact-section__profile">
      <div class="contact-person">
        <div class="profile-container">
          <div class="profile__pict"></div>
          <div class="profile__detail">
            <div class="profile__name">Dr. med. Nidal Toman</div>
            <div class="profile__title">
              Specialist in aesthetic & plastic surgery
            </div>
          </div>
        </div>
        <div class="profile__link">know more</div>
      </div>
      <div class="contact-person">
        <div class="profile-container">
          <div class="profile__pict"></div>
          <div class="profile__detail">
            <div class="profile__name">Ms. Haase</div>
            <div class="profile__title">Management assistant</div>
          </div>
        </div>
      </div>
    </div>

    <div class="contact-section__detail">
      <div class="message-container">
        <img :src="MessageIcon" alt="Message" />
      </div>

      <v-row class="contact-address-container">
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
  </div>
</template>

<script>
import MessageIcon from '~/assets/icons/message.svg'

export default {
  data() {
    return {
      MessageIcon,
    }
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
  color: #6c756b;
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
  color: #6c756b;
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
  padding: 140px 140px 0px 140px;
  font-weight: 300;
  font-size: 24px;
  line-height: 33px;

  color: #868585;
}

.contact__title {
  font-weight: 800;
  font-size: 96px;
  line-height: 131px;
  color: #6c756b;
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

.profile-container {
  display: flex;
  align-items: center;
}

.profile__detail {
  margin-left: -35px;
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
</style>
