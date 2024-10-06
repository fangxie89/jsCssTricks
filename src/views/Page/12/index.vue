<template>
  <div class="pageContainer">
    <div class="olympic-rings">
        <span class="ring"></span>
        <span class="ring"></span>
        <span class="ring"></span>
        <span class="ring"></span>
        <span class="ring"></span>
    </div>
  </div>
</template>

<script setup>

</script>
<style scoped>
.pageContainer {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.olympic-rings {
    width: 400px;
    transform-style: preserve-3d;
    perspective: 500px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.ring {
    width: 100px;
    height: 100px;
    border: 10px solid #3884c2;
    border-radius: 50%;
    margin: 0 5px;
}

.ring:nth-child(2) {
    border-color: #000;
    transform: translateZ(-1px) rotateX(2deg)
}
.ring:nth-child(3) {
    border-color: #d83a31;
    transform: translateZ(-2px) rotateX(4deg);
}
.ring:nth-child(4) {
    border-color: #f9d549;
    transform: translateY(-50px) rotateX(1deg);
    transform-origin: center 25%;
}
.ring:nth-child(5) {
    border-color: #55ac58;
    transform: translateY(-50px) translateZ(1px) rotateX(3deg);
}

</style>