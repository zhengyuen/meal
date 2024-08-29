<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
import { useUserStore } from '@/store/user';
import { useProductStore } from '@/store/product';


const userStore = useUserStore()
const getInform = userStore.formData
const productStore = useProductStore()
const cart = computed(() => productStore.cart)
const store = computed(() => productStore.stores.find(store => store.id === storeId.value))
const order = computed(() => productStore.order)
const router = useRouter()
const route = useRoute()
const storeId = ref(Number(route.params.storeId))
const changePage = (url) => {
  router.push(url)
}
console.log(storeId)
// console.log(productStore.order[storeId.value][0].products)
  delete productStore.cart[storeId.value]

</script>

<template>
  <header class="text-center">
    訂單明細
  </header>
<div class="flex flex-col min-h-screen">
    <div class="flex-1 bg-slate-200" :class="{'!bg-black text-white px-2': userStore.isDarkTheme }">
    <div class="shadow-md my-3 py-3 px-5 mt-3 rounded-lg bg-white text-2xl text-bold flex items-center"
    :class="{'!bg-black text-white border-2 border-white border-solid': userStore.isDarkTheme }">
      <div>
      <img src="https://life.ntpu.edu.tw/upload/2022092711003130rlm1.png" alt="image" class="h-20 object-cover">
      </div>
      <p class="font-bold text-lg pb-2 ml-5 text-blue-400">小木屋鬆餅 {{ store.name }}</p>
    </div>
    <div class="shadow-md my-3 py-3 px-3 rounded-lg bg-white text-black"
    :class="{'!bg-black text-white border-2 border-white border-solid': userStore.isDarkTheme }">
        <p class="font-bold text-lg pb-2">訂購人資料</p>
        <p class="font-bold">
        </p>
        <div class="font-bold pl-3">
          <p>
          姓名： {{getInform.name}}
          </p>
          <p>
          電話： {{getInform.phone}}
          </p>
        </div>
    </div>
  <div class="bg-white text-black py-3 px-3"
  :class="{'!bg-black text-white border-2 border-white border-solid': userStore.isDarkTheme }">
      <p class="font-bold text-lg pb-2">餐點</p>
  <div class="mt-3 my-3 py-3 rounded-lg mx-2" v-for="item in productStore.order[storeId]" :key="item">
    <div v-for="product of item.products" :key="product" class="flex items-center mt-3">
      <img :src="product.image" alt="image" class="h-24" :class="{ 'rounded-full mx-2 h-20 w-20 object-cover': userStore.isDarkTheme }">
      <div>
        <p class="font-bold text-lg">{{ product.name }}</p>
        <p class="font-bold text-lg">$ {{ product.price }}</p>
        <span class="text-slate-400">{{ product.temperature }}</span>
        <span class="text-slate-400 ml-2">{{ product.sweetness }}</span>
      </div>
      <div class=" translate-y-6 translate-x-12">
      <p>x {{ product.quantity }}</p>
    </div>
    </div>
  </div>
</div>

  <div class="my-3 py-3 px-3 rounded-lg bg-white shadow-sm" v-for="item in productStore.order[storeId]" :key="item"
  :class="{'!bg-black text-white border-2 border-white border-solid': userStore.isDarkTheme }">
  <div class="my-3 py-1 px-3 rounded-lg bg-white text-black"
  :class="{'!bg-black text-white': userStore.isDarkTheme }">
      <p class="font-bold text-lg pb-2">付款方式</p>
      <p>{{ item.payMethod }}</p>
  </div>
  <div class="my-3 py-1 px-3 rounded-lg bg-white text-black"
  :class="{'!bg-black text-white': userStore.isDarkTheme }">
      <p class="font-bold text-lg pb-2">取貨方式</p>
      <p>{{ item.getMethod }}</p>
  </div>
  </div>
  <div class="flex justify-between items-center shadow-md my-3 py-4 px-3 rounded-lg bg-white text-black" v-for="item in order[storeId]" :key="item"
  :class="{'!bg-black text-white border-2 border-white border-solid': userStore.isDarkTheme }">
      <p class="font-bold text-lg pb-2">總計 $ {{ item.totalPrice }}</p>
        <div class="font-bold bg-brown text-white w-1/4 text-center rounded-lg text-md">
          <button class="h-10" @click="changePage('/')">繼續購物</button>
        </div>
  </div>
  </div>
</div>
</template>

<style scope></style>