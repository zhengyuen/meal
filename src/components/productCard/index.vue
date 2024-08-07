<script setup>
import { defineProps, normalizeProps } from 'vue';
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
  }
})
const emit = defineEmits(['goProductClick'])
const goProduct = () => {
  emit('goProductClick')
}
</script>

<template>
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