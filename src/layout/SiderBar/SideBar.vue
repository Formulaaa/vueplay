<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2022-09-14 15:19:12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-18 11:17:30
-->
<template>
  <a-layout-sider theme="light" v-model:collapsed="collapsed" collapsible
    :style="{position: 'fixed', zIndex: 1,height:'100vh',overflow:'auto'}">
    <side-menu></side-menu>
    <template #trigger>
      <side-trigger :collapsed="collapsed"></side-trigger>
    </template>
  </a-layout-sider>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import SideTrigger from './Trigger/SideTrigger.vue';
import SideMenu from './Menu/SideMenu.vue';

let collapsed = ref<boolean>(false);
</script>

<style scoped>

</style>