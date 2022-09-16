<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2022-09-13 17:55:07
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-16 18:06:32
-->
<template>
    <a-typography-title>{{message}}</a-typography-title>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const message = ref('hello world');
</script>

<style scoped>

</style>