<template>
  <div class="page-container">
    <div class="text-area">
        <span>F</span>
        <span>O</span>
        <span>L</span>
        <span>L</span>
        <span>O</span>
        <span>W</span>
        <span>M</span>
        <span>E</span>
    </div>
  </div>
</template>

<script setup>

</script>
<style scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .text-area {
        background: #1e1f25;
        height: 100vh;
        width: 1200px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 4.5em;
        font-weight: bold;
    }
    span {
        color: #faebd7;
        animation: textShadow 1s ease-in-out infinite alternate;
    }

    span:nth-child(n + 2) {
        animation-delay: 0.2s;
    }

    span:nth-child(n + 3) {
        animation-delay: 0.4s;
    }

    span:nth-child(n + 4) {
        animation-delay: 0.6s;
    }

    span:nth-child(n + 5) {
        animation-delay: 0.8s;
    }

    span:nth-child(n + 6) {
        animation-delay: 1s;
    }

    span:nth-child(n + 7) {
        animation-delay: 1.2s;
    }
    @keyframes textShadow {
        to {
            color: #ff0266;
            text-shadow: 20px 0 70px #ff0266;
        }
    }
</style>