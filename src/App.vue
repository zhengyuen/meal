<script setup>
import { computed, onMounted } from 'vue';
import mealLayout from '@/components/mealLayout/index.vue';
import { productApi } from '@/api/products'
import { useUserStore } from '@/store/user';
import { useProductStore } from '@/store/product';

const userStore = useUserStore()
const isDarkTheme = computed(() => userStore.isDarkTheme)

const productStore = useProductStore()

const getProductData = async() => {
  userStore.setLoading(true)
	const { code, data } = await productApi.getProducts();
	if (code === 200){
    productStore.setStores(data);
    userStore.setLoading(false)
	}
}
onMounted(() => {
	if (!productStore.length){
		getProductData();
	}
})
</script>

<template>
  <div :class="{ darkMode : isDarkTheme}">
    <meal-layout>
    <router-view />
  </meal-layout>
  <div v-if="userStore.loading" class="fixed top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,0.3)] z-[100]">
      <a-spin size="large" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
  </div>
  </div>
</template>

<style scoped>
</style>
