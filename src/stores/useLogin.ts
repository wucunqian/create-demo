
/**
 * Author: wucunqian 2801531707@qq.com
 * Date: 2024-07-07 16:35:01
 * LastEditors: wucunqian 2801531707@qq.com
 * LastEditTime: 2024-07-07 16:47:38
 * FilePath: \create-demo\src\stores\useLogin.ts
 * Description: pinia 文件一般导出单个，切需要使用 use+var 命名，使用 setup 写法
 * 
 * Copyright (c) 2024 by ${wucunqian 2801531707@qq.com}, All Rights Reserved. 
 */
import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useLoginStore = defineStore('useLogin', () => {
  interface UseLogin {
    title: String;
    msg: String;
  }
  const objGather = ref<UseLogin>({
    title: 'useLogin',
    msg: "pinia获取",
    count: 123
  });
  return { objGather };
});