<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2022-10-08 20:13:23
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-10-08 21:03:09
-->
<template>
    <a-typography>
        <a-typography-title :level="2">最新的Vue提交</a-typography-title>
        <a-radio-group v-model:value="currentBranch" :options="branches"></a-radio-group>
        <ul>
            <li v-for="{html_url,sha,author,commit} in commits">
                <a :href="html_url" target="_blank">{{sha.slice(0,7)}}</a>
                -<span>{{truncate(commit.message)}}</span>
                <br />
                By<a href="author.html_url" target="_blank">{{commit.author.name}}</a>
                at <span>{{formateDate(commit.author.date)}}</span>
            </li>
        </ul>

    </a-typography>
</template>

<script setup lang="ts">
import { reactive, ref, watchEffect } from 'vue';
interface Commits {
    html_url: string,
    sha: string,
    author: {
        html_url: string,
        name: string
    },
    commit: {
        author: {
            name: string,
            date: string,
        },
        message: string
    }
}

const url = 'https://api.github.com/repos/vuejs/core/commits?per_page=3&sha=';
const branches = ['main', 'v2-compat'];
const commits = ref(null);
const currentBranch = ref(branches[0]);

watchEffect(async () => {
    const u = `${url}${currentBranch.value}`;
    commits.value = await (await fetch(u)).json();
})
const truncate = (s: string) => {
    const newLine = s.indexOf('\n');
    return newLine > 0 ? s.slice(0, newLine) : s
}
const formateDate = (s: string) => {
    return s.replace(/T|Z/g, " ")
}
</script>

<style scoped>

</style>