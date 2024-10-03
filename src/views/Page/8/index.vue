<template>
    <div>
        <h1>Count the frequency of each character in the string.</h1>
        <CodeContainer :code="formattedCode">
        </CodeContainer>
        <div>
            <input type="text" v-model="str" @input="debouncedMethod" />
            <p>result: {{ calculateFrequency(str) }}</p>
        </div>
    </div>
</template>

<script setup>
import CodeContainer from '@/components/CodeContainer.vue';
import { ref } from 'vue';
import { debounce } from 'lodash';

const rawCode = `
                var result = str.split('').reduce((acc, char) => (acc[char]++ || (acc[char] = 1), acc), {});
                `;

const formattedCode = ref(rawCode.trim());

let str = ref('');
const debouncedMethod = debounce(() => {
    calculateFrequency();
});

const calculateFrequency = () => str.value.split('').reduce((acc, char) => (acc[char]++ || (acc[char] = 1), acc), {});
</script>
