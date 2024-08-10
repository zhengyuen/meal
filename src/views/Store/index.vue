<script setup>
import homeCard from '@/components/homeCard/index.vue';
import { ref,reactive } from 'vue';
import { useUserStore } from '@/store/user';
import { useProductStore } from '@/store/product';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';

const router = useRouter()
const route = useRouter()


const userStore = useUserStore()
const productStore = useProductStore()
// const keyword = ref(route.query.keyword)
const stores = ref(productStore.stores || [])
const store = computed(() => productStore.stores.filter(stores => stores.name.includes(searchValue)))
console.log(stores)
const changePage = (url) => {
  router.push(url)
}
const searchValue = ref('')
const handleSearch = (event) => {
  if (event.keyCode === 13) {
    changePage(`/search?keyword=${searchValue.value}`)
  }
}

const isDarkTheme = computed(() => userStore.isDarkTheme)

const area = ['台北市','新北市','新竹市','新竹縣','桃園市','苗栗縣','台中市','彰化縣','雲林縣','台南市','高雄市']
const area1 = ref('台北市')


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
    >
      <a-select-option v-for="item in area" :key="item" :value="item" v-model="value"></a-select-option>
    </a-select>
    </a-space>
  <input type="text" class="py-1 mb-1 border-2 border-gray border-solid rounded-full  pl-5 ml-2" placeholder="搜尋門市" v-model="searchValue" @keydown="handleSearch" id="search">
  <label for="search" class="cursor-pointer"><i class="fa-solid fa-magnifying-glass ml-2 text-white"></i></label>
</div>
</header>
<div class="mt-14">
  <template v-if="store.length">
  <home-card v-for ="(item) in store"
  :key="item"
  :name="item.name"
  :time="item.business_hours"
  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRio9-XKHqz6oLzNr5YuTMHgmcebMXfAEoegg&s"
  @go-products="changePage(`/store/${item.id}`)"
  />
  </template>
  <template v-else>
  <home-card v-for ="(item) in stores"
  :key="item"
  :name="item.name"
  :time="item.business_hours"
  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRio9-XKHqz6oLzNr5YuTMHgmcebMXfAEoegg&s"
  @go-products="changePage(`/store/${item.id}`)"
  />
  </template>
</div>

</template>

<style scope></style>