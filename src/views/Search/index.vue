<script setup>
import productSearch from '@/components/productSearch/index.vue';
import homeCard from '@/components/homeCard/index.vue'
import { useProductStore } from '@/store/product';
import { useUserStore } from '@/store/user';
import { computed, ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()

const userStore = useUserStore()
const isDarkTheme = computed(() => userStore.isDarkTheme)
const router = useRouter()
const productStore = useProductStore()
const stores = computed(() => productStore.stores.filter(stores => stores.name.includes(searchValue.value)))

const products = computed(() => {
  const allProduct = []
for(const item of productStore.stores){
  for(const product of item.products){
    allProduct.push({...product, storeId: item.id, storeName: item.name, business_hours: item.business_hours, score: item.score })
  }
}
return allProduct
}
)
const product = computed(() => products.value.filter(item => item.name.includes(searchValue.value)) )
const changePage = (url) => {
  router.push(url)
}
const activeKey = ref('stores');
const searchValue = ref('')
const handelChange = (key) => {
  activeKey.value = key
// 另一方法直接篩選的概念(不用 handleSearch、searchData，handelChange 的參數改為 activeKey)
  // if (activeKey === stores) {
  //   const stores = computed(() => productStore.stores.filter(stores => stores.name.includes(searchValue.value)))
  //   return stores || []
  // }
  // if (activeKey === product) {
  //   const product = computed(() => products.value.filter(item => item.name.includes(searchValue.value)) )
  //   return product || []
  // }
}
const searchData = computed(() => {
  if (activeKey.value === 'stores') {
    return stores.value.filter(store => store.name.includes(searchValue.value)) || []
  }
  if (activeKey.value === 'products') {
    return products.value.filter(item => item.name.includes(searchValue.value)) || []
  }
})

const handleSearch = (event) => {
  if (event.keyCode === 13) {
    searchData.value
  }
}

</script>

<template>
<div class="text-center px-8 fixed z-10 w-full" :class="[{ 'bg-black text-black':isDarkTheme }]">
  <i class="fa-solid fa-magnifying-glass absolute top-1/2 -translate-y-1/2 left-12 text-black"></i>
  <input type="text" class="py-1 mb-1 border-2 border-gray border-solid rounded-full w-full pl-8" :placeholder="$t('search_all')" v-model="searchValue" @keydown="handleSearch">
</div>
<p class="text-xl font-bold mt-10 pl-3">#{{ t('search_result') }}</p>
<a-tabs v-model:activeKey="activeKey" class="px-1 RwdModel" @change="handelChange" :class="[{ 'text-white': isDarkTheme }]">
    <a-tab-pane key="stores" :tab="$t('store')" v-model="searchValue">
    <template v-if="searchData.length">
    <home-card v-for="item in searchData " :key="item"
    :name="item.name"
    :time="item.business_hours"
    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRio9-XKHqz6oLzNr5YuTMHgmcebMXfAEoegg&s"
    @go-products="changePage(`/store/${item.id}/products`)"
    />
    </template>
    <template v-else>
    <p class="ml-5 text-center text-lg">{{ t('no_result') }}</p>
    </template>
    </a-tab-pane>
    <a-tab-pane key="products" :tab="$t('product')" v-model="searchValue">
      <template v-if ="searchData.length">
  <div v-for="(item, idx) in searchData"  :key="idx" class="my-2">
    <div class="flex" >
      <img src="https://life.ntpu.edu.tw/upload/2022092711003130rlm1.png" alt="" class="w-14 h-14">
      <div class="ml-2">
        <p class="font-bold text-xl">{{ item.storeName }}</p>
        <div class="flex mb-2">
          <span class="bg-slate-200 rounded-sm text-black px-2">{{ item.business_hours }}</span>
          <div class=" bg-slate-200 text-black ml-3 rounded-md px-2">
          <i class="fa-solid fa-star text-yellow-400 mr-1"></i><span>{{ item.score }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="inline-block" @click="changePage(`/store/${item.storeId}/product/${item.id}`)">
        <div class="border-2 border-solid border-slate-300 w-40 h-44 my-2 ml-2">
          <img :src="item.image" alt="" class="w-32 h-32 object-cover">
          <p class="text-center">{{ item.name }}</p>
        </div>
      </div>
      <i class="fa-solid fa-circle-chevron-right text-lg ml-2"></i>
    </div>
</template>
  <template v-else>
    <p class="ml-5 text-center text-lg">{{ t('no_result') }}</p>
  </template>
    </a-tab-pane>
  </a-tabs>
</template>

<style scope>
.ant-tabs .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
  @apply text-orange-800;
}
.ant-tabs-ink-bar {
  @apply !bg-orange-800;
}

@media screen and (min-width: 576px) {
.RwdModel {
    width: 50%;
    margin: auto
  }
}
</style>