/*
 * @Descripttion:
 * @version:
 * @Author: congsir
 * @Date: 2022-09-09 11:52:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-16 20:53:53
 */
import { createRouter, createWebHistory } from "vue-router";
import HelloWorldVue from "@/views/basic/HelloWorld.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "基础",
      children: [
        {
          path: "hello-world",
          name: "你好，世界",
          component: HelloWorldVue
        },
        {
          path: "user-input",
          name: "用户输入",
          component: () => import("@/views/basic/UserInput.vue"),
        },
      ],
    },
  ],
});

export default router;
