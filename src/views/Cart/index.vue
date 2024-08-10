<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router';
import { useProductStore } from '@/store/product';

const productStore = useProductStore()
const cart = computed(() => productStore.cart || [])
const storeId = computed(() => cart.value[0].storeId)
const router = useRouter()
const order = () => {
  router.push('/order')
}

const changePage = (url) => {
  router.push(url)
}


const totalPrice = computed(() => {
  let price = 0
  for (const item of productStore.cart){
    price += item.price * item.quantity
  }
  return price
})

const adjustQuantity = (id, num) => {
  // 有產品
    cart.value = cart.value.map((product) => {
      if (product.id === id){
      if (product.quantity > 0 ||(product.quantity === 0 && num > 0 )){
      return product.quantity += num
      }
      return product
    }if (product.quantity === 0){
      const newCart = productStore.cart.filter(product => id !== product.id)
      productStore.setCart(newCart)
      cart.value = newCart
    }
    })
  }
  const deleteProduct = (id) => {
    const newCart = productStore.cart.filter(product => id !== product.id)
      productStore.setCart(newCart)
      cart.value = newCart
      console.log(newCart)
  }
</script>

<template>
  <header>
      <i class="fa-solid fa-chevron-left mx-2" @click="changePage(`/store/${storeId}`)"></i>
  </header>
  <div class="flex flex-col min-h-screen">
    <div class="flex-1 bg-slate-200">
  <p>全部 {{ cart.length }} 筆</p>
  <div class="flex items-center shadow-md my-3 py-2 rounded-lg bg-white mx-2" v-for="(item, id) in cart" :key="id">
    <img :src="item.image" alt="image" class="h-20 relative">
    <div>
      <p class="font-bold text-xl">{{ item.name }}</p>
      <p class="font-bold text-xl">$ {{ item.price }}</p>
    </div>
    <div class=" absolute right-16">
    <button class="rounded-l-md w-6 text-white  bg-brown" @click="adjustQuantity(item.id, -1)">-</button>
    <input type="text" class="w-10 text-center" :value="item.quantity">
    <button class="rounded-r-md w-6 text-white bg-brown " @click="adjustQuantity(item.id, 1)">+</button>
    </div>
    <div class="cursor-pointer absolute  right-6" @click="deleteProduct(id)">
    <i class="fa-regular fa-trash-can  text-sm"></i>
    </div>
  </div>


  <div class="flex items-center shadow-md my-3 py-2 justify-between px-7 mx-2 rounded-lg bg-white">
      <p class="text-lg font-bold">合計：${{ totalPrice }}</p>
      <div class="bg-brown text-white rounded-lg text-center w-1/4 text-md h-10 ">
      <button @click="order" class="pt-2 ">去買單</button>
    </div>
  </div>
  </div>
</div>
</template>

<style scope></style>