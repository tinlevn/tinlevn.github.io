<template>
  <div class="group">
    <div class="div-2"></div>
    <div class="div-3"></div>
    <div class="div-4"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Group",
});
</script>

<style>
.group {
  height: 48px;
  left: 870px;
  position: absolute;
  top: 4742px;
  width: 181px;
}

.group .div-2 {
  background-image: url(/static/img/image-2.png);
  background-position: 50% 50%;
  background-size: cover;
  height: 43px;
  left: 0;
  position: absolute;
  top: 2px;
  width: 43px;
}

.group .div-3 {
  background-image: url(/static/img/image-3.png);
  background-size: 100% 100%;
  height: 48px;
  left: 63px;
  position: absolute;
  top: 0;
  width: 54px;
}

.group .div-4 {
  background-image: url(/static/img/image-4.png);
  background-position: 50% 50%;
  background-size: cover;
  height: 44px;
  left: 136px;
  position: absolute;
  top: 2px;
  width: 44px;
}
</style>