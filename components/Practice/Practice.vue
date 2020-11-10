<template>
  <div class="wrapper">
    <NavigationHeader />
    <div class="practice__container" @wheel="handleScroll">
      <div class="practice__header">
        <div class="header__title">{{ $t('practice.title') }}</div>
        <div class="header__subtitle">
          {{ $t('practice.subtitle') }}
        </div>
      </div>

      <div class="practice__body">
        <div class="body__left-column">
          <div
            v-for="index in indexList"
            :key="`${index}-practice-content`"
            class="item"
          >
            <Item
              :image-path="`praxis${index}.jpg`"
              :index="`0${index}`"
              :title="$t(`practice.content.title${index}`)"
              :subtitle="$t(`practice.content.subtitle${index}`)"
              speed="2"
            />
          </div>
        </div>
        <div class="body__right-column">
          <div
            v-for="index in indexList"
            :key="`${index + 1}-practice-content`"
            class="item"
          >
            <Item
              :image-path="`praxis${index + 1}.jpg`"
              :index="`0${index + 1}`"
              :title="$t(`practice.content.title${index + 1}`)"
              :subtitle="$t(`practice.content.subtitle${index + 1}`)"
              speed="-2"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PracticeItem from './PracticeItem'
import NavigationHeader from '~/components/Global/NavigationHeader'

export default {
  components: {
    Item: PracticeItem,
    NavigationHeader,
  },
  data() {
    return {
      scrollYPosition: 0,
      indexList: [1, 3, 5],
    }
  },
  methods: {
    handleScroll(e) {
      e.preventDefault()
      e.stopPropagation()

      const scrollOffset = e.deltaY / 5
      this.scrollYPosition += scrollOffset

      window.scrollTo(0, this.scrollYPosition)
    },
  },
}
</script>

<style scoped>
.wrapper {
  padding-top: 50px;
}

.practice__container {
  padding: 110px;
  scroll-behavior: smooth;
}

.header__title {
  font-weight: 800;
  font-size: 96px;
  line-height: 131px;
  color: #6c756b;
}

.header__subtitle {
  margin-top: 20px;
  font-size: 24px;
  line-height: 33px;
  color: #494949;
}

.practice__body {
  margin-top: 120px;
  display: grid;
  grid-template-columns: calc(50% - 50px) calc(50% - 50px);
  column-gap: 100px;
  padding-bottom: 400px;
}

.body__left-column > .item:not(:first-child) {
  margin-top: 250px;
}

.body__right-column > .item:not(:first-child) {
  margin-top: 250px;
}
</style>
