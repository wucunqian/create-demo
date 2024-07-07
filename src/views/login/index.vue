<!--
 * @Author: wucunqian 2801531707@qq.com
 * @Date: 2024-07-07 16:07:17
 * @LastEditors: wucunqian 2801531707@qq.com
 * @LastEditTime: 2024-07-07 16:51:15
 * @FilePath: \create-demo\src\views\login\index.vue
 * @Description: 登录界面
 * 
 * Copyright (c) 2024 by ${wucunqian 2801531707@qq.com}, All Rights Reserved. 
-->
<template>
  <div>{{ stores.objGather.title }} -- <code>{{ stores.objGather.msg }}</code>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';
import { useLogin } from '../../stores/useLogin';
const stores = useLogin();

</script>

<style scoped></style>