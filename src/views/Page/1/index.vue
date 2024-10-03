<template>
    <div>
        <h1>using prefix # to declare private fields on js class</h1>
        <CodeContainer :code="formattedCode">
        </CodeContainer>
    </div>
</template>

<script setup>
import CodeContainer from '@/components/CodeContainer.vue';
import { ref } from 'vue';

const rawCode = `
                class A {
                #privateField = 0;
                constructor() {
                this.#privateField = 1;
                }
                }
                var a = new A();
                // console.log(a.#privateField);
                // SyntaxError: Private field '#privateField' must be declared in an enclosing class
                `;

const formattedCode = ref(rawCode.trim());
</script>
