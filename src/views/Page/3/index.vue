<template>
  <div class="pageContainer">
    <p>differece between parseInt() and Math.floor()</p>
    <CodeContainer :code="formattedCode"/>
    <div>
        <img src="@/assets/images/3/3.png"/>
        <p>parseInt rounds towards zero, while Math.floor rounds towards the left on the number line. This causes parseInt to produce errors when dealing with negative numbers in the context of generating random numbers.</p>
    </div>
  </div>
</template>

<script setup>
import CodeContainer from '@/components/CodeContainer.vue';
import { ref } from 'vue';

const rawCode = `
                function random(min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
                }
                `;

const formattedCode = ref(rawCode.trim());
</script>
<style scoped>

</style>