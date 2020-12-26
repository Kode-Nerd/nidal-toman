<template>
  <div class="vertical-navigation__container">
    <div
      class="item__container"
      :class="{ active: active === 'faceHead' }"
      @click="active = 'faceHead'"
    >
      <div class="item__title">Face and Head</div>
    </div>
    <div
      class="item__container"
      :class="{ active: active === 'chest' }"
      @click="active = 'chest'"
    >
      <div class="item__title">Chest area</div>
    </div>
    <div
      class="item__container"
      :class="{ active: active === 'body' }"
      @click="active = 'body'"
    >
      <div class="item__title">Body</div>
    </div>
    <div
      class="item__container"
      :class="{ active: active === 'outpatient' }"
      @click="active = 'outpatient'"
    >
      <div class="item__title">Outpatient treatment</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 'faceHead',
    }
  },
}
</script>

<style scoped>
.vertical-navigation__container {
  margin-left: 50px;
}

.item__container {
  display: flex;
  align-items: center;
  padding: 8px 15px;
  border-left: 1px solid #c4c4c4;
  cursor: pointer;
}

.item__title {
  margin-right: 10px;
}

.active .item__title {
  font-weight: 700;
}

.active {
  border-left: 3px solid #c4c4c4;
}
</style>
