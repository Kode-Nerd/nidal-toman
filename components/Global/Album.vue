<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="(item, i) in list" :key="i">
      <!-- SLIDE -->
      <ImageBlock :src="item" height="55vh" />
    </swiper-slide>
    <div slot="button-prev" class="swiper-button-prev"></div>
    <div slot="button-next" class="swiper-button-next"></div>
  </swiper>
</template>

<script>
import ImageBlock from '~/components/Global/ImageBlock'
export default {
  components: {
    ImageBlock,
  },
  props: {
    list: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
        grabCursor: true,
        autoplay: {
          delay: 20000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
}
</script>

<style scoped>
.swiper-slide {
  width: unset;
  height: unset;
  /* background: #ccc; */
}
.swiper-button-prev {
  color: black;
}
.swiper-button-next {
  color: black;
}
</style>
