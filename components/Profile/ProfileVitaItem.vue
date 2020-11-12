<template>
  <div class="vita-item__container">
    <div class="item__year">{{ year }}</div>
    <div class="item__symbol">
      <div class="circle" />
      <div class="line" />
    </div>
    <div class="item__details">
      <div class="item__title">{{ title }}</div>
      <div class="item__subtitle">
        {{ `"${subtitle}"` }}
      </div>
      <div class="item__place">
        {{ place }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['year', 'title', 'subtitle', 'place'],
}
</script>

<style scoped>
.vita-item__container {
  width: 100%;
  display: grid;
  grid-template-columns: 170px 100px calc(100% - 270px);
  margin-top: 20px;
}

.item__symbol {
  display: flex;
  align-items: center;
  height: 23px;
  padding-top: 5px;
}

.circle {
  height: 18px;
  width: 18px;
  border-radius: 12px;
  background: #6c756b;
}

.line {
  height: 1px;
  width: 22px;
  background: #6c756b;
}

.item__title {
  font-weight: 800;
  font-size: 24px;
  line-height: 33px;
  text-align: justify;

  color: #6c756b;
}

.item__subtitle {
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  text-align: justify;

  color: #828282;
}

.item__place {
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  text-align: justify;

  color: #6c756b;
}

.item__year {
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  text-align: justify;
  color: #828282;
}
</style>
