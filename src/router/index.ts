/*
 * @Descripttion:
 * @version:
 * @Author: congsir
 * @Date: 2022-09-09 11:52:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-10-08 20:23:14
 */
import { createRouter, createWebHistory } from "vue-router";
import HelloWorldVue from "@/views/basic/HelloWorld.vue";
import { UserOutlined, HeatMapOutlined } from "@ant-design/icons-vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home/hello-world",
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
        {
          path: "attr-bind",
          name: "属性绑定",
          component: () => import("@/views/basic/AttributeBind.vue"),
        },
        {
          path: "if-for",
          name: "条件和循环",
          component: () => import("@/views/basic/IfFor.vue"),
        },
        {
          path: "form-bind",
          name: "表单绑定",
          component: () => import("@/views/basic/FormBind.vue"),
        },
        {
          path: "easy-component",
          name: "简单组件",
          component: () => import("@/views/basic/FatherComponent.vue"),
        },
      ],
    },
    {
      path: "/exercise",
      name: "实战演练",
      meta: {
        icon: HeatMapOutlined,
      },
      children: [
        {
          path: "mark-down",
          name: "MarkDown编辑器",
          component: () => import("@/views/exercise/MarkDown.vue"),
        },
        {
          path: 'get-data',
          name: "获取数据",
          component:()=>import("@/views/exercise/GetData.vue")
        }
      ],
    },
  ],
});

export default router;
