<template>
  <div class="published-item__container">
    <div class="published__title">
      {{ title }}
    </div>
    <div class="published__detail author">
      {{ author }}
    </div>
    <div class="published__detail">{{ detail }}</div>
    <div class="published__index">{{ index }}</div>
  </div>
</template>

<script>
export default {
  props: ['title', 'author', 'detail', 'index'],
}
</script>

<style scoped>
.published-item__container {
  margin-top: 30px;
}

.published__title {
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  color: #ffffff;
}

.author {
  font-style: italic;
}

.published__detail {
  font-weight: 300;
  font-size: 18px;
  line-height: 25px;

  color: #ffffff;
}

.published__index {
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid #fff;
  color: #fff;

  font-size: 12px;
  line-height: 16px;
}
</style>
