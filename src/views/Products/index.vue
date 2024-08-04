<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const activeKey = ref('1');
const router = useRouter()
const goProduct = () => {
  router.push('/product')
}
</script>

<template>
  <header>
  <div class="flex px-5 items-center shadow-sm">
      <img src="https://life.ntpu.edu.tw/upload/2022092711003130rlm1.png" alt="image" class="h-24 object-cover relative">
    <div class="ml-4">
      <p class="font-bold">高雄苓雅店</p>
      <small class="font-bold">小木屋鬆餅</small><br>
      <i class="fa-solid fa-star text-yellow-400 mr-1"></i><span>4.4 (24)</span>
      <i class="fa-solid fa-clock text-gray ml-5 mr-2"></i><span>10:00 ~ 21:00</span>
    </div>
  </div>
  </header>
  <div class="fixed right-0 translate-y-2 z-10 bg-white w-10 text-center">
    <i class="fa-solid fa-magnifying-glass"></i>
  </div>
<a-tabs v-model:activeKey="activeKey" type="card" class="">
    <a-tab-pane key="1" tab="小木屋家推薦">
      <h1 class="font-bold text-brown">小木屋家推薦</h1>
      <div  class="flex mt-5 items-center justify-between px-3 py-3 shadow-lg" @click="goProduct">
        <div class="flex items-center">
        <img src="https://tb-static.uber.com/prod/image-proc/processed_images/8fc5590df20b5b5099d1db2301ab3488/7f4ae9ca0446cbc23e71d8d395a98428.jpeg" alt="" class="h-14">
        <p>莊園鮮奶茶</p>
        </div>
        <div>
        <p class="">$60</p>
        </div>
      </div>
      <div  class="flex mt-5 items-center justify-between px-3 py-3 shadow-lg">
        <div class="flex items-center">
        <img src="https://tb-static.uber.com/prod/image-proc/processed_images/8fc5590df20b5b5099d1db2301ab3488/7f4ae9ca0446cbc23e71d8d395a98428.jpeg" alt="" class="h-14">
        <p>莊園鮮奶茶</p>
        </div>
        <div>
        <p class="">$60</p>
        </div>
      </div>
      <div  class="flex mt-5 items-center justify-between px-3 py-3 shadow-lg">
        <div class="flex items-center">
        <img src="https://tb-static.uber.com/prod/image-proc/processed_images/8fc5590df20b5b5099d1db2301ab3488/7f4ae9ca0446cbc23e71d8d395a98428.jpeg" alt="" class="h-14">
        <p>莊園鮮奶茶</p>
        </div>
        <div>
        <p class="">$60</p>
        </div>
      </div>
    </a-tab-pane>
    <a-tab-pane key="2" tab="純粹好茶">
      <h1 class="font-bold text-brown">純粹好茶</h1>
      <div  class="flex mt-5 items-center justify-between px-3 py-3 shadow-lg">
        <div class="flex items-center">
        <img src="https://tb-static.uber.com/prod/image-proc/processed_images/8fc5590df20b5b5099d1db2301ab3488/7f4ae9ca0446cbc23e71d8d395a98428.jpeg" alt="" class="h-14">
        <p>莊園鮮奶茶</p>
        </div>
        <div>
        <p class="">$60</p>
        </div>
      </div>
      <div  class="flex mt-5 items-center justify-between px-3 py-3 shadow-lg">
        <div class="flex items-center">
        <img src="https://tb-static.uber.com/prod/image-proc/processed_images/8fc5590df20b5b5099d1db2301ab3488/7f4ae9ca0446cbc23e71d8d395a98428.jpeg" alt="" class="h-14">
        <p>莊園鮮奶茶</p>
        </div>
        <div>
        <p class="">$60</p>
        </div>
      </div>
      <div  class="flex mt-5 items-center justify-between px-3 py-3 shadow-lg">
        <div class="flex items-center">
        <img src="https://tb-static.uber.com/prod/image-proc/processed_images/8fc5590df20b5b5099d1db2301ab3488/7f4ae9ca0446cbc23e71d8d395a98428.jpeg" alt="" class="h-14">
        <p>莊園鮮奶茶</p>
        </div>
        <div>
        <p class="">$60</p>
        </div>
      </div>
    </a-tab-pane>
    <a-tab-pane key="3" tab="小農鮮奶">
        <h1 class="font-bold text-brown">小農鮮奶</h1>
      <div  class="flex mt-5 items-center justify-between px-3 py-3 shadow-lg">
        <div class="flex items-center">
        <img src="https://tb-static.uber.com/prod/image-proc/processed_images/8fc5590df20b5b5099d1db2301ab3488/7f4ae9ca0446cbc23e71d8d395a98428.jpeg" alt="" class="h-14">
        <p>莊園鮮奶茶</p>
        </div>
        <div>
        <p class="">$60</p>
        </div>
      </div>
      <div  class="flex mt-5 items-center justify-between px-3 py-3 shadow-lg">
        <div class="flex items-center">
        <img src="https://tb-static.uber.com/prod/image-proc/processed_images/8fc5590df20b5b5099d1db2301ab3488/7f4ae9ca0446cbc23e71d8d395a98428.jpeg" alt="" class="h-14">
        <p>莊園鮮奶茶</p>
        </div>
        <div>
        <p class="">$60</p>
        </div>
      </div>
      <div  class="flex mt-5 items-center justify-between px-3 py-3 shadow-lg">
        <div class="flex items-center">
        <img src="https://tb-static.uber.com/prod/image-proc/processed_images/8fc5590df20b5b5099d1db2301ab3488/7f4ae9ca0446cbc23e71d8d395a98428.jpeg" alt="" class="h-14">
        <p>莊園鮮奶茶</p>
        </div>
        <div>
        <p class="">$60</p>
        </div>
      </div>
    </a-tab-pane>
    <a-tab-pane key="4" tab="冬瓜冷露(甜度固定)">Content of Tab Pane 3</a-tab-pane>
    <a-tab-pane key="5" tab="季節限定">Content of Tab Pane 3</a-tab-pane>
    <a-tab-pane key="6" tab="炸物點心">Content of Tab Pane 3</a-tab-pane>
    <a-tab-pane key="7" tab="找鹹的">Content of Tab Pane 3</a-tab-pane>
    <a-tab-pane key="7" tab="找甜的">Content of Tab Pane 3</a-tab-pane>

  </a-tabs>
</template>

<style scope></style>