<template>
    <div class="page-container">
        <div class="img-container">
            <div class="img-item"></div>
            <div class="img-item"></div>
            <div class="img-item"></div>
            <div class="img-item"></div>
            <div class="img-item"></div>
            <div class="img-item"></div>
            <div class="img-item"></div>
            <div class="img-item"></div>
            <div class="img-item"></div>
        </div>
    </div>
</template>

<script setup>

</script>
<style scoped>
    .page-container {
        width: 100%;
        height: 100%;
        background-color: #171717;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .img-container {
        width: 300px;
        height: 300px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }

    .img-item {
        box-shadow: inset 0 0 0 1px #fff;
        transition: 0.5s;
        background-size: 300px 300px;
        background-image: url(../../../assets/images/16/1.png);
        position: relative;
    }

    .img-item:nth-child(3n+1) {
        left:-20px;
        background-position-x: 0;
    }

    .img-item:nth-child(3n+2) {
        left:0;
        background-position-x: -100px;
    }

    .img-item:nth-child(3n+3) {
        left:20px;
        background-position-x: -200px;
    }

    .img-item {
        top: 20px;
        background-position-y: -200px;
    }

    .img-item:nth-child(-n + 6) {
        top: 0;
        background-position-y: -100px;
    }

    .img-item:nth-child(-n + 3) {
        top: -20px;
        background-position-y: 0;
    }

    .img-container:hover .img-item {
        top: 0;
        left: 0;
        box-shadow: inset 0 0 0 0 #fff;
    }
</style>