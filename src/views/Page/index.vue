<template>
    <div>
        Suspense>
      <template #default>
        <component :is="selectedComponent" />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
    </div>
</template>

<script setup>

import { useRoute } from 'vue-router';
import { ref } from 'vue';
const route = useRoute();
const selectedComponent = ref(null);
const index = route.params.id;
console.log(index);
// selectedComponent.value = (await import(`@/views/Page/${index}/index.vue`)).default;
</script>

