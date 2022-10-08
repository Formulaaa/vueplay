<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2022-10-08 14:41:28
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-10-08 16:09:06
-->
<template>
    <a-row :gutter="10">
        <a-col :span="12">
            <a-textarea v-model:value="input" autosize :bordered="false">
            </a-textarea>
        </a-col>
        <a-col :span="12">
            <div v-html="output"></div>
        </a-col>
    </a-row>
</template>

<script setup lang="ts">
import {marked} from "marked"
// import { debounce } from 'lodash-es'
import { ref, computed } from 'vue';
// import type { ChangeEvent } from "ant-design-vue/es/_util/EventInterface";
// let rendererMD = new marked.Renderer();
// marked.setOptions({
//     renderer: rendererMD,
//     gfm: true,
//     tables: true,
//     breaks: false,
//     pedantic: false,
//     sanitize: false,
//     smartLists: true,
//     smartypants: false
// });
const input = ref('## Hello');
const output = computed(() => {
    // console.log(input.value);
    return marked(input.value);
})
// const update = debounce((e:ChangeEvent) => {
//     input.value = e.target.value || ''
// },100)

</script>

<style scoped>

</style>