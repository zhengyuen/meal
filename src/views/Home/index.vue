<script setup>
import { reactive, ref } from 'vue';
import homeCard from '@/components/homeCard/index.vue';
import { useUserStore } from '@/store/user';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const goProducts = () => {
  router.push('/products')
}

const userStore = useUserStore()
const isDarkTheme = computed(() => userStore.isDarkTheme)

const carouseImage = reactive([
  'https://kaoku.tw/shinemood/source/KITKAT%E8%81%AF%E5%90%8D-FB_%E5%B7%A5%E4%BD%9C%E5%8D%80%E5%9F%9F%2010727.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk5dOJ6yCfrcszarEhvXizCWOHBSEfcQolQg&s'
])

const menuImage = reactive([
  {
    image:'https://cdn-icons-png.flaticon.com/128/5636/5636698.png',
    title: '找附近'
  },
  {
    image:'https://cdn-icons-png.flaticon.com/128/16312/16312795.png',
    title: '訂單'
  },
  {
    image:'https://cdn-icons-png.flaticon.com/128/7653/7653284.png',
    title: '優惠券'
  },
  {
    image:'https://cdn-icons-png.flaticon.com/128/14897/14897276.png',
    title: '兌換券'
  },
  {
    image:'https://cdn-icons-png.flaticon.com/128/9585/9585389.png',
    title: '曾點過'
  }
])
const storeList = ref([
  {
    name:'台北西湖店',
    time:'10:30~19:00',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRio9-XKHqz6oLzNr5YuTMHgmcebMXfAEoegg&s',

  },
  {
    name:'台北師大店',
    time:'8:30~19:00',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRio9-XKHqz6oLzNr5YuTMHgmcebMXfAEoegg&s',

  },
  {
    name:'台北內湖店',
    time:'8:30~19:00',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRio9-XKHqz6oLzNr5YuTMHgmcebMXfAEoegg&s',

  }
])
</script>

<template>
<div v-if="isDarkTheme" class="text-center px-8 fixed top-28 z-10 w-full bg-black text-black">
  <i class="fa-solid fa-magnifying-glass absolute top-1/2 -translate-y-1/2 left-12"></i>
  <input type="text" class="py-1 mb-1 border-2 border-gray border-solid rounded-full w-full pl-8" placeholder="搜尋門市或商品">
</div>
<div v-else class="text-center px-8 fixed top-28 z-10 w-full bg-white">
  <i class="fa-solid fa-magnifying-glass absolute top-1/2 -translate-y-1/2 left-12"></i>
  <input type="text" class="py-1 mb-1 border-2 border-gray border-solid rounded-full w-full pl-8" placeholder="搜尋門市或商品">
</div>
  <a-carousel class="w-full mt-6" autoplay>
    <div v-for="(item, idx) in carouseImage" :key="idx">
			<img class="w-full h-[200px] object-cover" :src="item"/>
		</div>
  </a-carousel>
  <div v-if="isDarkTheme" class="flex justify-center my-3 text-white">
    <div v-for="items in menuImage" :key="items" class="flex flex-col items-center pr-4 last:pr-0">
    <img :src="items.image" alt="image" class="w-8">
    <p>{{ items.title }}</p>
    </div>
  </div>
  <div v-else class="flex justify-center my-3">
    <div v-for="items in menuImage" :key="items" class="flex flex-col items-center pr-4 last:pr-0">
    <img :src="items.image" alt="image" class="w-8">
    <p>{{ items.title }}</p>
    </div>
  </div>
  <home-card
  v-for="item in storeList"
  :key="item.name"
  :name="item.name"
  :time="item.time"
  :image="item.image"
  @click="goProducts"
  />
</template>
<style scope></style>