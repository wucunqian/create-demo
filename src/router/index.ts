/**
 * Author: wucunqian 2801531707@qq.com
 * Date: 2024-07-07 16:05:23
 * LastEditors: wucunqian 2801531707@qq.com
 * LastEditTime: 2024-07-07 16:26:43
 * FilePath: \create-demo\src\router\index.ts
 * Description: 
 * 
 * Copyright (c) 2024 by ${wucunqian 2801531707@qq.com}, All Rights Reserved. 
 */
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