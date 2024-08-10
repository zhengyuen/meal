<script setup>
import homeCard from '@/components/homeCard/index.vue';
import productCard from '@/components/productSearch/index.vue';
import { useProductStore } from '@/store/product';
import { useUserStore } from '@/store/user';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';

const userStore = useUserStore()
const isDarkTheme = computed(() => userStore.isDarkTheme)
const route = useRoute()
const router = useRouter()
const keyword = ref(route.query.keyword)
const productStore = useProductStore()
const stores = computed(() => productStore.stores.filter(stores => stores.name.includes(keyword.value)))
const product = computed(() => productStore.stores[0].products.filter(products => products.name.includes(keyword.value)))
console.log(product)
const changePage = (url) => {
  router.push(url)
}
const searchValue = ref('')
const handleSearch = (event) => {
  if (event.keyCode === 13) {
    changePage(`/search?keyword=${searchValue.value}`)
  }
}
</script>

<template>
<div v-if="isDarkTheme" class="text-center px-8 fixed z-10 w-full bg-black text-black">
  <i class="fa-solid fa-magnifying-glass absolute top-1/2 -translate-y-1/2 left-12"></i>
  <input type="text" class="py-1 mb-1 border-2 border-gray border-solid rounded-full w-full pl-8" placeholder="搜尋門市或商品" v-model="searchValue" @keydown="handleSearch">
</div>
<div v-else class="text-center px-8 fixed z-10 w-full bg-white">
  <i class="fa-solid fa-magnifying-glass absolute top-1/2 -translate-y-1/2 left-12"></i>
  <input type="text" class="py-1 mb-1 border-2 border-gray border-solid rounded-full w-full pl-8" placeholder="搜尋門市或商品" v-model="searchValue" @keydown="handleSearch">
</div>
<p class="text-xl font-bold mt-10 pl-3">#搜尋結果</p>
<template v-if="stores.length">
<home-card v-for="item in stores"
  :key="item"
  :name="item.name"
  :time="item.business_hours"
  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRio9-XKHqz6oLzNr5YuTMHgmcebMXfAEoegg&s"
  @click="changePage(`/store/${item.id}`)"
/>
</template>
<template v-if="product.length">
  <product-card v-for="item in product" :key="item"
  :image="item.image"
  :name="item.name"
  :price="item.price"
  @goProductClick="changePage(`/store/1/product/${item.id}`)"
  />
</template>
<template v-else>
  <p class="ml-5">沒有您要搜尋的結果</p>
</template>
</template>

<style scope></style>