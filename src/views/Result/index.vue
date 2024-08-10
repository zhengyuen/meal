<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/user';
import { useProductStore } from '@/store/product';


const payMethod = ['貨到付款','線上支付']
const getMethod = ['自取','外送']
const userStore = useUserStore()
const getInform = userStore.formData
const productStore = useProductStore()
const cart = computed(() => productStore.cart)
const storeId = ref(cart.value[0].storeId)
const store = computed(() => productStore.stores.find(store => store.id === storeId.value))
const order = computed(() => productStore.order)

const router = useRouter()
const changePage = (url) => {
  router.push(url)
}


</script>

<template>
<div class="flex flex-col min-h-screen">
    <div class="flex-1 bg-slate-200">
      <header class="text-center bg-white fixed w-full ">
        <i class="fa-solid fa-chevron-left left-3 absolute" @click="changePage('/order')"></i>
        確認明細</header>
    <div class="shadow-md my-3 py-3 px-5 mt-8 rounded-lg bg-white text-2xl text-bold flex items-center">
      <div>
      <img src="https://life.ntpu.edu.tw/upload/2022092711003130rlm1.png" alt="image" class="h-20 object-cover">
      </div>
      <p class="font-bold text-lg pb-2 ml-5 text-blue-400">小木屋鬆餅 {{ store.name }}</p>
    </div>
  <div class="bg-white py-3 px-3">
      <p class="font-bold text-lg pb-2">餐點</p>
  <div class="flex mt-3 items-center my-3 py-3 rounded-lg mx-2" v-for="item in cart" :key="item">
    <img :src="item.image" alt="image" class="h-24">
    <div>
      <p class="font-bold text-lg">{{ item.name }}</p>
      <p class="font-bold text-lg">$ {{ item.price }}</p>
    </div>
    <div class=" translate-y-6 translate-x-12">
    <p>x {{ item.quantity }}</p>
    </div>
  </div>
</div>

  <div class="my-3 py-3 px-3 rounded-lg bg-white shadow-sm">
  <div class="my-3 py-1 px-3 rounded-lg bg-white">
      <p class="font-bold text-lg pb-2">付款方式</p>
      <p>{{ order.payMethod }}</p>
  </div>
  <div class="my-3 py-1 px-3 rounded-lg bg-white">
      <p class="font-bold text-lg pb-2">取貨方式</p>
      <p>{{ order.getMethod }}</p>
  </div>
  </div>
  <div class="shadow-md my-3 py-3 px-3 rounded-lg bg-white">
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
  <div class="flex justify-between items-center shadow-md my-3 py-3 px-3 rounded-lg bg-white">
      <p class="font-bold text-lg pb-2">總計 $ {{ order.totalPrice }}</p>
      <div class="font-bold bg-brown text-white w-1/5 text-center rounded-lg text-md">
        <button class="h-10" @click="changePage('/store')">繼續購物</button>
      </div>
  </div>
  </div>
</div>
</template>

<style scope></style>