<template>
  <div class="wrap">
    <div class="modal"></div>
  </div>
</template>

<script setup>

</script>
<style scoped>
    .wrap {
        background: url('@/assets/images/8/1.png') no-repeat;
        background-size: contain;
        width:100%;
        height:100%;
        margin: 0;
        position: relative;

        .modal {
            position: absolute;
            width: 100%;
            right: 0;
            height: 100%;
            top: 0;
            transition: width 2s;
            border-left: 0;

            backdrop-filter: grayscale(1);
        }

        &:hover .modal {
            width: 0;
            border-left: 5px solid #333;

        }
    }
</style>
