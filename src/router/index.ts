/*
 * @Descripttion:
 * @version:
 * @Author: congsir
 * @Date: 2022-09-09 11:52:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-16 18:27:00
 */
import { createRouter, createWebHistory } from "vue-router";
import HelloWorldVue from "@/views/basic/HelloWorld.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      children: [
        { path: "hello-world", component: HelloWorldVue },
        {
          path: "user-input",
          component: () => import("@/views/basic/UserInput.vue"),
        },
      ],
    },
  ],
});

export default router;
