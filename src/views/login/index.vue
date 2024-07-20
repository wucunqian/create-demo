<template>
  <div>
    login {{ stores.objGather.title }}
  </div>

</template>

<script setup lang="ts">
import { useLoginStore } from '../../stores/useLogin';
const stores = useLoginStore();
console.log('stores', stores.objGather)

</script>

<style scoped></style>