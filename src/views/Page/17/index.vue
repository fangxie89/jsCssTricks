<template>
    <div class="page-container" ref="pageContainer">
        <canvas id="bg"></canvas>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const pageContainer = ref(null);

onMounted(() => {
    const cvs = document.getElementById('bg');

    console.log(pageContainer.value.clientHeight);
    const width = pageContainer.value.clientWidth,
        height = pageContainer.value.clientHeight;

    cvs.width = width;
    cvs.height = height;

    const ctx = cvs.getContext('2d');

    const columnWidth = 20;

    const columnCount = Math.floor(window.innerWidth / columnWidth);

    const columnNextIndexes = new Array(columnCount).fill(1);

    const draw = () => {
        ctx.fillStyle = 'rgba(240, 240, 240, 0.1)';
        ctx.fillRect(0, 0, width, height);
        const fz = 20;
        ctx.fillStyle = getRandomColor();
        ctx.font = `${fz}px`;

        for (let i = 0; i < columnCount; i++) {
            const x = i * columnWidth;
            const y = fz * columnNextIndexes[i];
            ctx.fillText(getRamdomChar(), x, y);
            if (y > height && Math.random() > 0.99) {
                columnNextIndexes[i] = 1;
            } else {
                columnNextIndexes[i] = columnNextIndexes[i] + 1;
            }
        }
    }

    setInterval(draw, 40);
})


function getRandomColor() {
    const fontColors = [
        '#33B5E5',
        '#0099CC',
        '#AA66CC',
        '#9933CC',
        '#99CC00',
        '#669900',
        '#FFBB33',
        '#FF8800',
        '#FF4444',
        '#CC0000'
    ]
    return fontColors[Math.floor(Math.random() * fontColors.length)];
}

function getRamdomChar() {
    const str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return str[Math.floor(Math.random() * str.length)];
}
</script>

<style scoped>
    .page-container {
        width: 1500px;
        height: 100vh;
    }
</style>