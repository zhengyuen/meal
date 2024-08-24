<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/user';
import { useProductStore } from '@/store/product';


const userStore = useUserStore()
const getInform = userStore.formData
const productStore = useProductStore()
const order = computed(() => productStore.order)
const cart = computed(() => productStore.cart)
const router = useRouter()
const changePage = (url) => {
  router.push(url)
}


</script>

<template>
  <header class="text-center bg-white fixed w-full ">
    <!-- <i class="fa-solid fa-chevron-left left-3 absolute" @click="changePage('/order')"></i>
    我的訂單 -->
  </header>
<div class="flex flex-col min-h-screen">
    <div class="flex-1 bg-slate-200">
      <p class="text-2xl">我的訂單</p>
      <p>全部 {{ order.length }} 筆</p>
      <div class="shadow-md my-3 py-3 px-5 mx-3 rounded-lg bg-white text-2xl text-bold flex items-center" v-for="item in order" :key="item" @click="changePage('/orders')">
        <div>
      <img src="https://life.ntpu.edu.tw/upload/2022092711003130rlm1.png" alt="image" class="h-20 object-cover">
      </div>
      <div>
        <p class="font-bold text-lg pb-2 ml-5">小木屋鬆餅 {{ item.store }}</p>
        <div class="font-bold text-lg text-slate-400 flex ml-5">
          <p>{{ item.products.length }} 項 $ {{ item.totalPrice }} 元</p>
        </div>
      </div>
    </div>
</div>
  </div>
</template>

<style scope></style>