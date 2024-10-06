<template>
    <div>
        <input type="file" @change="handleFileChange" />

        <div class="image-contianer">
            <div class="shadow-img" :style="{
                width: `${generatedimage.width}px`,
                height: `${generatedimage.height}px`
            }">
            <div class="inner" :style="{
                boxShadow: generatedimage.shadowCSSFragment.join(', ')
            }"></div>
         </div>
         <button @click="createImg">create image</button>
        </div>
         <p>failed! the image import has 255 on all point.</p>
    </div>
</template>

<script setup>

import { reactive, ref } from 'vue';
import { loadImage, generateImg } from '@/utils/11/shadowImage'

let importedImage = ref(null);
let generatedimage = reactive({
    width: 0,
    height: 0,
    shadowCSSFragment: [],
    shadowCSSHover: []
})
const handleFileChange = async (e) => {
    console.log(e.target.files[0]);
    importedImage.value = await loadImage(e.target?.files[0]);
}

const createImg = async () => {
    const imageData = await generateImg(importedImage.value);
    Object.assign(generatedimage, imageData);
}

</script>

<style scoped>
    image-contianer {
        position: relative;
        width: 300px;
        height: 300px;
        margin-top: 20px;

        .shadow-img {
            .inner {
                width: 1px;
                height: 1px;
                transition: 1.5s;
            }
        }
    }
</style>
