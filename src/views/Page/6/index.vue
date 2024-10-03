<template>
  <div class="pageContainer">
    <h1 class="type1">TEXT STROKE</h1>
    <span class="description">Uniform stroke,text can be transparent.</span>
    <h1 class="type2">TEXT STORKE</h1>
    <span class="description">Good compatibility.</span>
  </div>
</template>

<script setup>

</script>

<style scoped>
    .pageContainer {
        background: #000;
    }
    .type1 {
        font-size: 100px;
        font-weight: 700;
        color: red;
        -webkit-text-stroke: 2px #fff;
    }

    .type2 {
       text-shadow:
        0 2px #fff,
        0 -2px #fff,
        -2px 2px #fff,
        2px 2px #fff,
        -2px 0 #fff,
        2px 0 #fff;
        font-size: 100px;
        font-weight: 700;
        color: red;
    }

    .description {
        text-align: center;
        color: #fff;
        font-size: 20px;
        font-weight: 700;
    }
</style>
