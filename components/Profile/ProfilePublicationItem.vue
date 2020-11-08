<template>
  <div class="publication-item__container">
    <div class="publication__title">
      Emergency pre-hospital care of burn patients
    </div>
    <div class="publication__detail author">
      Thomas Muehlberger, Christian Ottoman, Nidal Toman, Adrian Daigeler,
      Marcus Lehnhardt
    </div>
    <div class="publication__detail">
      Emergency pre-hospital care of burn patients. The Surgeon 2010; 8:
      101-104.
    </div>
    <div class="publication__index">01</div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.publication__title {
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  color: #ffffff;
}

.publication__detail {
  font-weight: 300;
  font-size: 18px;
  line-height: 25px;

  color: #ffffff;
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
