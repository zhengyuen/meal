<script setup>
import { ref } from 'vue'


const footerImage = ref([
  {
    image: 'https://cdn-icons-png.flaticon.com/128/15665/15665402.png',
    title: '首頁'
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/128/9219/9219671.png',
    title: '購物車'
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/128/17108/17108990.png',
    title: '店家資訊'
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/128/2354/2354573.png',
    title: '我的'
  }
])

</script>

<template>
  <div class="flex flex-col min-h-screen">
    <nav class="h-14">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVAtBaCVj78JLQzp7ii3ny1SYbOZzA-EGFVw&s" alt=" " class="h-14 ml-40 mt-2">
    </nav>
  <div class="flex-1">
    <slot />
  </div>

  <footer>
    <div class="flex w-full justify-around">
      <div v-for="item in footerImage" :key="item" class="mx-3 text-center">
      <img :src="item.image" alt="image" class="w-10 h-10"><span class="text-sm">{{item.title}}</span>
      </div>
    </div>

  </footer>
  </div>

</template>

<style scope></style>