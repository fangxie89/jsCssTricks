<template>
  <div>
    <div class="card">
        <img class="face" src="../../../assets/images/11/images.png" alt="face" />
        <p class="back">
            <span>Back side</span>
        </p>
    </div>
  </div>
</template>

<script setup>

</script>
<style scoped>
    .card {
        position: relative;
    }
    .face {
        position: absolute;
        height: 225px;
        width: 225px;
        transition: .5s;
        backface-visibility: hidden;
    }
    .back {
        position: absolute;
        height: 225px;
        width: 225px;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: rotateY(180deg);
        transition: .5s;
        backface-visibility: hidden;
        background-color: #000;
        color: #fff;
    }
    .card:hover .face {
        transform: rotateY(-180deg);
    }
    .card:hover .back {
        transform: rotateY(0);
    }
</style>