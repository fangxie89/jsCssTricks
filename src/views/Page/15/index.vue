<template>
    <div>
        <h1>hasChange </h1>
        <CodeContainer :code="formattedCode">
        </CodeContainer>
    </div>
</template>

<script setup>
import CodeContainer from '@/components/CodeContainer.vue';
import { ref } from 'vue';

const rawCode = `
                function hasChanged(x, y){
                    if (x === y) {
                        return x !== 0 || 1 / x === 1 / y;  // +0 === -0, but they are not identical
                    } else {
                        return x !== x && y !== y;  // isNaN is broken: it considers NaN equal to itself
                    }
                }
                `;

const formattedCode = ref(rawCode.trim());
</script>
