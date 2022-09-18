<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2022-09-17 17:33:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-17 18:02:06
-->
<template>
    <a-space size="middle">
        <a-switch v-model:checked="show" checkedChildren="显示" unCheckedChildren="关闭"></a-switch>
        <a-button type="text" @click="addItem">增加</a-button>
        <a-button type="text" @click="popItem">删除</a-button>
        <a-button type="primary" @click="reverseList">翻转</a-button> 
    </a-space>
    <a-divider></a-divider>
    <a-typography-paragraph>
        <ul v-if="show && list.length !== 0">
            <li v-for="element in list" :key="element">{{element}}</li>
        </ul>
    </a-typography-paragraph>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const show = ref<boolean>(true);
const list = ref<number[]>([1, 2]);
function addItem() {
    list.value.push(list.value.length+1);
}
function popItem() {
    list.value.pop();
}
function reverseList() {
    list.value.reverse();
}
</script>

<style scoped>

</style>