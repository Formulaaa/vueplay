<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2022-09-16 19:02:46
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-16 20:55:16
-->
<template>
    <a-menu v-model:selectedKeys="selectedKeys" v-model:openKeys="openKeys" mode="inline" @openChange="onOpenChange"
        :style="{ height: '100%', borderRight: 0 }" @click="clickItem">
        <side-sub-menu v-for="item of items" :item="item" :key="item.path"></side-sub-menu>
    </a-menu>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRouter } from 'vue-router'
import SideSubMenu from './SideSubMenu.vue'
const router = useRouter();
const items = router.options.routes;

const clickItem = ({ keyPath }: { keyPath: string[] }) => {
  router.push(keyPath.join('/'));
}


let selectedKeys = ref<string[]>(['hello-world']);

let openKeys = ref<string[]>(['/home']);
const onOpenChange = (nowOpenKeys: string[]) => {
    openKeys.value = nowOpenKeys[nowOpenKeys.length - 1] ? [nowOpenKeys[nowOpenKeys.length - 1]] : [];
}
</script>

<style scoped>

</style>