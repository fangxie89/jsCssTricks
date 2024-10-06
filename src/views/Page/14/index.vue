<template>
    <div>
        <h1>permission combination and determination</h1>
        <CodeContainer :code="formattedCode"> </CodeContainer>
        <p>To combine permission:</p>
        <p>const result = CREATE | DELETE</p>
        <p>To determine permission:</p>
        <p>(result & CREATE) === CREATE</p>
    </div>
</template>

<script setup>
import CodeContainer from '@/components/CodeContainer.vue';
import { ref } from 'vue';

const rawCode = `
                const CREATE = 0b0001;
                const READ = 0b0010;
                const UPDATE = 0b0100;
                const DELETE = 0b1000;
                `;

const formattedCode = ref(rawCode.trim());
</script>
