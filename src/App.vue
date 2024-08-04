<script setup>
import { computed } from 'vue';
import mealLayout from '@/components/mealLayout/index.vue';
import { useUserStore } from '@/store/user';

const userStore = useUserStore()
const isDarkTheme = computed(() => userStore.isDarkTheme)

</script>

<template>
  <div :class="{ darkMode : isDarkTheme}">
    <meal-layout>
    <router-view />
  </meal-layout>
  </div>
</template>

<style scoped>
</style>
