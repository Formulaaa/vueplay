<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2022-09-16 19:03:46
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-16 20:53:19
-->
<template>
    <a-menu-item :key="item.path">
        {{item.name}}
    </a-menu-item>
</template>

<script setup lang="ts">
const props = defineProps({
    item: {
        type: Object,
        default: () => ({})
    }
});
</script>

<style scoped>

</style>