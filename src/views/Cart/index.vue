<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router';
import { useProductStore } from '@/store/product';
import { message } from 'ant-design-vue';


const productStore = useProductStore()
const cart = ref(productStore.cart || [])
const router = useRouter()

const changePage = (url) => {
  router.push(url)
}

const cartVal = computed(() => Object.values(cart.value))
// const totalQuantity = (id) => {
//   let allQuantity = 0
//   for (const item of productStore.cart[id]) {
//     allQuantity += item.quantity
//   }
//   return allQuantity
// }

console.log(Object.keys(productStore.cart))

  const deleteProduct = (id) => {
    const cartId = Object.keys(productStore.cart).filter(storeId => Number(storeId) === id)
    delete productStore.cart[cartId]
    message.success('已刪除購物車')
    return productStore.cart || []
  }

</script>
<template>
  <header>
  </header>
  <div class="flex flex-col min-h-screen">
    <div class="flex-1 bg-slate-200 text-black" :class="[{'!bg-black text-white': isDarkTheme }]">
      <p class="font-bold text-xl mx-2 mt-2 text-black" :class="[{ 'text-white': isDarkTheme }]">購物車</p>
      <div class="items-center shadow-md my-4 py-2 px-3 rounded-lg bg-white mx-3"  v-for="(item) in cartVal" :key="item">
        <div class="flex items-center">
          <img src="https://life.ntpu.edu.tw/upload/2022092711003130rlm1.png" alt="image" class="h-20 relative">
            <div class="ml-3" >
              <p class="font-bold text-lg text-slate-400">小木屋鬆餅</p>
              <p class="font-bold text-xl text-black"> {{ item[0].storeName }}</p>
              <p class="text-black">共 {{ item.length}} 項</p>
            </div>
            <div class="cursor-pointer absolute  right-6" @click="deleteProduct(item[0].storeId)">
              <i class="fa-regular fa-trash-can  text-sm"></i>
            </div>
        </div>
            <div class="text-center my-3">
              <button class="bg-brown text-white w-full rounded-lg h-10" @click="changePage(`/carts/${item[0].storeId}`)">檢視購物車</button>
            </div>
          </div>
  </div>
  </div>
</template>

<style scope></style>