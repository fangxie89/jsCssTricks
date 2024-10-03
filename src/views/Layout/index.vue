<script setup>
    import catalog from '@/config/catalog.js'
    import { shallowRef, ref } from 'vue'

    const selectedComponent = shallowRef(null);
    const activeIndex = ref(0);

    const handleClick = async (index) => {
        selectedComponent.value = (await import(`@/views/Page/${index}/index.vue`)).default;
        activeIndex.value = index;
    }
</script>

<template>
    <div class="container">
        <div class="catalog">
            <li v-for="item in catalog" :key="item.index" :class="activeIndex === item.index ? 'active' : ''">
                <button @click="() => handleClick(item.index)">{{ item.name }}</button>
            </li>
        </div>
        <div class="content">
            <component :is="selectedComponent" />
        </div>
    </div>
</template>

<style scoped>
    .container {
        display: flex;
        height: 100vh;

        .catalog {
            width: 200px;
            background-color: #f0f0f0;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;

            li {
                margin-bottom: 10px;
                list-style: none;

                &.active {
                    button {
                        background-color: #ccc;
                    }
                }
            }
        }

        .content {
        width: 1200px;
        flex: 1;
        padding: 20px;
        display: flex;
        justify-content: center;
    }
    }
</style>