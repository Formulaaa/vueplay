<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2022-09-17 17:59:25
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-18 11:25:21
-->
<template>
    <a-form :model="formData" autocomplete="off" name="user-form" ref="formRef" :label-col="{ span: 3}"
        :wrapper-col="{ span: 8 }">
        <a-form-item label="姓名" name="name" :rules="[{ required: true, message: '请输入姓名' }]">
            <a-input v-model:value="formData.name" autofocus>
                <template #prefix>
                    <user-outlined type="user"></user-outlined>
                </template>
            </a-input>
        </a-form-item>
        <a-form-item label="颜色" name="color">
            <a-select allowClear mode="multiple" v-model:value="formData.color">
                <a-select-option key="red" value="red">红色</a-select-option>
                <a-select-option key="blue" value="blue">蓝色</a-select-option>
                <a-select-option key="green" value="green">绿色</a-select-option>
            </a-select>
        </a-form-item>
        <a-form-item label="数字" name="number">
            <a-input-number v-model:value="formData.number" :min="0" :max="100" precision="1" step="0.1">
            </a-input-number>
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
            <a-button type="primary" html-type="submit">提交</a-button>
        </a-form-item>
    </a-form>
</template>

<script setup lang="ts">
import { UserOutlined } from '@ant-design/icons-vue';
import { reactive, ref } from 'vue';
import type { FormInstance } from 'ant-design-vue'
// 定义表单接口
interface Form {
    name: string,
    color: string[],
    number: number
}
// 获取表单组件
const formRef = ref<FormInstance>();
// 定义表单数据
const formData = reactive<Form>({
    name: '',
    color: [],
    number: 0
});


</script>

<style scoped>

</style>