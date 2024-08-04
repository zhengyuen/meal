<script setup>
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/user';

const payMethod = ['貨到付款','線上支付']
const getMethod = ['自取','外送']
const userStore = useUserStore()
const getInform = userStore.formData
const router = useRouter()


</script>

<template>
<div class="flex flex-col min-h-screen">
    <div class="flex-1 bg-slate-200">
      <header class="text-center bg-white fixed w-full ">
        <i class="fa-solid fa-chevron-left left-3 absolute"></i>
        確認明細</header>
    <div class="shadow-md my-3 py-3 px-5 mt-8 rounded-lg bg-white text-blue-500 text-bold">
      <p class="font-bold text-lg pb-2">小木屋鬆餅 高雄苓雅店</p>
      <i class="fa-solid fa-phone mr-3"></i><span>07-722-6777</span>
    </div>
<div class="bg-white">
  <div class="flex mt-3 items-center my-3 py-3 rounded-lg mx-2">
    <img src="https://tb-static.uber.com/prod/image-proc/processed_images/8fc5590df20b5b5099d1db2301ab3488/7f4ae9ca0446cbc23e71d8d395a98428.jpeg" alt="image" class="h-24">
    <div>
      <p class="font-bold text-xl">莊園鮮奶茶</p>
      <p class="font-bold text-2xl">$ 60</p>
    </div>
    <div class=" translate-y-6 translate-x-12">
    <button class="rounded-l-md w-6 text-white  bg-brown">-</button>
    <input type="text" class="w-10 text-center" value="1">
    <button class="rounded-r-md w-6 text-white  bg-brown">+</button>
    </div>
  </div>
  <div class="flex items-center my-3 py-3 rounded-lg mx-2">
    <img src="https://tb-static.uber.com/prod/image-proc/processed_images/8fc5590df20b5b5099d1db2301ab3488/7f4ae9ca0446cbc23e71d8d395a98428.jpeg" alt="image" class="h-24">
    <div>
      <p class="font-bold text-xl">莊園鮮奶茶</p>
      <p class="font-bold text-2xl">$ 60</p>
    </div>
    <div class=" translate-y-6 translate-x-12">
    <button class="rounded-l-md w-6 text-white  bg-brown">-</button>
    <input type="text" class="w-10 text-center" value="1">
    <button class="rounded-r-md w-6 text-white  bg-brown">+</button>
    </div>
  </div>
  <div class="flex items-center my-3 py-3 rounded-lg mx-2">
    <img src="https://tb-static.uber.com/prod/image-proc/processed_images/8fc5590df20b5b5099d1db2301ab3488/7f4ae9ca0446cbc23e71d8d395a98428.jpeg" alt="image" class="h-24">
    <div>
      <p class="font-bold text-xl">莊園鮮奶茶</p>
      <p class="font-bold text-2xl">$ 60</p>
    </div>
    <div class=" translate-y-6 translate-x-12">
    <button class="rounded-l-md w-6 text-white  bg-brown">-</button>
    <input type="text" class="w-10 text-center" value="1">
    <button class="rounded-r-md w-6 text-white  bg-brown">+</button>
    </div>
  </div>
</div>

  <div class="shadow-md my-3 py-3 px-3 rounded-lg bg-white">
      <p class="font-bold text-lg pb-2">付款方式</p>
      <a-button v-for="items in payMethod" :key="items" class="font-bold">{{ items }}</a-button>
  </div>
  <div class="shadow-md my-3 py-3 px-3 rounded-lg bg-white">
      <p class="font-bold text-lg pb-2">取貨方式</p>
      <a-button v-for="items in getMethod" :key="items" class="font-bold">{{ items }}</a-button>
  </div>
  <div class="shadow-md my-3 py-3 px-3 rounded-lg bg-white">
      <p class="font-bold text-lg pb-2">訂購人資料</p>
      <p v-for="items in getInform" :key="items" class="font-bold">
        {{ items }}
      </p>
  </div>
  <div class="flex justify-between items-center shadow-md my-3 py-3 px-3 rounded-lg bg-white">
      <p class="font-bold text-lg pb-2">總計${{}}</p>
      <div class="font-bold bg-brown text-white w-1/5 text-center rounded-lg text-md">
        <button >繼續購物</button>
      </div>
  </div>
  </div>
</div>
</template>

<style scope></style>