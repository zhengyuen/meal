<script setup>
import { ref, reactive, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
import { message } from 'ant-design-vue';
import { useProductStore } from '@/store/product';


const router = useRouter()
const route = useRoute()
const productStore = useProductStore()
const productId = ref(Number((route.params.id)))
const storeId = ref(Number(route.params.storeId))
const stores = computed(() => productStore.stores.find(store => store.id === storeId.value))

const product = computed(() => stores.value.products.find(product => product.id === productId.value))
console.log(product.value);


const cart = ref(productStore.cart || [])
const goProduct = () => {
  router.push(`/store/${storeId.value}/products`)
}

const amount = ref(1);
  const plus = () => {
    amount.value += 1
  }
  const minus = () => {
    if (amount.value > 1){
      amount.value -= 1
    }
  }

console.log(cart.length)

const cartList = {
    1: [{}, {}, {}],
    2: [{}, {} ]
  }
const addCart = () => {
//同一店家
if (productStore.cart[storeId.value]) {
  productStore.setCart({
    ...productStore.cart,
    [storeId.value]:[
      ...productStore.cart[storeId.value],
    {
      ...product.value,
      storeId: storeId.value,
      quantity: amount.value,
      storeName: stores.value.name,
      temperature: drinkStatus.temperature,
      sweetness: drinkStatus.sweetness,
    }
    ]
})
} else {
  productStore.setCart({
    ...productStore.cart,
    [storeId.value]:[
      {
        ...product.value,
        storeId: storeId.value,
        quantity: amount.value,
        storeName: stores.value.name,
        temperature: drinkStatus.temperature,
        sweetness: drinkStatus.sweetness
      }
  ]
  })
}
router.push(`/store/${storeId.value}/products`)
message.success('已加入購物車')

  }

const drinkStatus = reactive({
  temperature: '正常冰',
  sweetness: '正常糖'
})
const temperature = ['正常冰','少冰','去冰','常溫','溫','熱']
const sweetness = ['正常糖','七分糖','半糖','三分糖','無糖']

</script>

<template>
  <header class="pl-2"><i class="fa-solid fa-chevron-left" @click="goProduct"></i></header>
  <h1 class="font-bold text-lg ml-1">{{ product.name}}</h1>
  <div class="mx-auto">
    <img :src="product.image" alt="image" class="h-1/2 mx-auto">
  </div>

<div class="mb-5 px-3">
  <h1 class="font-bold">溫度</h1>
  <div class="text-center mb-5">
  <a-button v-for="item in temperature"
  :key="item"
  :value="item"
  @click="drinkStatus.temperature = item"
  :class="['mr-2 last:mr-0', { 'border-2 border-brown border-solid': item === drinkStatus.temperature }]"
  class="mr-3 mt-3 w-20">{{ item }}</a-button>
  </div>

  <h1 class="font-bold">甜度</h1>
  <div class="text-center mb-5">
  <a-button v-for="item in sweetness"
  :key="item"
  :value="item"
  @click="drinkStatus.sweetness = item"
  :class="['mr-2 last:mr-0', { 'border-2 border-brown border-solid':item === drinkStatus.sweetness }]"
  class="mr-3 mt-3 w-20">{{ item }}</a-button>
  </div>
  <!-- <h1>訂購人姓名</h1>
  <input type="text" class="border-2 border-gray rounded-md w-full px-3 mt-2 h-8 mb-6"> -->
</div>
<hr>
<div class="px-2" >
  <h1 class="my-5">總金額：{{ amount*product.price }} 元</h1>
  <div class="w-[112px] my-5 bg-lightGray text-black">
  <button class="rounded-l-md w-6" @click="minus">-</button>
  <input type="text" class="w-16 text-center " v-model="amount">
  <button class="rounded-r-md w-6" @click="plus">+</button>
  </div>

  <div class="bg-brown h-10 text-white flex my-5 justify-center rounded-md px-5 mb-10">
  <button @click="addCart">加入購物車</button>
  </div>
</div>
</template>

<style scope></style>