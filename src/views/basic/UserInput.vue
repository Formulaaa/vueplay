<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2022-09-16 18:12:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-16 18:33:47
-->
<template>
    <a-typography-title :level="2">{{text}}</a-typography-title>
    <a-divider></a-divider>

    <a-space size="middle">
        <a-button type="primary" @click="reverseMessage">点击翻转文字</a-button>
        <a-button type="ghost" @click="appendMessage">点击增加文字增加!</a-button>
        <a-button type="link" href="https://vuejs.org" @click.prevent="notify">阻止浏览器事件</a-button>
    </a-space>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import { message } from 'ant-design-vue';
import 'ant-design-vue/es/message/style/css';

const text = ref('hello world');

function reverseMessage() {
    text.value = text.value.split('').reverse().join('')
}
function appendMessage() {
    text.value = text.value + '!'
}

function notify() {
    message.success("阻止了浏览器默认事件",2);
}
</script>

<style scoped>

</style>