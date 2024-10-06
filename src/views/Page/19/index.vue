<template>
  <div>
    <input class="version1" type="text" placeholder="Enter version 1" v-model="version1"/>
    <input class="version2" type="text" placeholder="Enter version 2" v-model="version2"/>
    <button @click="compareVersions">Compare Versions</button>
    <div class="result">{{ result === 1 ? 'Version 1 is greater than Version 2' : result === -1 ? 'Version 1 is less than Version 2' : 'Version 1 is equal to Version 2'}}</div>
    <CodeContainer :code="formattedCode"></CodeContainer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CodeContainer from '@/components/CodeContainer.vue';

let result = ref(null);
let version1 = ref(null);
let version2 = ref(null);

function* walk(str) {
    let part = '';
    let terminal = ['.', '-'];
    for ( var i = 0; i < str.length; i++) {
        if (terminal.includes(str[i])) {
            yield part;
            part = '';
        } else {
            part += str[i];
        }
    }
    if (part) {
        yield part;
    }
    }
    
    function compareVersions() {
    const v1 = walk(version1.value);
    const v2 = walk(version2.value);
    
    let part1 = v1.next();
    let part2 = v2.next();
    
    while (!part1.done || !part2.done) {
        // Convert empty parts to 0 to handle version lengths that differ
        const num1 = part1.done ? 0 : parseInt(part1.value, 10);
        const num2 = part2.done ? 0 : parseInt(part2.value, 10);
        
        if (num1 > num2) { 
            result.value = 1;
            return;
        }
        if (num1 < num2) {
            result.value = -1;
            return;
        }

        part1 = v1.next();
        part2 = v2.next();
    }
    
    result.value = 0; // Versions are equal
}

const rawCode = `
                function* walk(str) {
    let part = '';
    let terminal = ['.', '-'];
    for ( var i = 0; i < str.length; i++) {
        if (terminal.includes(str[i])) {
            yield part;
            part = '';
        } else {
            part += str[i];
        }
    }
    if (part) {
        yield part;
    }
    }
    
    function compareVersions(version1, version2) {
    const v1 = walk(version1);
    const v2 = walk(version2);
    
    let part1 = v1.next();
    let part2 = v2.next();
    
    while (!part1.done || !part2.done) {
        // Convert empty parts to 0 to handle version lengths that differ
        const num1 = part1.done ? 0 : parseInt(part1.value, 10);
        const num2 = part2.done ? 0 : parseInt(part2.value, 10);
        
        if (num1 > num2) { 
            result.value = 1;
            return;
        }
        if (num1 < num2) {
            result.value = -1;
            return;
        }

        part1 = v1.next();
        part2 = v2.next();
    }
    
    result.value = 0; // Versions are equal
}
                `;

const formattedCode = ref(rawCode.trim());
</script>
