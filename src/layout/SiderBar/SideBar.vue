<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2022-09-14 15:19:12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-14 16:32:09
-->
<template>
  <a-layout-sider theme="light" v-model:collapsed="collapsed" collapsible>
    <a-menu v-model:selectedKeys="selectedKeys" v-model:openKeys="openKeys" mode="inline" @openChange="onOpenChange"
      :style="{ height: '100%', borderRight: 0 }">
      <a-sub-menu key="sub1">
        <template #title>
          <user-outlined />
          <span>
            基础
          </span>
        </template>
        <a-menu-item key="1">你好世界</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>
          <laptop-outlined />
          <span>
            实战
          </span>
        </template>
        <!-- <a-menu-item key="2">option5</a-menu-item> -->
      </a-sub-menu>
      <a-sub-menu key="sub3">
        <template #title>
          <notification-outlined />
          <span>
            7 GUIs
          </span>
        </template>
        <!-- <a-menu-item key="9">option9</a-menu-item> -->
      </a-sub-menu>
    </a-menu>
    <template #trigger>
      <div style="border-top:1px solid #f0f0f0;">
        <menu-unfold-outlined v-if="collapsed" />
        <menu-fold-outlined v-else />
      </div>
    </template>
  </a-layout-sider>
</template>

<script setup lang="ts">
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
import { ref } from 'vue';

const rootSubmenuKeys = ref<string[]>(['sub1', 'sub2', 'sub3']);
let collapsed = ref<boolean>(false);
let selectedKeys = ref<string[]>(['1']);

let openKeys = ref<string[]>(['sub1']);
const onOpenChange = (nowOpenKeys: string[]) => {
  openKeys.value = nowOpenKeys[nowOpenKeys.length - 1] ? [nowOpenKeys[nowOpenKeys.length - 1]] : [];
}
</script>

<style scoped>

</style>