<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2022-10-08 14:41:28
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-10-08 15:47:54
-->
<template>
    <a-row :gutter="10">
      <a-col :span="12">
        <a-textarea v-model:value="input" autosize :bordered="false" @input="update" >
        </a-textarea>
      </a-col>
      <a-col :span="12">
        <div v-html="output"></div>
      </a-col>
    </a-row>
</template>

<script setup lang="ts">
import { marked } from "marked"
import { debounce } from 'lodash-es'
import { ref,computed } from 'vue';
import type { ChangeEvent } from "ant-design-vue/es/_util/EventInterface";

const input = ref("## World");
const output = computed(() => marked(input.value))
const update = debounce((e:ChangeEvent) => {
    input.value = e.target.value || ''
},100)

</script>

<style scoped>

</style>