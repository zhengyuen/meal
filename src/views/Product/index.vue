<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { message } from 'ant-design-vue';


const router = useRouter()
const addCart = () => {
  router.push('/products')
  message.success('已加入購物車')
}
const value1 = ref(60);
const addonBeforeValue = ref('add');

const temperature = ['正常冰','少冰','去冰','常溫','溫','熱']
const sweetness = ['正常糖','七分糖','半糖','三分糖','無糖']

</script>

<template>
  <h1 class="font-bold text-lg ml-1">莊園鮮奶茶</h1>
  <div class="mx-auto">
    <img src="https://tb-static.uber.com/prod/image-proc/processed_images/8fc5590df20b5b5099d1db2301ab3488/7f4ae9ca0446cbc23e71d8d395a98428.jpeg" alt="image" class="h-1/2">
  </div>
<div class="mb-5 px-3">
  <h1 class="font-bold">溫度</h1>
  <div class="text-center mb-5">
  <a-button v-for="item in temperature"
  :key="item"
  :value="item"
  class="mr-3 mt-3 w-20">{{ item }}</a-button>
  </div>

  <h1 class="font-bold">甜度</h1>
  <div class="text-center mb-5">
  <a-button v-for="item in sweetness"
  :key="item"
  :value="item"
  class="mr-3 mt-3 w-20">{{ item }}</a-button>
  </div>
  <h1>訂購人姓名</h1>
  <input type="text" class="border-2 border-gray rounded-md w-full px-3 mt-2 h-8 mb-6">
</div>

<hr>

<div class="px-3 my-5">
  <h1>總金額：40 元</h1>
  <div class="w-[112px] mt-3 bg-lightGray">
  <button class="rounded-l-md w-6">-</button>
  <input type="text" class="w-16 text-center" value="1">
  <button class="rounded-r-md w-6">+</button>
  </div>
  <!-- <a-space direction="vertical">
    <a-input-number v-model:value="value1" addon-before="+" addon-after="$"></a-input-number>
  </a-space> -->
  <div class="bg-brown h-10 text-white flex mt-3 justify-center rounded-md px-5 mb-10">
  <button @click="addCart">加入購物車</button>
  </div>
</div>

</template>

<style scope></style>