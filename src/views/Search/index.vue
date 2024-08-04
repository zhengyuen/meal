<script setup>
import { useUserStore } from '@/store/user';
import { computed } from 'vue';

const userStore = useUserStore()
const isDarkTheme = computed(() => userStore.isDarkTheme)
</script>

<template>
<div v-if="isDarkTheme" class="text-center px-8 fixed top-28 z-10 w-full bg-black text-black">
  <i class="fa-solid fa-magnifying-glass absolute top-1/2 -translate-y-1/2 left-12"></i>
  <input type="text" class="py-1 mb-1 border-2 border-gray border-solid rounded-full w-full pl-8" placeholder="搜尋門市或商品">
</div>
<div v-else class="text-center px-8 fixed top-28 z-10 w-full bg-white">
  <i class="fa-solid fa-magnifying-glass absolute top-1/2 -translate-y-1/2 left-12"></i>
  <input type="text" class="py-1 mb-1 border-2 border-gray border-solid rounded-full w-full pl-8" placeholder="搜尋門市或商品">
</div>
</template>

<style scope></style>