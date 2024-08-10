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
  }
})
const emit = defineEmits(['goProductClick'])
const goProduct = () => {
  emit('goProductClick')
}
</script>

<template>
    <template>
    <div class="ml-4">
      <p  class="font-bold">{{ storeName }}</p>
      <small class="font-bold">小木屋鬆餅</small><br>
      <i class="fa-solid fa-star text-yellow-400 mr-1"></i><span>{{ score }}</span>
      <i class="fa-solid fa-clock text-gray ml-5 mr-2"></i><span>{{ business_hours }}</span>
    </div>
  </template>
  <div class="flex mt-5 items-center justify-between px-3 py-3 shadow-lg" @click="goProduct">
        <div class="flex items-center">
        <img :src="image" alt="" class="h-14">
        <p>{{ name }}</p>
        </div>
        <div>
        <p>${{ price }}</p>
        </div>
      </div>
</template>