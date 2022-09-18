<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2022-09-14 15:18:44
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-18 11:23:51
-->
<template>
    <a-layout>
        <top-bar></top-bar>
        <a-layout :style="{marginTop:'64px'}">
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