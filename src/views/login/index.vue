<!--
 * @Author: wucunqian 2801531707@qq.com
 * @Date: 2024-07-07 16:07:17
 * @LastEditors: wucunqian 2801531707@qq.com
 * @LastEditTime: 2024-07-13 19:58:43
 * @FilePath: \create-demo\src\views\login\index.vue
 * @Description: 登录界面
 * 
 * Copyright (c) 2024 by ${wucunqian 2801531707@qq.com}, All Rights Reserved. 
-->
<template>
  <div class="text-3xl text-yellow-500/50 animate-bounce bg-clip-padding">{{ stores.objGather.title }} --
    <code>{{ stores.objGather.msg }}</code>
  </div>
  <div class="bg-orange-900 w-66">我是一个普通盒子</div>
  <button bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600" text="sm white" font="mono light" p="y-2 x-4"
    border="2 rounded blue-200">
    Button
  </button>
</template>

<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue';
import { useLogin } from '../../stores/useLogin';
import { loginapi } from '../../api/loginapi';

const stores = useLogin();

</script>

<style scoped></style>