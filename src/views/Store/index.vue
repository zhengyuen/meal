<script setup>
import homeCard from '@/components/homeCard/index.vue';
import { ref,reactive, handleError } from 'vue';
import { useUserStore } from '@/store/user';
import { useProductStore } from '@/store/product';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';

const router = useRouter()
const route = useRouter()


const userStore = useUserStore()
const productStore = useProductStore()
const stores = ref(productStore.stores || [])
const changePage = (url) => {
  router.push(url)
}
const searchValue = ref('')
const handleSearch = (event) => {
  if (event.keyCode === 13) {
  stores.value = productStore.stores.filter(store => store.name.includes(searchValue.value))
    }
  }
const isDarkTheme = computed(() => userStore.isDarkTheme)

const area = ['台北','新北','新竹','桃園','苗栗','台中','彰化','雲林','台南','高雄']

const handleChange = (city) => {
  stores.value = productStore.stores.filter(store => store.category.includes(city))
}
console.log(searchValue)
</script>

<template>
<header>
  <div v-if="isDarkTheme" class="flex justify-center items-center bg-brown">
  <p class="bg-brown rounded-md w-16 text-white text-center">找地區</p>
  <!-- <select class="text-black"><option v-for="item in area" :key="item" :value="item">{{ item }}</option></select> -->
  <input type="text" class="py-1 mb-1 border-2 border-gray border-solid rounded-full  pl-5 ml-2" placeholder="搜尋門市" v-model="searchValue" @keydown="handleSearch" id="search">
  <label for="search" class="cursor-pointer"><i class="fa-solid fa-magnifying-glass ml-2"></i></label>
</div>
<div v-else class="flex justify-center items-center bg-brown mb-2 py-1 w-full fixed">
  <p class="bg-brown rounded-md w-16 text-white text-center">找地區</p>
  <a-space >
    <a-select
      ref="select"
      style="width: 90px"
      @focus="none"
      @change="handleChange"
    >
      <a-select-option v-for="item in area" :key="item" :value="item" v-model="value"></a-select-option>
    </a-select>
    </a-space>
  <input type="text" class="py-1 mb-1 border-2 border-gray border-solid rounded-full  pl-5 ml-2" placeholder="搜尋門市" v-model="searchValue" @keydown="handleSearch" id="search">
    <label for="searchValue" class="cursor-pointer" @click="handleSearch"><i class="fa-solid fa-magnifying-glass ml-2 text-white" ></i></label>
</div>
</header>
<div class="mt-14">
  <template v-if="stores.length">
  <home-card v-for ="(item) in stores"
  :key="item"
  :name="item.name"
  :time="item.business_hours"
  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRio9-XKHqz6oLzNr5YuTMHgmcebMXfAEoegg&s"
  @go-products="changePage(`/store/${item.id}/products`)"
  />
  </template>
  <template v-else>
    <p class="ml-5 pt-5 text-center">沒有您要搜尋的結果</p>
  </template>
</div>

</template>

<style scope></style>