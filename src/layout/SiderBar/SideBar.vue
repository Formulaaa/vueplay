<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2022-09-14 15:19:12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-16 20:45:22
-->
<template>
  <a-layout-sider theme="light" v-model:collapsed="collapsed" collapsible>
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