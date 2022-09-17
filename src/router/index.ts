/*
 * @Descripttion:
 * @version:
 * @Author: congsir
 * @Date: 2022-09-09 11:52:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-17 12:07:25
 */
import { createRouter, createWebHistory } from "vue-router";
import HelloWorldVue from "@/views/basic/HelloWorld.vue";
import { UserOutlined } from "@ant-design/icons-vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect:'/home/hello-world'
    },
    {
      path: "/home",
      name: "基础",
      meta: {
        icon: UserOutlined,
      },
      children: [
        {
          path: "hello-world",
          name: "你好，世界",
          component: HelloWorldVue,
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
