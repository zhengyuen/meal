<script setup>
import homeCard from '@/components/homeCard/index.vue';
import { ref,reactive, handleError } from 'vue';
import { useUserStore } from '@/store/user';
import { useProductStore } from '@/store/product';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()

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
  console.log(searchValue)
  stores.value = productStore.stores.filter(store => store.name.includes(searchValue.value))
  if (event.keyCode === 13) {
  stores.value = productStore.stores.filter(store => store.name.includes(searchValue.value))
    }
  }
const isDarkTheme = computed(() => userStore.isDarkTheme)

const area = ['台北','新北','新竹','桃園','苗栗','台中','彰化','雲林','台南','高雄']

const handleChange = (city) => {
  stores.value = productStore.stores.filter(store => store.category.includes(city))
}
</script>

<template>
<div class="flex justify-center items-center bg-brown mb-2 py-1 w-full fixed RwdSearch">
  <p class="bg-brown rounded-md w-16 text-white text-center">{{ t('search_local') }}</p>
  <a-space>
    <a-select
      ref="select"
      style="width: 90px"
      @focus="none"
      @change="handleChange"
    >
      <a-select-option v-for="item in area" :key="item"></a-select-option>
    </a-select>
    </a-space>
  <input type="text" class="py-1 mb-1 border-2 border-gray border-solid rounded-full  pl-5 ml-2 text-black" :placeholder="$t('search_stores')" v-model="searchValue" id="search" @keydown="handleSearch">
    <button class="cursor-pointer" @click="handleSearch">
      <i class="fa-solid fa-magnifying-glass ml-2 text-white"></i></button>
</div>
<div class="mt-14">
  <template v-if="stores.length">
  <home-card v-for ="(item) in stores"
  class="RwdModel"
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

<style scope>
@media screen and (min-width: 576px) {
.RwdModel {
    width: 50%;
    margin: auto
  }
.RwdSearch {
  margin: auto;
  padding: 2px 30%;
  width: 100%;
}
}
</style>