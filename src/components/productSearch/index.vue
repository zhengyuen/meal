<script setup>
import { defineProps } from 'vue';
defineProps({
  name:{
    type: String,
    default: ''
  },
  image:{
    type: String,
    default: ''
  },
  price:{
    type: Number,
    default: ''
  },
  storeName:{
    type: String,
    default: ''
  },
  score:{
    type: Number,
    default: ''
  },
  business_hours:{
    type: String,
    default: ''
  },
  productImage:{
    type: String,
    default: ''
  }
})
const emit = defineEmits(['goProducts'])
const goProduct = () => {
  emit('goProducts')
}
</script>

<template>
  <div class="flex">
    <img src="https://life.ntpu.edu.tw/upload/2022092711003130rlm1.png" alt="" class="w-14 h-14">
    <div class="ml-2">
      <p class="font-bold text-xl">{{ storeName }}</p>
      <div class="flex mb-2">
        <span class="bg-slate-200 rounded-sm">{{ business_hours }}</span>
        <div class=" bg-slate-200 ml-3 rounded-md px-2">
        <i class="fa-solid fa-star text-yellow-400 mr-1"></i><span>{{ score }}</span>
        </div>
      </div>
    </div>
  </div>
    <div class="inline-block cursor-pointer" @click="goProduct">
      <div class="border-2 border-solid border-slate-300 w-36 h-40 my-2 ml-2">
        <img :src="productImage" alt="" class=" w-32 ">
        <p class="text-center">{{ name }}</p>
      </div>
    </div>
</template>