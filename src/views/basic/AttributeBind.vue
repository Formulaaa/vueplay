<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2022-09-17 15:26:06
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-17 16:26:02
-->
<template>
    <a-typography>
        <a-typography-title :level="2" :title="message">
            想对你说的话
        </a-typography-title>
        <a-typography-paragraph :class="{red:isRed}" @click="toggleRed">
            我给你的爱深埋在美索不达米亚平原 当古文明只剩下难解的预言
        </a-typography-paragraph>
        <a-typography @click="toggleColor">
            <a-typography-text strong :style="{color}">
                传说就成了永垂不朽的诗篇
            </a-typography-text>
        </a-typography>
    </a-typography>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const message = ref<string>("Hello World");
const isRed = ref<boolean>(false);
const color = ref<string>("blue");

function toggleRed() {
    isRed.value = !isRed.value;
}
function toggleColor() {
    color.value = color.value === 'blue' ? 'green' : 'blue';
}

</script>

<style scoped>
.red {
    color: red;
}
</style>