<script setup>
import { computed, ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
import { useUserStore } from '@/store/user';
import { useProductStore } from '@/store/product';
import { message } from 'ant-design-vue';


const payMethod = ['貨到付款','線上支付']
const getMethod = ['自取','外送']
const userStore = useUserStore()
const route = useRoute()
const buyerInform = computed(() => userStore.formData)
const productStore = useProductStore()
const cart = computed(() => productStore.cart)
const storeId = ref(Number(route.params.storeId))

const orders = computed(() => productStore.order)
const token = computed(() => productStore.token)

const store = computed(() => productStore.stores.find(store => store.id === storeId.value))


const totalPrice = computed(() => {
  let price = 0
  for (const item of productStore.cart[storeId.value]){
    price += item.price * item.quantity
  }
  return price
})

const router = useRouter()
const edit = () => {
  router.push('/personal')
}
const changePage = (url) => {
  router.push(url)
}

const order = reactive({
  payMethod: '貨到付款',
  getMethod: '自取',
})
const addOrder = () => {
  // 相同店家
  if(storeId === cart.value.storeId){
    productStore.setOrder(
      ...productStore.order.products,{...cart.value}
    )
  }else{
  productStore.setOrder([
    ...productStore.order,{
  orderId: `order${storeId.value}`,
  payMethod: order.payMethod,
  getMethod: order.getMethod,
  totalPrice: totalPrice,
  store: store.value.name,
  storeId: storeId,
  products: productStore.cart[storeId.value]}
  ])
  }
  changePage(`/result/${storeId.value}`)
  message.success('您已成功下單')
}

// onMounted (()=> {
// 	if (!token.value) {
// 		changePage('/login')
//     message.success('請登入會員')
// 	}
// })
</script>

<template>
<div class="flex flex-col min-h-screen">
    <div class="flex-1 bg-slate-200">
      <header class="text-center bg-white fixed w-full ">
        <i class="fa-solid fa-chevron-left left-3 absolute" @click="changePage('/cart')"></i>
        訂單詳情</header>
    <div class="shadow-md my-3 py-3 px-5 mt-8 rounded-lg bg-white text-blue-500 text-bold">
      <p class="font-bold text-lg pb-2">{{ store.name }}</p>
      <i class="fa-solid fa-phone mr-3"></i><span>07-722-6777</span>
    </div>
    <div class="shadow-md my-3 py-3 px-3 rounded-lg bg-white">
      <p class="font-bold text-lg pb-2">訂購人資料</p>
      <div class="text-right" @click="edit">
        <i class="fa-solid fa-pen-to-square"></i>
      </div>
      <div class="font-bold pl-3">
        <p>
        姓名： {{buyerInform.name}}
        </p>
        <p>
        電話： {{buyerInform.phone}}
        </p>
      </div>
  </div>
<div class="bg-white py-3 px-3">
      <p class="font-bold text-lg pb-2">餐點</p>
  <div class="flex items-center my-3 py-3 rounded-lg bg-white mx-2" v-for="item in productStore.cart[storeId]" :key="item">
    <img :src="item.image" alt="image" class="h-20">
    <div>
      <p class="font-bold text-xl">{{ item.name }}</p>
      <p class="font-bold text-xl">$ {{ item.price }}</p>
      <span class="text-slate-400">{{ item.temperature }}</span>
      <span class="ml-2 text-slate-400">{{ item.sweetness }}</span>
    </div>
    <div class=" translate-y-6 translate-x-12">
      <p>x {{ item.quantity }}</p>
    </div>
  </div>
</div>

  <div class="shadow-md my-3 py-3 px-3 rounded-lg bg-white">
      <p class="font-bold text-lg pb-2">付款方式</p>
      <a-button v-for="items in payMethod" class="font-bold"
      :key="items"
      :value="items"
      @click="order.payMethod = items"
      :class="['mr-2 last:mr-0', { 'border-2 border-brown border-solid':items === order.payMethod }]"
      >{{ items }}</a-button>
  </div>
  <div class="shadow-md my-3 py-3 px-3 rounded-lg bg-white">
      <p class="font-bold text-lg pb-2">取貨方式</p>
      <a-button v-for="items in getMethod" class="font-bold"
      :key="items"
      :value="items"
      @click="order.getMethod = items"
      :class="['mr-2 last:mr-0', { 'border-2 border-brown border-solid': items === order.getMethod }]"
      >{{ items }}</a-button>
  </div>

  <div class="flex justify-between items-center shadow-md my-3 py-3 px-3 rounded-lg bg-white">
      <p class="font-bold text-lg pb-2">總計 $ {{ totalPrice }}</p>
      <div class="font-bold bg-brown text-white w-1/4 text-center rounded-lg text-md" @click="addOrder">
        <button class="h-10">提交訂單</button>
      </div>
  </div>
  </div>
</div>
</template>

<style scope></style>