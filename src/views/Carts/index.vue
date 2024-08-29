<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
import { useProductStore } from '@/store/product';
import { useUserStore } from '@/store/user';

const productStore = useProductStore()

const cart = computed(() => productStore.cart || [])

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
const isDarkTheme = computed(() => userStore.isDarkTheme)

const storeId = ref(Number(route.params.storeId))

const changePage = (url) => {
  router.push(url)
}
const totalPrice = computed(() => {
  let price = 0
  for (const item of productStore.cart[storeId.value]){
    price += item.price * item.quantity
  }
  return price
})

const totalQuantity = () => {
let allQuantity = 0
for (const item of productStore.cart[storeId.value]) {
  allQuantity += item.quantity
}
return allQuantity
}

const adjustQuantity = (id, num) => {
  // 有產品
  const product = productStore.cart[storeId.value].filter(product => product.id === id)
  productStore.cart[storeId.value].filter(product => product.id === id).map((product) => {
    if (product.quantity > 1  || num > 0){
      product.quantity += num
    }
    if (product.quantity === 1 && num < 0){
      product = ''
      return product
    }
  })
  }

  const deleteProduct = (id, temperature, sweetness, mealPreparation) => {
    const newProduct = productStore.cart[storeId.value].filter(product =>
      (product.id !== id) ||
      (product.id === id && product.temperature !== temperature) ||
      (product.id ===id && product.sweetness !== sweetness) ||
      (product.id ===id && product.mealPreparation !== mealPreparation))

    productStore.cart[storeId.value] = newProduct
    return productStore.cart
  }
</script>

<template>
  <header>
      <i class="fa-solid fa-chevron-left mx-2" @click="changePage(`/cart`)"></i>
  </header>
  <div class="flex flex-col min-h-screen">
    <div class="flex-1 bg-slate-200" :class="{ '!bg-black text-white':isDarkTheme }">
      <p class="my-2 text-black" :class="{ 'text-white': isDarkTheme }">全部 {{ totalQuantity() }} 筆</p>
      <div class="flex items-center shadow-md my-3 py-2 rounded-lg bg-white mx-2"
      :class="{'!bg-black text-white border-2 border-white border-solid': isDarkTheme }"
      v-for="(item, id) in cart[storeId]" :key="id">
        <img :src="item.image" alt="image" class="h-20 relative" :class="{ 'rounded-full mx-2 h-20 w-20 object-cover': isDarkTheme }">
        <div @click="changePage(`/store/${storeId}/product/${item.id}`)">
          <p class="font-bold text-xl text-black" :class="{ 'text-white': isDarkTheme }">{{ item.name }}</p>
          <p class="font-bold text-xl text-black" :class="{ 'text-white': isDarkTheme }">$ {{ item.price }}</p>
        <template v-if="item.category !== '找鹹的' && item.category !== '找甜的' && item.category !== '炸物點心'">
          <span class="text-slate-400">{{ item.temperature }}</span>
          <span class="text-slate-400 ml-1">{{ item.sweetness }}</span>
        </template>
        <template v-if="item.category === '找鹹的' || item.category === '找甜的'">
          <span class="text-slate-400">{{ item.mealPreparation }}</span>
        </template>
        </div>
        <div class=" absolute right-12">
          <button class="rounded-l-md w-6 text-white  bg-brown" @click="adjustQuantity(item.id, -1)">-</button>
          <input type="text" class="w-10 text-center text-black" :value="item.quantity">
          <button class="rounded-r-md w-6 text-white bg-brown " @click="adjustQuantity(item.id, 1)">+</button>
        </div>
        <div class="cursor-pointer absolute  right-6" @click="deleteProduct(item.id, item.temperature, item.sweetness, item.mealPreparation )">
          <i class="fa-regular fa-trash-can  text-sm"></i>
        </div>
  </div>

  <div class="flex items-center shadow-md my-3 py-2 justify-between px-7 mx-2 rounded-lg bg-white"
  :class="{'!bg-black text-white border-2 border-white border-solid': isDarkTheme }">
      <p class="text-lg font-bold text-black" :class="{ 'text-white': isDarkTheme }">合計：$ {{ totalPrice }}</p>
      <div class="bg-brown text-white rounded-lg text-center w-1/4 text-md h-10 ">
      <button @click="changePage(`/order/storeId/${storeId}`)" class="pt-2 ">去買單</button>
    </div>
  </div>
  </div>
</div>
</template>
<style scope></style>