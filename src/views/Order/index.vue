<script setup>
import { computed, ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
import { useUserStore } from '@/store/user';
import { useProductStore } from '@/store/product';
import { message } from 'ant-design-vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()



const payMethod = ['貨到付款','線上支付']
const getMethod = ['自取','外送']
const userStore = useUserStore()
const token = ref(userStore.token)
const route = useRoute()
const buyerInform = computed(() => userStore.formData)
const productStore = useProductStore()
const storeId = ref(Number(route.params.storeId))

const isDarkTheme = computed(() => userStore.isDarkTheme)

const store = computed(() => productStore.stores.find(store => store.id === storeId.value))
console.log(Object.keys(productStore.cart).filter(item => Number(item) !== storeId.value))


const totalPrice = computed(() => {
  let price = 0
  for (const item of productStore.cart[storeId.value]){
    price += item.price * item.quantity
  }
  return price
})

const router = useRouter()
const changePage = (url) => {
  router.push(url)
}

const order = reactive({
  payMethod: '貨到付款',
  getMethod: '自取',
})
const addOrder = (id) => {
  // 相同店家
  productStore.setOrder({
    ...productStore.order,
  [storeId.value]:[
  {
  orderId: `order${storeId.value}`,
  payMethod: order.payMethod,
  getMethod: order.getMethod,
  totalPrice: totalPrice,
  store: store.value.name,
  storeId: storeId,
  products: productStore.cart[storeId.value]}]
  })
  message.success('您已成功下單')
  changePage(`/result/${storeId.value}`)
}

const changeName = () => {
  if (!token.value) {
		changePage('/login')
    message.success('請登入會員')
	}
  if(token.value) {
    changePage(`/personal`)
  }
}
</script>

<template>
  <header class="text-center">
    <i class="fa-solid fa-chevron-left left-3 absolute" @click="changePage('/cart')"></i>
    {{ t('order') }}
  </header>
<div class="flex flex-col min-h-screen">
    <div class="flex-1 bg-slate-200" :class="{'!bg-black text-white px-2': isDarkTheme }">
    <div class="shadow-md my-3 py-3 px-5 mt-3 rounded-lg bg-white text-blue-500 text-bold RwdModel"
    :class="{'!bg-black text-white border-2 border-white border-solid': isDarkTheme }">
      <p class="font-bold text-lg pb-2">{{ store.name }}</p>
      <i class="fa-solid fa-phone mr-3"></i><span>07-722-6777</span>
    </div>
    <div class="shadow-md my-3 py-3 px-3 rounded-lg bg-white text-black RwdModel"
    :class="{'!bg-black text-white border-2 border-white border-solid': isDarkTheme }">
      <p class="font-bold text-lg pb-2">{{ t('order_info') }}</p>
      <div class="text-right" @click="changeName">
        <i class="fa-solid fa-pen-to-square"></i>
      </div>
      <div class="font-bold pl-3">
        <p>
        {{ t('name') }}: {{buyerInform.name}}
        </p>
        <p>
        {{ t('cellphone') }}: {{buyerInform.phone}}
        </p>
      </div>
  </div>
<div class="bg-white py-3 px-3 text-black RwdModel"
:class="{'!bg-black text-white border-2 border-white border-solid': isDarkTheme }">
      <p class="font-bold text-lg pb-2">{{ t('product') }}</p>
  <div class="flex items-center my-3 py-3 rounded-lg bg-white mx-2 text-black" v-for="item in productStore.cart[storeId]" :key="item"
  :class="{'!bg-black text-white': isDarkTheme }">
    <img :src="item.image" alt="image" class="h-20" :class="{ 'rounded-full mx-2 h-20 w-20 object-cover': isDarkTheme }">
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
  <div class="shadow-md my-3 py-3 px-3 rounded-lg bg-white text-black RwdModel"
  :class="{'!bg-black text-white border-2 border-white border-solid': isDarkTheme }">
      <p class="font-bold text-lg pb-2">{{ t('pay_method') }}</p>
      <a-button v-for="items in payMethod" class="font-bold"
      :key="items"
      :value="items"
      @click="order.payMethod = items"
      :focus="outline-0"
      :class="['mr-2 last:mr-0', { 'border-2 border-brown border-solid':items === order.payMethod }]"
      >{{ items }}</a-button>
  </div>
  <div class="shadow-md my-3 py-3 px-3 rounded-lg bg-white text-black RwdModel"
  :class="{'!bg-black text-white border-2 border-white border-solid': isDarkTheme }">
      <p class="font-bold text-lg pb-2">{{ t('pickup_method') }}</p>
      <a-button v-for="items in getMethod" class="font-bold"
      :key="items"
      :focus="outline-0"
      :value="items"
      @click="order.getMethod = items"
      :class="['mr-2 last:mr-0', { 'border-2 border-brown border-solid': items === order.getMethod }]"
      >{{ items }}</a-button>
  </div>

  <div class="flex justify-between items-center shadow-md my-3 py-4 px-3 rounded-lg bg-white text-black RwdModel"
  :class="{'!bg-black text-white border-2 border-white border-solid': isDarkTheme }">
      <p class="font-bold text-lg pb-2">{{ t('total') }} $ {{ totalPrice }}</p>
      <div class="font-bold bg-brown text-white w-1/4 text-center rounded-lg text-md" @click="addOrder(storeId)">
        <button class="h-10">{{ t('submit') }}</button>
      </div>
  </div>
  </div>
</div>
</template>

<style scope>
@media screen and (min-width: 576px) {
.RwdModel {
    width: 50%;
    margin: 10px auto
  }
}
</style>