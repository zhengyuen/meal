<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
import { message } from 'ant-design-vue';
import { useProductStore } from '@/store/product';


const router = useRouter()
const route = useRoute()
const productStore = useProductStore()
const productId = ref(Number((route.params.id)))
const products = ref(productStore.products[0] || [])

const product = computed(() => products.value.products)
console.log(product)

const amount = ref(1);
  const plus = () => {
    amount.value += 1
  }
  const minus = () => {
    if (amount.value > 1){
      amount.value -= 1
    }
  }

const productData = computed(() => product.value)
const productVal = computed(() => productData.value.find(product => product.id === productId.value))
const cart = ref(productStore.cart || [])
// console.log(productData)
// console.log(productVal)
const goProduct = () => {
  router.push(`/store/${product.value.id}`)
}

const addCart = (id) => {
// 沒有東西
const product = productStore.products[0]
const products = product.products.find(product => product.id === productId.value)
console.log(products)
  const hasProduct = product.products.some(product => product.id === productId.value)
  if(hasProduct){
    const newCart = productStore.cart.map(product => {
      if (product.id === productId.value){
        product.quantity += amount.value
        return products
      }
      return products
    })

  }else{ //沒東西
    productStore.setCart([...productStore.cart, {... products, quantity: 1}])
    return products
  }
  router.push(`/store/${products.id}`)
  message.success('已加入購物車')
}
const value1 = ref(60);
const addonBeforeValue = ref('add');

const temperature = ['正常冰','少冰','去冰','常溫','溫','熱']
const sweetness = ['正常糖','七分糖','半糖','三分糖','無糖']


</script>

<template>
  <!-- <header class="pl-2"><i class="fa-solid fa-chevron-left" @click="goProduct"></i></header> -->
  <template v-for="(item, id) in productData" :key="id">
    <div v-if="id === productId-1">
  <h1 class="font-bold text-lg ml-1">{{ item.name }}</h1>
  <div class="mx-auto">
    <img :src="item.image" alt="image" class="h-1/2 mx-auto">
  </div>
  </div>
  </template>
<div class="mb-5 px-3">
  <h1 class="font-bold">溫度</h1>
  <div class="text-center mb-5">
  <a-button v-for="item in temperature"
  :key="item"
  :value="item"
  :class="['mr-2 last:mr-0', { 'border-2 !border-yellow-300 border-solid': item === temperature.item }]"
  @click="item"
  class="mr-3 mt-3 w-20">{{ item }}</a-button>
  </div>

  <h1 class="font-bold">甜度</h1>
  <div class="text-center mb-5">
  <a-button v-for="item in sweetness"
  :key="item"
  :value="item"
  class="mr-3 mt-3 w-20">{{ item }}</a-button>
  </div>
  <h1>訂購人姓名</h1>
  <input type="text" class="border-2 border-gray rounded-md w-full px-3 mt-2 h-8 mb-6">
</div>

<hr>
<template v-for="(item, id) in productData" :key="id">
<div class="px-3 my-5" v-if="id === productId-1">
  <h1>總金額：{{ item.price }} 元</h1>
  <div class="w-[112px] mt-3 bg-lightGray">
  <button class="rounded-l-md w-6" @click="minus">-</button>
  <input type="text" class="w-16 text-center" value="1">
  <button class="rounded-r-md w-6" @click="plus">+</button>
  </div>

  <div class="bg-brown h-10 text-white flex mt-3 justify-center rounded-md px-5 mb-10">
  <button @click="addCart">加入購物車</button>
  </div>
</div>
</template>

</template>

<style scope></style>