<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { useProductStore } from '@/store/product';

const productStore = useProductStore()
const cart = ref(productStore.cart || [])
const router = useRouter()
const order = () => {
  router.push('/order')
}
console.log(cart.value.length)
console.log(cart.value[0])

</script>

<template>
  <div class="flex flex-col min-h-screen">
    <div class="flex-1 bg-slate-200">
  <p>全部 {{ cart.length }} 筆</p>
  <div class="flex items-center shadow-md my-3 py-2 rounded-lg bg-white mx-2" v-for="(item, id) in cart" :key="id">
    <img :src="item.image" alt="image" class="h-20">
    <div>
      <p class="font-bold text-xl">{{ item.name }}</p>
      <p class="font-bold text-xl">$ 60</p>
    </div>
    <div class=" translate-y-6 translate-x-12">
    <button class="rounded-l-md w-6 text-white  bg-brown">-</button>
    <input type="text" class="w-10 text-center" value="1">
    <button class="rounded-r-md w-6 text-white  bg-brown">+</button>
    </div>
  </div>
  <div class="flex items-center shadow-md my-3 py-2 rounded-lg bg-white mx-2">
    <img src="https://tb-static.uber.com/prod/image-proc/processed_images/8fc5590df20b5b5099d1db2301ab3488/7f4ae9ca0446cbc23e71d8d395a98428.jpeg" alt="image" class="h-20">
    <div>
      <p class="font-bold text-xl">莊園鮮奶茶</p>
      <p class="font-bold text-xl">$ 60</p>
    </div>
    <div class=" translate-y-6 translate-x-12">
    <button class="rounded-l-md w-6 text-white  bg-brown">-</button>
    <input type="text" class="w-10 text-center" value="1">
    <button class="rounded-r-md w-6 text-white  bg-brown">+</button>
    </div>
  </div>
  <div class="flex items-center shadow-md my-3 py-2 rounded-lg bg-white mx-2">
    <img src="https://tb-static.uber.com/prod/image-proc/processed_images/8fc5590df20b5b5099d1db2301ab3488/7f4ae9ca0446cbc23e71d8d395a98428.jpeg" alt="image" class="h-20">
    <div>
      <p class="font-bold text-xl">莊園鮮奶茶</p>
      <p class="font-bold text-xl">$ 60</p>
    </div>
    <div class=" translate-y-6 translate-x-12">
    <button class="rounded-l-md w-6 text-white  bg-brown">-</button>
    <input type="text" class="w-10 text-center" value="1">
    <button class="rounded-r-md w-6 text-white  bg-brown">+</button>
    </div>
  </div>

  <div class="flex items-center shadow-md my-3 py-2 justify-between px-7 mx-2 rounded-lg bg-white">
      <p class="text-lg">合計：${{}}</p>
      <div class="bg-brown text-white rounded-lg text-center w-1/4 text-md h-10">
      <button @click="order" class="pt-2">去買單</button>
    </div>
  </div>
  </div>
</div>
</template>

<style scope></style>