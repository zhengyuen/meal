<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/user';
import { computed } from 'vue';
import { useProductStore } from '@/store/product';
import { useI18n } from 'vue-i18n';
import AdModal from '../adModal/index.vue'


const { t } = useI18n()
const isShowAd = ref(JSON.parse(localStorage.getItem('hasSeenAd')))

const userStore = useUserStore()
const productStore = useProductStore()
const isDarkTheme = computed(() => userStore.isDarkTheme)

const cartAmount = computed(() => Object.keys(productStore.cart).length )

const footerImage = computed(() => [
  {
    key:'/',
    image: 'fa-house',
    title: t('home')
  },
  {
    key:'/search',
    image: 'fa-magnifying-glass',
    title: t('search')
  },
  {
    key:'/cart',
    image: 'fa-cart-shopping',
    title: t('cart')
  },
  {
    key:'/store',
    image: 'fa-store',
    title: t('store_info')
  },
  {
    key:'/login',
    image: 'fa-user',
    title: t('profile')
  }
])

const router = useRouter()

const changePage = (url) => {
  router.push(url)
}

</script>

<template>
  <div class="flex flex-col min-h-screen">
    <header :class="['py-5 text-center fixed w-full top-0 z-10 bg-white', { darkMode: isDarkTheme }]">
      <img src="/public/images/logo.png" alt=" " class="h-14 inline-block">
    </header>
  <div class="flex-1 pt-24 pb-16">
    <slot />
  </div>

  <footer :class="['fixed bottom-0 w-full bg-white py-2', { darkMode: isDarkTheme }]">
    <ul class="flex w-full justify-center">
      <li v-for="item in footerImage" :key="item" class="flex flex-col items-center px-5 cursor-pointer" @click="changePage(item.key)">
        <a-badge v-if="item.image ==='fa-cart-shopping'" :count="cartAmount" size="large" :class="[{ darkMode: isDarkTheme }]">
      <i :class="['fa-solid text-2xl', item.image] "></i>
      </a-badge>
      <i v-else :class="['fa-solid text-2xl', item.image] "></i>
      <span class="text-sm">{{item.title}}</span>
      </li>
    </ul>
  </footer>
  <ad-modal :isShow="!isShowAd"/>
  </div>

</template>

<style scope>
</style>