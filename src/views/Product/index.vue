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


const cartList = {
    1: [{}, {}, {}],
    2: [{}, {} ]
  }
  const drinkStatus = reactive({
    temperature: '正常冰',
    sweetness: '正常糖',
    mealPreparation: '熱-到做'
  })
  const temperature = ['正常冰','少冰','去冰','常溫','溫','熱']
  const sweetness = ['正常糖','七分糖','半糖','三分糖','無糖']
  const mealPreparation = ['熱-到做', '熱-先做', '常溫餅', '內用']

const addCart = () => {
//同一店家
if (productStore.cart[storeId.value]) {
//相同商品&甜度&溫度
  const hasProduct = productStore.cart[storeId.value].some(item => (item.id === productId.value) && (item.sweetness === drinkStatus.sweetness) && (item.temperature === drinkStatus.temperature) && (item.mealPreparation === drinkStatus.mealPreparation))
  if (hasProduct) {
    const sameProduct = productStore.cart[storeId.value].find(item => (item.id === productId.value) && (item.sweetness === drinkStatus.sweetness) && (item.temperature === drinkStatus.temperature) && (item.mealPreparation === drinkStatus.mealPreparation))
    sameProduct.quantity += 1
  } else {
  //不同商品
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
          mealPreparation: drinkStatus.mealPreparation,
        }
        ]
    })
  }
} else {
//不同店家
    productStore.setCart({
      ...productStore.cart,
      [storeId.value]:[
        {
          ...product.value,
          storeId: storeId.value,
          quantity: amount.value,
          storeName: stores.value.name,
          temperature: drinkStatus.temperature,
          sweetness: drinkStatus.sweetness,
          mealPreparation: drinkStatus.mealPreparation
        }
      ]
    })
}
router.push(`/store/${storeId.value}/products`)
message.success('已加入購物車')
}


</script>

<template>
  <header class="pl-2"><i class="fa-solid fa-chevron-left" @click="goProduct"></i></header>
  <h1 class="font-bold text-lg ml-1">{{ product.name}}</h1>
  <div class="mx-auto">
    <img :src="product.image" alt="image" class="h-1/2 mx-auto">
  </div>

<div class="mb-5 px-3 RwdModel">
  <template v-if="product.category !== '找鹹的' && product.category !== '找甜的' && product.category !== '炸物點心'">
    <h1 class="font-bold">溫度</h1>
  <div class="text-center mb-5" >
  <a-button v-for="item in temperature"
  :colorPrimaryHover="none"
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
  </template>
  <!-- <h1>訂購人姓名</h1>
  <input type="text" class="border-2 border-gray rounded-md w-full px-3 mt-2 h-8 mb-6"> -->
</div>
<template v-if="product.category === '找鹹的' || product.category === '找甜的'">
  <div class="mb-5 px-3 RwdModel">
    <h1 class="font-bold">備餐方式</h1>
    <div class="text-center mb-5">
    <a-button v-for="item in mealPreparation"
    :key="item"
    :value="item"
    @click='drinkStatus.mealPreparation = item'
    :class="['mr-2 last:mr-0', { 'border-2 border-brown border-solid':item === drinkStatus.mealPreparation }]"
    class="mr-3 mt-3 w-20">{{ item }}</a-button>
    </div>
  </div>
</template>
<template v-if="product.category === '炸物點心'">
  <h1 class="font-bold mb-3 px-3 RwdModel">此商品不需調整比例</h1>
</template>

<hr>
<div class="px-2 RwdModel">
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

<style scope>
.ant-btn:hover {
  @apply !border-black !text-black
}
@media screen and (min-width: 576px) {
.RwdModel {
    width: 50%;
    margin: auto
  }
}
</style>