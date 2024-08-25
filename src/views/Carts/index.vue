<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
import { useProductStore } from '@/store/product';

const productStore = useProductStore()

const cart = computed(() => productStore.cart || [])

const router = useRouter()
const route = useRoute()

const storeId = ref(Number(route.params.storeId))

const changePage = (url) => {
  router.push(url)
}
console.log(productStore.cart[storeId.value])


const totalPrice = computed(() => {
  let price = 0
  for (const item of productStore.cart[storeId.value]){
    price += item.price * item.quantity
  }
  return price
})

const adjustQuantity = (id, num) => {
  // 有產品
  const product = productStore.cart[storeId.value].filter(product => product.id === id)
  console.log(product)
  productStore.cart[storeId.value].filter(product => product.id === id).map((product) => {
    if (product.quantity > 1  || num > 0){
      product.quantity += num
    }
    if (product.quantity === 1 && num < 0){
      product = ''
      return product
    }
  })
    // productStore.cart[storeId.value] = productStore.cart.map((product) => {
    //   if (product.id === id){
    //   if (product.quantity > 1 ||(product.quantity === 1 && num > 0 )){
    //   return product.quantity += num
    // }if (product.quantity === 1 && num < 0 ){
    //   const newCart = productStore.cart.filter(product => id !== product.id)
    //   productStore.setCart(newCart)
    //   cart.value = newCart
    //   }
    //   return product
    // }
    // })
  }
  const deleteProduct = (id) => {
    const newProduct = productStore.cart[storeId.value].filter(product => product.id !== id )
    productStore.cart[storeId.value] = newProduct
    console.log(productStore.cart[storeId])
    return productStore.cart
  }
  if (productStore.cart[storeId.value] === ''){
    delete productStore.cart[storeId.value]
    console.log(Object.keys(productStore.cart))

    // productStore.cart[storeId].setCart(newProduct)
    // const newCart = productStore.cart.filter(product => id !== product.id)
    //   productStore.setCart(newCart)
    //   cart.value = newCart
  }
</script>

<template>
  <header>
      <i class="fa-solid fa-chevron-left mx-2" @click="changePage(`/store/${storeId}`)"></i>
  </header>
  <div class="flex flex-col min-h-screen">
    <div class="flex-1 bg-slate-200">
      <p class="my-2 text-black">全部 {{ cart[storeId].length }} 筆</p>
      <div class="flex items-center shadow-md my-3 py-2 rounded-lg bg-white mx-2" v-for="(item, idx) in cart[storeId]" :key="idx" >
        <img :src="item.image" alt="image" class="h-20 relative">
        <div>
          <p class="font-bold text-xl text-black">{{ item.name }}</p>
          <p class="font-bold text-xl text-black">$ {{ item.price }}</p>
          <span class="text-slate-400">{{ item.temperature }}</span>
          <span class="text-slate-400 ml-1">{{ item.sweetness }}</span>
        </div>
        <div class=" absolute right-12">
          <button class="rounded-l-md w-6 text-white  bg-brown" @click="adjustQuantity(item.id, -1)">-</button>
          <input type="text" class="w-10 text-center text-black" :value="item.quantity">
          <button class="rounded-r-md w-6 text-white bg-brown " @click="adjustQuantity(item.id, 1)">+</button>
        </div>
        <div class="cursor-pointer absolute  right-6" @click="deleteProduct(item.id)">
          <i class="fa-regular fa-trash-can  text-sm"></i>
        </div>
  </div>


  <div class="flex items-center shadow-md my-3 py-2 justify-between px-7 mx-2 rounded-lg bg-white">
      <p class="text-lg font-bold text-black">合計：$ {{ totalPrice }}</p>
      <div class="bg-brown text-white rounded-lg text-center w-1/4 text-md h-10 ">
      <button @click="changePage(`/order/storeId/${storeId}`)" class="pt-2 ">去買單</button>
    </div>
  </div>
  </div>
</div>
</template>
<style scope></style>