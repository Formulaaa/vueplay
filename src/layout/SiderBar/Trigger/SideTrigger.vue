<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2022-09-16 19:05:31
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-16 19:25:49
-->
<template>
    <div style="border-top:1px solid #f0f0f0;">
        <menu-unfold-outlined v-if="collapsed" />
        <menu-fold-outlined v-else />
    </div>
</template>

<script setup lang="ts">
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons-vue';
const props = defineProps<{ collapsed: boolean }>();

</script>

<style scoped>

</style>