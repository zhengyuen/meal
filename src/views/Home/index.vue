<script setup>
import { reactive, ref } from 'vue';
import homeCard from '@/components/homeCard/index.vue';
import { useUserStore } from '@/store/user';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useProductStore } from '@/store/product';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()

const router = useRouter()

const changePage = (url) => {
  router.push(url)
}
const searchValue = ref('')
const handleSearch = (event) => {
  if (event.keyCode === 13) {
    changePage(`/search?keyword=${searchValue.value}`)
  }
}

const userStore = useUserStore()
const isDarkTheme = computed(() => userStore.isDarkTheme)

const productStore = useProductStore()
const stores = computed(() => productStore.stores || [])

const carouseImage = reactive([
  'https://kaoku.tw/shinemood/source/KITKAT%E8%81%AF%E5%90%8D-FB_%E5%B7%A5%E4%BD%9C%E5%8D%80%E5%9F%9F%2010727.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk5dOJ6yCfrcszarEhvXizCWOHBSEfcQolQg&s'
])

const menuImage = ref([
  {
    image:'fa-magnifying-glass',
    title: t('near')
  },
  {
    image:'fa-receipt',
    title: t('order')
  },
  {
    image:'fa-ticket-simple',
    title: t('coupon')
  },
  {
    image:'fa-money-check',
    title: t('voucher')
  },
  {
    image:'fa-note-sticky',
    title: t('history_order')
  }
])
</script>

<template>
<div class="text-center px-8 fixed z-10 w-full bg-white" :class="[{ darkMode: isDarkTheme }]">
  <!-- <i class="fa-solid fa-magnifying-glass absolute top-1/2 -translate-y-1/2 left-12" :class="[{ 'text-black':isDarkTheme }]"></i>
  <input type="text" class="py-1 mb-1 border-2 border-gray border-solid rounded-full w-full pl-8" placeholder="搜尋門市或商品" v-model="searchValue" @keydown="handleSearch"> -->
</div>
  <a-carousel class="w-full mt-2" autoplay>
    <div v-for="(item, idx) in carouseImage" :key="idx">
			<img class="w-full h-[200px] object-cover" :src="item"/>
		</div>
  </a-carousel>
  <div  class="flex justify-center my-3 text-white">
    <div v-for="items in menuImage" :key="items" class="flex flex-col items-center pr-4 last:pr-0">
      <div v-if="items.image === 'fa-receipt'" @click="changePage('/orderMenu')">
        <i :class="['fa-solid text-brown text-xl cursor-pointer', items.image, { darkMode: isDarkTheme }]"></i>
      </div>
        <i v-else :class="['fa-solid text-brown text-xl cursor-pointer', items.image, { darkMode: isDarkTheme }]"></i>
    <p class="text-black" :class="[{ darkMode: isDarkTheme }]">{{ items.title }}</p>
    </div>
  </div>

<template  v-for="(item,id) in stores" :key="id">
  <home-card
  v-if="id < 3"
  :name="item.name"
  :time="item.business_hours"
  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRio9-XKHqz6oLzNr5YuTMHgmcebMXfAEoegg&s"
  @go-products="changePage(`/store/${item.id}/products`)"
  />
  </template>

</template>