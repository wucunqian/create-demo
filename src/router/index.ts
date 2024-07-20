import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from "vue-router";
console.log('Hash 模式：', createWebHashHistory());
console.log('History 模式：', createWebHistory());
const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/login" },  // 路由重定向
  { path: "/login", name: "login", component: () => import('../views/login/index.vue') },
  { path: '/:catchAll(.*)', component: () => import('../views/error/index.vue') },  // 没有路由
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;