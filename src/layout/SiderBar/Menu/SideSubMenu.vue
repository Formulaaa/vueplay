<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2022-09-16 19:03:23
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-17 11:23:44
-->
<template>
    <a-sub-menu :key="item.path">
        <template #title>
            <component :is="item.meta.icon"></component>
            <span>
                {{item.name}}
            </span>
        </template>
        <side-sub-menu-item v-for="child of item.children" :key="child.path" :item="child"></side-sub-menu-item>
    </a-sub-menu>
</template>

<script setup lang="ts">
import SideSubMenuItem from './SideSubMenuItem.vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const props = defineProps({
    item: {
        type: Object,
        default: () => ({})
    }
});


</script>

<style scoped>

</style>