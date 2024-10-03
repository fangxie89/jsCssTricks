<template>
    <div class="pageContainer">
        <h1>use map to handle code branches</h1>
        <CodeContainer :code="formattedCode1" />
        <div>
            <p>To handle multi conditions branchs, always create a map for conditions. For complex cases, conditions can be separated out for easier maintenance</p>
        </div>
        <CodeContainer :code="formattedCode2" />
        <div>
            <p>For complicated conditions like: </p>
        </div>
        <CodeContainer :code="formattedCode3" />
        <div>
            <p>use tuples to separate conditions and results.</p>
        </div>
        <CodeContainer :code="formattedCode4" />
    </div>
</template>

<script setup>
import CodeContainer from '@/components/CodeContainer.vue';
import { ref } from 'vue';

const rawCode1 = `
                 function test(key) {
                 if(key === 1) {
                   console.log('value 1')
                   } else if (key === 2) {
                   console.log('value 2')
                   } else if (key === 3) {
                   console.log('value 3')
                   } else {
                   console.log('value 4')
                   }
                 }

                 test(1);
                  `;
const rawCode2 = `
                 function test(key) {
                 const map = {
                   1: () => console.log('value 1'),
                   2: () => console.log('value 2'),
                   3: () => console.log('value 3'),
                   4: () => console.log('value 4'),
                 }
                 map[key] && map[key]()
                 }

                 test(1);
                  `;

const rawCode3 = `
                 function test(key) {
                 if(key.includes('1')) {
                   console.log(key + 'value 1')
                   } else if (name.endsWith('2')) {
                   console.log(key + 'value 2')
                   } else if (key.length < 3) {
                   console.log('value 3')
                   } else {
                   console.log('value 4')
                   }
                 }

                 test(1);
                  `;
const rawCode4 = `
                 function test(key) {
                 const map = [
                    [
                        () => key.includes('1'),
                        console.log(key + 'value 1')
                    ],
                    [
                        name.endsWith('2'),
                        () => console.log(key + 'value 2')
                    ],
                    [
                        () => key.length < 3,
                        () => console.log('value 3')
                    ],
                 ]
                const target = map.find(m => m[0]());
                 if (target) {
                    target[1]();
                 } else {
                    console.log('value 4') 
                 }
                 }

                 test(1);
                  `;

const formattedCode1 = ref(rawCode1.trim());
const formattedCode2 = ref(rawCode2.trim());
const formattedCode3 = ref(rawCode3.trim());
const formattedCode4 = ref(rawCode4.trim());
</script>
<style scoped></style>