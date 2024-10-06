<template>
  <div>
    <div class="avatar"></div>
  </div>
</template>

<script setup>

</script>

<style scoped>
    .avatar {
        background: url('../../../assets/images/18/crop-circle.png') no-repeat;
        width: 300px;
        height: 300px;
        position: relative;
    }
    .avatar::before, .avatar::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        border-radius: 50%;
    }
    .avatar::before {
        background: rgba(0,0,0,0.5);
    }
    .avatar::after {
        background: inherit;
        clip-path: circle(0% at 50% 50%);
        transition: 0.5s;
    }
    .avatar:hover::after {
        clip-path: circle(100% at 50% 50%);
    }
</style>