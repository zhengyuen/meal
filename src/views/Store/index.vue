<script setup>
import homeCard from '@/components/homeCard/index.vue';
import { ref,reactive } from 'vue';
import { useUserStore } from '@/store/user';
import { useProductStore } from '@/store/product';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const userStore = useUserStore()
const productStore = useProductStore()
const products = ref(productStore.products || [])
const changePage = (url) => {
  router.push(url)
}

const isDarkTheme = computed(() => userStore.isDarkTheme)

const area = ['台北市','新北市','新竹市','新竹縣','桃園市','苗栗縣','台中市','彰化縣','雲林縣','台南市','高雄市']
</script>

<template>
<header>
  <div v-if="isDarkTheme" class="flex justify-center items-center bg-brown">
  <p class="bg-brown rounded-md w-16 text-white text-center">找地區</p><select class="text-black"><option v-for="item in area" :key="item" :value="item">{{ item }}</option></select>
  <input type="text" class="py-1 mb-1 border-2 border-gray border-solid rounded-full  pl-8 ml-2" placeholder="搜尋門市或商品"><i class="fa-solid fa-magnifying-glass ml-2"></i>
</div>
<div v-else class="flex justify-center items-center bg-brown mb-2 py-1 w-full fixed">
  <p class="bg-brown rounded-md w-16 text-white text-center">找地區</p><select ><option v-for="item in area" :key="item" :value="item">{{ item }}</option></select>
  <input type="text" class="py-1 mb-1 border-2 border-gray border-solid rounded-full  pl-8 ml-2" placeholder="搜尋門市或商品"><i class="fa-solid fa-magnifying-glass ml-2 text-white"></i>
</div>
</header>
<div class="mt-14">
  <home-card v-for ="(item) in products"
  :key="item"
  :name="item.name"
  :time="item.business_hours"
  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRio9-XKHqz6oLzNr5YuTMHgmcebMXfAEoegg&s"
  @go-products="changePage(`/store/${item.id}`)"
  />
</div>

</template>

<style scope></style>