<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2022-09-09 11:52:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-18 12:14:10
-->
<template>
  <a-config-provider :locale="zhCN">
    <index-vue></index-vue>
  </a-config-provider>
</template>


<script setup lang="ts">
import indexVue from './layout/index.vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale(zhCN.locale)
</script>


<style scoped>

</style>
