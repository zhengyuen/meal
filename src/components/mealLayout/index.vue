<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/user';
import { computed } from 'vue';
import { useProductStore } from '@/store/product';
import { ClockCircleOutlined } from '@ant-design/icons-vue';


const userStore = useUserStore()
const productStore = useProductStore()
const isDarkTheme = computed(() => userStore.isDarkTheme)
const cartAmount = computed(() => {
  let amount = 0
  for (const item of productStore.cart ) {
    amount += item.quantity
  }
  return amount
})

const footerImage = ref([
  {
    key:'/',
    image: 'fa-house',
    title: '首頁'
  },
  {
    key:'/cart',
    image: 'fa-cart-shopping',
    title: '購物車'
  },
  {
    key:'/store',
    image: 'fa-store',
    title: '店家資訊'
  },
  {
    key:'/login',
    image: 'fa-user',
    title: '我的'
  }
])

const router = useRouter()

const changePage = (url) => {
  router.push(url)
}

</script>

<template>
  <div class="flex flex-col min-h-screen">
    <header :class="['py-5 text-center fixed w-full top-0 z-10', { darkMode: isDarkTheme }]">
      <img src="https://www.beclass.com/share/202404/284d8186613e2989e1bf0846r.png" alt=" " class="h-14 inline-block">
    </header>
  <div class="flex-1 pt-24 pb-16">
    <slot />
  </div>

  <footer :class="['fixed bottom-0 w-full bg-white py-2', { darkMode: isDarkTheme }]">
    <ul class="flex w-full justify-center">
      <li v-for="item in footerImage" :key="item" class="flex flex-col items-center px-7 cursor-pointer" @click="changePage(item.key)">
        <a-badge v-if="item.image ==='fa-cart-shopping'" :count="cartAmount" size="large">
      <i :class="['fa-solid text-2xl', item.image] "></i>
      </a-badge>
      <i v-else :class="['fa-solid text-2xl', item.image] "></i>
      <span class="text-sm">{{item.title}}</span>
      </li>
    </ul>
  </footer>
  </div>

</template>

<style scope></style>