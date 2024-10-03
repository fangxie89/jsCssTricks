<template>
    <div class="code-container">
        <pre><code v-html="highlightCode"></code></pre>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/github.css';

hljs.registerLanguage('javascript', javascript);

let highlightCode = ref('');

const props = defineProps({
    code: {
        type: String,
        required: true
    }
});

highlightCode.value = hljs.highlight(props.code, { language: 'javascript' }).value;


</script>

<style scoped>
.code-container {
    background-color: #f5f5f5;
    padding: 15px;
    border-radius: 5px;
    border: 1px solid #ddd;
    overflow-x: auto;
}

pre {
    margin: 0;
    white-space: pre-wrap;
    word-wrap: break-word;
}

code {
    font-size: 14px;
    color: #333;
}
</style>