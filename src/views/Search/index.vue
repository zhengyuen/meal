<script setup>
import productSearch from '@/components/productSearch/index.vue';
import homeCard from '@/components/homeCard/index.vue'
import { useProductStore } from '@/store/product';
import { useUserStore } from '@/store/user';
import { computed, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';

const userStore = useUserStore()
const isDarkTheme = computed(() => userStore.isDarkTheme)
const route = useRoute()
const router = useRouter()
const keyword = ref(route.query.keyword)
const productStore = useProductStore()
const storeId = computed(() => useProductStore.stores.find(store => store.id === searchData.value.id))
const stores = computed(() => productStore.stores.filter(stores => stores.name.includes(keyword.value)))
// const product = computed(() => productStore.stores[0].products.filter(products => products.name.includes(keyword.value)))
const product = computed(() => searchData.value[0].products)
const searchData = ref([])
const changePage = (url) => {
  router.push(url)
}
const searchValue = ref('')
const handleSearch = (event) => {
  if (event.keyCode === 13) {
    searchData.value = productStore.stores.filter(store => store.name.includes(searchValue.value))
  }
}
watchEffect(() => {
  for (const store of productStore.stores) {
    let products = []
    for (const product of store.products) {
      const hasProduct = product.name.includes(keyword.value)
      if (hasProduct) {
        products.push(product)
      }
    }
    if(products.length) {
      // for(const product of products){
        searchData.value.push({
          ...store,
          products
        },
        )
      // }
    }
  }
})
console.log(searchValue)
console.log(stores)
console.log(searchData.value)

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
<template v-if ="searchData.length">
<div v-for="(item, idx) in searchData"  :key="idx" class="my-2">
  <div class="flex" >
    <img src="https://life.ntpu.edu.tw/upload/2022092711003130rlm1.png" alt="" class="w-14 h-14">
    <div class="ml-2">
      <p class="font-bold text-xl">{{ item.name }}</p>
      <div class="flex mb-2">
        <span class="bg-slate-200 rounded-sm">{{ item.business_hours }}</span>
        <div class=" bg-slate-200 ml-3 rounded-md px-2">
        <i class="fa-solid fa-star text-yellow-400 mr-1"></i><span>{{ item.score }}</span>
        </div>
      </div>
    </div>
  </div>
    <div v-for="(item, id) in product" :key="id" class="inline-block" @click="changePage(`/store/${item.id}/product/${item.id}`)">
      <div v-if="id < 2" class="border-2 border-solid border-slate-300 w-40 h-44 my-2 ml-2 ">
        <img :src="item.image" alt="" class=" w-32 h-32 object-cover">
        <p class="text-center">{{ item.name }}</p>
      </div>
    </div>
    <i class="fa-solid fa-circle-chevron-right text-lg ml-2"></i>
  </div>
</template>
<template v-if="stores.length">
  <home-card v-for="item in stores" :key="item"
  :name="item.name"
  :time="item.business_hours"
  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRio9-XKHqz6oLzNr5YuTMHgmcebMXfAEoegg&s"
  @go-products="changePage(`/store/${item.id}/products`)"
  />
</template>
<template v-else>
  <p class="ml-5 text-center text-lg">沒有您要搜尋的結果</p>
</template>
</template>

<style scope></style>