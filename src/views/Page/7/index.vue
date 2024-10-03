<template>
    <div>
        <h1>Closure vulnerability issue.</h1>
        <CodeContainer :code="formattedCode"></CodeContainer>
        <p>how to modify obj without modifing the code</p>
        <CodeContainer :code="formattedCode1"></CodeContainer>
    </div>
</template>

<script setup>
import CodeContainer from '@/components/CodeContainer.vue';
import { ref } from 'vue';

const rawCode = `
                var o = (function () {
                    var obj = {
                        a: 1,
                        b: 2
                    };
                    return {
                        get: function (k) {
                            return obj[k];
                        }
                    }
                })();
                `;
const rawCode1 = `
                Object.defineProperty(Object.prototype, 'c', {
                    get() {
                        return this;
                    }
                })
                var obj2 = o.get('c');
                obj2.a = 3;
                `;

const formattedCode = ref(rawCode.trim());
const formattedCode1 = ref(rawCode1.trim());
</script>
