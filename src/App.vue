<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2022-09-09 11:52:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-14 11:11:00
-->
<template>
  <a-layout class="page">
    <a-layout-header>
      <div class="title">
        <a-typography-title :level="3" style="color:white">
          <dot-chart-outlined />
          刘梦宇的练习场
        </a-typography-title>

      </div>

    </a-layout-header>
    <a-layout>
      <a-layout-sider theme="light" v-model:collapsed="collapsed" collapsible>
        <a-menu v-model:selectedKeys="selectedKeys2" v-model:openKeys="openKeys" mode="inline"
          :style="{ height: '100%', borderRight: 0 }">
          <a-sub-menu key="sub1">
            <template #title>
              <user-outlined />
              <span>
                subnav 1
              </span>
            </template>
            <a-menu-item key="1">option1</a-menu-item>
            <a-menu-item key="2">option2</a-menu-item>
            <a-menu-item key="3">option3</a-menu-item>
            <a-menu-item key="4">option4</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template #title>
              <laptop-outlined />
              <span>
                subnav 2
              </span>
            </template>
            <a-menu-item key="5">option5</a-menu-item>
            <a-menu-item key="6">option6</a-menu-item>
            <a-menu-item key="7">option7</a-menu-item>
            <a-menu-item key="8">option8</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <template #title>
              <notification-outlined />
              <span>
                subnav 3
              </span>
            </template>
            <a-menu-item key="9">option9</a-menu-item>
            <a-menu-item key="10">option10</a-menu-item>
            <a-menu-item key="11">option11</a-menu-item>
            <a-menu-item key="12">option12</a-menu-item>
          </a-sub-menu>
        </a-menu>
        <template #trigger>
          <div style="border-top:1px solid #f0f0f0;">
            <menu-unfold-outlined v-if="collapsed" />
            <menu-fold-outlined v-else />
          </div>
        </template>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
          Content
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>


<script setup lang="ts">
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DotChartOutlined
} from '@ant-design/icons-vue';
import { ref } from 'vue';

let selectedKeys2 = ref<string[]>(['1']);
let openKeys = ref<string[]>(['sub1']);
let collapsed = ref<boolean>(false);
</script>


<style scoped>

</style>
