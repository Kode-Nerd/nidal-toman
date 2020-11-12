<template>
  <div class="publication-item__container">
    <div class="publication__title">
      {{ title }}
    </div>
    <div class="publication__detail author">
      {{ subtitle }}
    </div>
    <div class="publication__detail">
      {{ detail }}
    </div>
    <div class="publication__index">{{ index }}</div>
  </div>
</template>

<script>
export default {
  props: ['title', 'subtitle', 'detail', 'index'],
}
</script>

<style scoped>
.publication-item__container {
  margin-top: 30px;
}

.publication__title {
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  color: #ffffff;
  padding: 0px 20px 0px 5px;
}

.publication__detail {
  font-weight: 300;
  font-size: 18px;
  line-height: 25px;

  color: #ffffff;
  padding: 0px 20px 0px 5px;
}

.author {
  font-style: italic;
}

.publication__index {
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid #fff;
  color: #fff;

  font-size: 12px;
  line-height: 16px;
}
</style>
