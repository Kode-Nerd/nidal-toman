<template>
  <div class="outer__dot">
    <div class="inner__dot"></div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.outer__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  fill-opacity: 0%;
  border: solid 0px red;
  box-sizing: content-box;
  position: absolute;
}

.outer__dot:hover {
  width: 20px;
  height: 20px;
  border: solid 1px red;
  transition: 200ms;
  margin-top: calc(5px - 10px);
  margin-left: calc(5px - 10px);
}

.inner__dot {
  position: absolute;
  top: calc(50% - 2.5px);
  left: calc(50% - 2.5px);
  width: 5px;
  height: 5px;
  background: red;
  border-radius: 50%;
}
</style>
