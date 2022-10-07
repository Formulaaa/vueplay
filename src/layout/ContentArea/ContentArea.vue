<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2022-09-14 15:22:12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-20 13:30:25
-->
<template>
  <a-layout :style="{marginLeft:'201px',padding:'24px 16px 16px'}">   
    <!-- <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>Home</a-breadcrumb-item>
      <a-breadcrumb-item>List</a-breadcrumb-item>
      <a-breadcrumb-item>App</a-breadcrumb-item>
    </a-breadcrumb> -->
    <a-layout-content :style="{ background: '#fff',overflow: 'visiable',padding:'24px',minHeight:'75vh' }">
      <router-view></router-view>
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center'}">
      Powered by 👑Formula
    </a-layout-footer>
  </a-layout>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<style scoped>

</style>