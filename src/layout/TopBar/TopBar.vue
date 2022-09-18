<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2022-09-14 15:19:18
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-18 10:54:34
-->
<template>
  <a-layout-header :style="{ position: 'fixed', zIndex: 999, width: '100%',lineHeight:'64px'}">
    <div class="title">
      <a-typography-title :level="3" style="color:white">
        <dot-chart-outlined />
        刘梦宇的练习场
      </a-typography-title>
    </div>
  </a-layout-header>
</template>

<script setup lang="ts">
import {
  DotChartOutlined
} from '@ant-design/icons-vue';
</script>

<style scoped>

</style>