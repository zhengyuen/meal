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
	const { code, data } = await productApi.getProducts();
	if (code === 200){
    productStore.setStores(data);
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
  </div>
</template>

<style scoped>
</style>
