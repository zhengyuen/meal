<script setup>
import { ref, watch, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
import { useProductStore } from '@/store/product';
import ProductCard from '@/components/productCard/index.vue'

const activeKey = ref('1');
const router = useRouter()
const route = useRoute()

const changePage = (url) => {
  router.push(url)
}
const storeId = ref(Number(route.params.id))
const productStore = useProductStore()
const stores = ref(productStore.stores || [])
const store = computed(() => stores.value.find(store => store.id === storeId.value))
const productData = computed(() => store.value.products)
console.log(productData)
console.log(storeId.value)

</script>

<template>
  <header>
  <div class="pl-2"><i class="fa-solid fa-chevron-left" @click="changePage('/store')"></i></div>
  <div class="flex px-5 items-center shadow-sm">
      <img src="https://life.ntpu.edu.tw/upload/2022092711003130rlm1.png" alt="image" class="h-24 object-cover relative">
  <template v-for="(items, idx) in stores" :key="idx">
    <div class="ml-4" v-if="idx === storeId-1">
      <p  class="font-bold">{{ items.name }}</p>
      <small class="font-bold">小木屋鬆餅</small><br>
      <i class="fa-solid fa-star text-yellow-400 mr-1"></i><span>{{ items.score }}</span>
      <i class="fa-solid fa-clock text-gray ml-5 mr-2"></i><span>{{ items.business_hours }}</span>
    </div>
  </template>
  </div>
  </header>
  <div class="fixed right-0 translate-y-2 z-10 bg-white w-10 text-center">
    <i class="fa-solid fa-magnifying-glass"></i>
  </div>
  <a-tabs v-model:activeKey="activeKey" type="card" class="static" >
    <a-tab-pane key="1" tab="小木屋家推薦" class="">
      <h1 class="font-bold text-brown" >小木屋家推薦</h1>
      <template v-for="(item, id) in productData" :key="id">
    <product-card v-if="item.category === '小木屋家推薦'"
      :image="item.image"
      :name="item.name"
      :price="item.price"
      @goProductClick="changePage(`/store/${storeId}/product/${item.id}`)"
    />
  </template>
    </a-tab-pane>

    <a-tab-pane key="2" tab="純粹好茶">
      <h1 class="font-bold text-brown">純粹好茶</h1>
      <template v-for="(item, id) in productData" :key="id">
      <product-card v-if="item.category === '純粹好茶'"
        :image="item.image"
        :name="item.name"
        :price="item.price"
        @goProductClick="changePage(`/store/${storeId}/product/${item.id}`)"
      />
  </template>
    </a-tab-pane>

    <a-tab-pane key="3" tab="小農鮮奶">
        <h1 class="font-bold text-brown">小農鮮奶</h1>
        <template v-for="(item, id) in productData" :key="id">
      <product-card v-if="item.category === '小農鮮奶'"
        :image="item.image"
        :name="item.name"
        :price="item.price"
        @goProductClick="changePage(`/store/${storeId}/product/${item.id}`)"
      />
  </template>
    </a-tab-pane>
    <a-tab-pane key="4" tab="冬瓜冷露(甜度固定)">
      <h1 class="font-bold text-brown">冬瓜冷露(甜度固定)</h1>
        <template v-for="(item, id) in productData" :key="id">
      <product-card v-if="item.category === '冬瓜冷露(甜度固定)'"
        :image="item.image"
        :name="item.name"
        :price="item.price"
        @goProductClick="changePage(`/store/${storeId}/product/${item.id}`)"
      />
  </template>
    </a-tab-pane>
    <a-tab-pane key="5" tab="季節限定">
      <h1 class="font-bold text-brown">季節限定</h1>
        <template v-for="(item, id) in productData" :key="id">
      <product-card v-if="item.category === '季節限定'"
        :image="item.image"
        :name="item.name"
        :price="item.price"
        @goProductClick="changePage(`/store/${storeId}/product/${item.id}`)"
      />
  </template>
    </a-tab-pane>
    <a-tab-pane key="6" tab="炸物點心">
      <h1 class="font-bold text-brown">炸物點心</h1>
        <template v-for="(item, id) in productData" :key="id">
      <product-card v-if="item.category === '炸物點心'"
        :image="item.image"
        :name="item.name"
        :price="item.price"
        @goProductClick="changePage(`/store/${storeId}/product/${item.id}`)"
      />
  </template>
    </a-tab-pane>
    <a-tab-pane key="7" tab="找鹹的">
        <h1 class="font-bold text-brown">找鹹的</h1>
        <template v-for="(item, id) in productData" :key="id">
      <product-card v-if="item.category === '找鹹的'"
        :image="item.image"
        :name="item.name"
        :price="item.price"
        @goProductClick="changePage(`/store/${storeId}/product/${item.id}`)"
      />
  </template>
    </a-tab-pane>
    <a-tab-pane key="8" tab="找甜的">
      <h1 class="font-bold text-brown">找甜的</h1>
        <template v-for="(item, id) in productData" :key="id">
      <product-card v-if="item.category === '找甜的'"
        :image="item.image"
        :name="item.name"
        :price="item.price"
        @goProductClick="changePage(`/store/${storeId}/product/${item.id}`)"
      />
  </template>
    </a-tab-pane>

  </a-tabs>
</template>

<style scope></style>