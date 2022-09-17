<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2022-09-16 19:02:46
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-17 12:21:02
-->
<template>
    <a-menu v-model:selectedKeys="selectedKeys" v-model:openKeys="openKeys" mode="inline"
        :style="{ height: '100%', borderRight: 0 }" @click="clickItem">
        <template v-for="item of items" :key="item.path">
            <side-sub-menu :item="item" v-if="item.path!='/'"></side-sub-menu>
        </template>
    </a-menu>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import { useRouter } from 'vue-router'
import SideSubMenu from './SideSubMenu.vue'
// 声明Vue Router的两个对象
const router = useRouter();
// 获取/router/index.ts中声明的routes数组
const items = router.options.routes;
/**
 * @name: clickItem
 * @msg: 路由跳转
 * @param {*} keyPath
 * @return {*}
 */
const clickItem = ({ keyPath }: { keyPath: string[] }) => {
    router.push(keyPath.join('/'));
}
/**
 * @name: selectedKeys
 * @msg: 从路径绑定当前选中的侧边栏选项
 * @param {*} computed
 * @return {*}
 */
const selectedKeys = computed(() => {
    let arr: string[] = [];
    arr.push(router.currentRoute.value.path.split('/')[2]);
    return arr;
})
// let selectedKeys = ref<string[]>('hello-world');
/**
 * @name: openKeys
 * @msg: 从路径获取当前展开的侧边栏选项组
 * @param {*} computed
 * @return {*}
 */
const openKeys = computed(() => {
    let arr: string[] = [];
    arr.push('/' + router.currentRoute.value.path.split('/')[1]);
    return arr;
})
// let openKeys = ref<string[]>('/home');

/**
 * @name: onOpenChange
 * @msg: 只展开被选中选项的选项组，折叠其他选项组
 * @param {*} nowOpenKeys
 * @return {*}
 */
// const onOpenChange = (nowOpenKeys: string[]) => {
//     openKeys.value = nowOpenKeys[nowOpenKeys.length - 1] ? [nowOpenKeys[nowOpenKeys.length - 1]] : [];
// }


</script>

<style scoped>

</style>