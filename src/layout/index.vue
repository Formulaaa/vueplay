<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2022-09-14 15:18:44
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-14 15:28:13
-->
<template>
    <a-layout class="page">
        <top-bar></top-bar>
        <a-layout>
            <side-bar></side-bar>
            <content-area></content-area>
        </a-layout>
    </a-layout>
</template>

<script setup lang="ts">
import TopBar from './TopBar/TopBar.vue';
import ContentArea from './ContentArea/ContentArea.vue';
import SideBar from './SiderBar/SideBar.vue';
</script>

<style scoped>

</style>