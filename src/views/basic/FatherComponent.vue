<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2022-10-08 13:56:27
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-10-08 14:21:55
-->
<template>
    <a-list item-layout="horizontal" :data-source="data">
        <template #renderItem="{item}">
            <child-component :item="item"></child-component>
        </template>
    </a-list>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ChildComponent from '@/components/EasyComponent/ChildComponent.vue'


interface ListData {
    title: string,
    desc?:string
}

const data = ref<ListData[]>([
    {
        title: "JAVA",
        desc:"nb"
    },
    {
        title:"Python"
    },
    {
        title: "HTML"
    }
])
</script>

<style scoped>

</style>