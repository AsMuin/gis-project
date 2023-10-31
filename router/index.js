// 1. 定义路由组件.
// 也可以从其他文件导入
import OneMap from "../src/pages/OneMap.vue";
import DataVisual from "../src/components/DataVisual.vue";
import MapView from "../src/components/MapView.vue";
import { createRouter, createWebHashHistory, useRoute } from "vue-router";
import Home from "../src/pages/Home.vue";
// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const router = createRouter({
  // 2.1 指定采用的路由模式: hash
  history: createWebHashHistory(),
  // 2.2 配置路由映射关系
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: Home,
      children: [
        {
          path: "mapview",
          component: MapView,
        },
        {
          path: "onemap",
          component: OneMap,
        },
        {
          path: "datavisual",
          component: DataVisual,
        },
      ],
    },
    // {
    //   path: "/mapview",
    //   component: MapView,
    // },
    // {
    //   path: "/onemap",
    //   component: OneMap,
    // },
    // {
    //   path: "/datavisual",
    //   component: DataVisual,
    // },
  ],
});

export default router;
