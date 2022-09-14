/*
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2022-09-09 11:52:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-14 11:26:41
 */
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import '@/assets/main.css';

const app = createApp(App);

app.use(createPinia()); 
app.use(router);

app.mount('#app');
