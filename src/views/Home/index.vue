<script setup>
import MealLayout from '@/components/mealLayout/index.vue';
import { reactive } from 'vue';

const carouseImage = reactive([
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8QMXwrkg4-ZZmiNjg154GSBJgOx1bHizFtQ&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk5dOJ6yCfrcszarEhvXizCWOHBSEfcQolQg&s'
])
</script>

<template>
<meal-layout>
<div class="text-center mt-6">
  <img src="https://cdn-icons-png.flaticon.com/128/5636/5636698.png" alt="image" class="w-6 absolute left-7 top-[78px] z-10">
  <input type="text" class="border-2 border-gray border-solid rounded-full w-[350px] pl-8 relative " placeholder="搜尋門市或商品">
</div>
  <a-carousel class="w-full mt-6" autoplay>
    <div v-for="(item, idx) in carouseImage" :key="idx">
			<img class="w-full h-[200px] object-cover" :src="item"/>
		</div>
  </a-carousel>
  <div class="flex mt-4">
    <div class="text-center w-14 ml-4">
    <img src="https://cdn-icons-png.flaticon.com/128/13727/13727415.png" alt="" class="w-8">
    <p class="mt-1">找附近</p>
  </div>
  <div class="text-center w-10 ml-4">
    <img src="https://cdn-icons-png.flaticon.com/128/16312/16312795.png" alt="" class="w-8">
    <p class="mt-1">訂單</p>
  </div>
  <div class="text-center w-14 ml-5">
    <img src="https://cdn-icons-png.flaticon.com/128/7653/7653284.png" alt="" class="w-8">
    <p class="mt-1">優惠券</p>
  </div>
  <div class="text-center w-14 ml-5">
    <img src="https://cdn-icons-png.flaticon.com/128/14897/14897276.png" alt="" class="w-8">
    <p class="mt-1">兌換券</p>
  </div>
  <div class="text-center w-14 ml-5">
    <img src="https://cdn-icons-png.flaticon.com/128/9585/9585389.png" alt="" class="w-8">
    <p class="mt-1">曾點過</p>
  </div>
  </div>

<div class="ml-6">
  <div class="w-[340px] bg-black h-48 rounded-lg">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRio9-XKHqz6oLzNr5YuTMHgmcebMXfAEoegg&s" alt="image" class="w-full object-cover h-48 rounded-lg">
  </div>
  <p class="font-bold mt-2 text-lg">小木屋鬆餅 台北西湖店</p><span class="text-gray">10:30~19:00</span>
</div>


</meal-layout>
</template>

<style scope>

</style>