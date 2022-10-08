<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2022-09-17 17:59:25
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-10-08 13:55:48
-->
<template>
    <a-form :model="formData" autocomplete="off" name="user-form" ref="formRef" :label-col="{ span: 3}"
        :wrapper-col="{ span: 10 }" layout="vertical">
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
        <a-form-item label="时间" name="date" :wrapper-col="{ span: 12 }">
            <a-range-picker showTime v-model:value="formData.date"></a-range-picker>
        </a-form-item>

        <a-form-item label="开关" name="switch">
            <a-switch v-model:checked="formData.switch"></a-switch>
        </a-form-item>

        <a-form-item label="单选" name="radio">
            <a-radio-group v-model:value="formData.radio">
                <a-radio value="1">1</a-radio>
                <a-radio value="2">2</a-radio>
                <a-radio value="3">3</a-radio>
                <a-radio value="4" disabled>4</a-radio>
            </a-radio-group>
        </a-form-item>

        <a-form-item label="多选" name="checkbox">
            <a-checkbox-group v-model:checked="formData.checkbox" :options="options"></a-checkbox-group>
        </a-form-item>

        <a-form-item label="次级选项" name="cascader">
            <a-cascader :options="cascaderOptions" v-model:value="formData.cascader"></a-cascader>
        </a-form-item>

        <a-form-item label="提及@" name="mention">
            <a-mentions :options="mentionOptions" v-model:value="formData.mention">
                <!-- <a-mentions-option v-for="men in mentionOptions" :key="men.value" :value="men.value">{{men.label}}</a-mentions-option> -->
            </a-mentions>
        </a-form-item>

        <a-form-item label="评分" name="rate">
            <a-rate v-model:value="formData.rate" allowClear allowHalf>
                <template #character>
                    <heart-filled></heart-filled>
                </template>
            </a-rate>
        </a-form-item>

        <a-form-item label="滑动条" name="slider">
            <a-slider v-model:value="formData.slider" :marks="marks" included range>
                <template #mark="{label,point}">
                    <template v-if="point == 100">
                        <strong>{{label}}</strong>
                    </template>
                    <template v-else>
                        {{label}}
                    </template>
                </template>
            </a-slider>
        </a-form-item>

        <a-form-item label="文件上传" name="upload">
            <a-upload-dragger v-model:fileList="formData.upload" @change="handleChange" multiple>
                <inbox-outlined></inbox-outlined>
                拖拽文件到此区域内上传文件
            </a-upload-dragger>
        </a-form-item>
        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
            <a-button type="primary" html-type="submit">提交</a-button>
        </a-form-item>
    </a-form>
</template>

<script setup lang="ts">
import { UserOutlined, HeartFilled, InboxOutlined } from '@ant-design/icons-vue';
import { reactive, ref } from 'vue';
import type { FormInstance, CascaderProps } from 'ant-design-vue'
import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs';
import { message } from 'ant-design-vue';
import 'ant-design-vue/es/message/style/css';
import type { UploadChangeParam } from 'ant-design-vue'


dayjs.locale("zhCN")
// 定义表单接口
interface Form {
    name: string,
    color: string[],
    number: number,
    date: RangeValue | undefined,
    switch: boolean,
    radio: string,
    checkbox: string[],
    cascader: string,
    mention: string,
    rate: number,
    slider: [number, number],
    upload: string[]
}
// 定义多选选项数据接口
interface Options {
    value: string,
    label: string,
    disabled?: boolean
}

// 定义时间类型
type RangeValue = [Dayjs, Dayjs];

// 获取表单组件
const formRef = ref<FormInstance>();
// 定义表单数据
const formData = reactive<Form>({
    name: '',
    color: [],
    number: 0,
    date: undefined,
    switch: true,
    radio: '1',
    checkbox: [],
    cascader: '',
    mention: '',
    rate: 3,
    slider: [0, 30],
    upload: []
});
// 定义多选框
const options = ref<Options[]>([
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: true },
]);
// 定义级联选择器
const cascaderOptions = ref<CascaderProps['options']>([
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                    },
                ],
            },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'zhonghuamen'
                    }]
            }
        ]
    }
]);

// 定义提及@
const mentionOptions = ref<Options[]>([
    {
        value: 'afc163',
        label: 'afc163',
    },
    {
        value: 'benjycui',
        label: 'benjycui',
    },
    {
        value: 'yiminghe',
        label: 'yiminghe',
    },
    {
        value: 'RaoHai',
        label: 'RaoHai',
    },
    {
        value: '中文',
        label: '中文',
    },
    {
        value: 'にほんご',
        label: 'にほんご',
    },
]);
// 定义滑动条标签
const marks = ref<Record<number, any>>({
    0: '0℃',
    30: '30℃',
    50: '50℃',
    100: {
        style: {
            color: "red"
        },
        label: "100℃"
    }
});

const handleChange = (info: UploadChangeParam) => {
    const status = info.file.status;
    if (status !== 'uploading') {
        console.log(info.file, info.fileList);
    }
    if (status === 'done') {
        message.success(`${info.file.name}上传完毕！`);
    } else if (status === 'error') {
        message.error(`${info.file.name}上传失败！`);
    }
}
</script>

<style scoped>

</style>