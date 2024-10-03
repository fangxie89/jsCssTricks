<template>
  <div class="container">
    <h1>shadow</h1>
  </div>
</template>

<script setup>

</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  background: #aaa;
  z-index: -2;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 120px;
    font-weight: 700;
    color: #fff;
    position: relative;

    &::before {
      content: "shadow";
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      color: #000;
      transform: translate(-50px, 21px) scaleY(0.5) skew(50deg);
      filter: blur(5px);
      -webkit-mask-image: linear-gradient(transparent, #000);
    }
  }
}
</style>
