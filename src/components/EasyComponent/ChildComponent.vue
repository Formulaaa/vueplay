<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2022-10-08 13:57:44
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-10-08 14:22:10
-->
<template>
    <a-list-item>
        <a-list-item-meta :description="item?.desc">
            <template #title>
                <a href="www.baidu.com">{{item?.title}}</a>
            </template>
            <template #avatar>
                <a-avatar src="https://joeschmoe.io/api/v1/random"></a-avatar>
            </template>
        </a-list-item-meta>
    </a-list-item>
</template>

<script setup lang="ts">
const props = defineProps({
    item: Object
})
</script>

<style scoped>

</style>