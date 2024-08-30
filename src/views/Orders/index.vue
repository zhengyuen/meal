<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
import { useUserStore } from '@/store/user';
import { useProductStore } from '@/store/product';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()


const userStore = useUserStore()
const getInform = userStore.formData
const productStore = useProductStore()
const order = computed(() => productStore.order)
const router = useRouter()
const route = useRoute()

const storeId = ref(Number(route.params.storeId))
const changePage = (url) => {
  router.push(url)
}
console.log(order.value[storeId.value][0].store)


</script>

<template>
  <header class="text-center">
    <i class="fa-solid fa-chevron-left left-3 absolute" @click="changePage('/orderMenu')"></i>
    {{ t('my_order') }}</header>
<div class="flex flex-col min-h-screen">
    <div class="flex-1 bg-slate-200" :class="{'!bg-black text-white px-2': userStore.isDarkTheme }">
    <div class="shadow-md my-3 py-3 px-5 mt-2 rounded-lg bg-white text-2xl text-bold flex items-center" v-for="item of productStore.order[storeId]" :key="item"
    :class="{'!bg-black text-white border-2 border-white border-solid': userStore.isDarkTheme }">
      <div>
      <img src="https://life.ntpu.edu.tw/upload/2022092711003130rlm1.png" alt="image" class="h-20 object-cover">
      </div>
      <p class="font-bold text-lg pb-2 ml-5 text-blue-400">小木屋鬆餅 {{ item.store }}</p>
  </div>
  <div class="shadow-md my-3 py-3 px-3 rounded-lg bg-white text-black"
  :class="{'!bg-black text-white border-2 border-white border-solid': userStore.isDarkTheme }">
      <p class="font-bold text-lg pb-2">{{ t('order_info') }}</p>
      <p class="font-bold">
      </p>
      <div class="font-bold pl-3">
        <p>
        {{ t('name') }}： {{getInform.name}}
        </p>
        <p>
        {{ t('cellphone') }}： {{getInform.phone}}
        </p>
      </div>
  </div>
  <div class="bg-white text-black py-3 px-3"
  :class="{'!bg-black text-white border-2 border-white border-solid': userStore.isDarkTheme }">
      <p class="font-bold text-lg pb-2">{{ t('meal') }}</p>
  <div class="my-3 py-3 rounded-lg mx-2" v-for="item in productStore.order[storeId]" :key="item">
    <div v-for="product of item.products" :key="product" class="flex mt-3 items-center">
      <img :src="product.image" alt="image" class="h-20" :class="{ 'rounded-full mx-2 h-20 w-20 object-cover': userStore.isDarkTheme }">
      <div>
        <p class="font-bold text-lg">{{ product.name }}</p>
        <p class="font-bold text-lg">$ {{ product.price }}</p>
        <span class="text-slate-400">{{ product.temperature }}</span>
        <span class="text-slate-400 ml-2">{{ product.sweetness }}</span>
      </div>
      <div class=" translate-y-6 translate-x-12">
      <p>x {{ product.quantity }}</p>
      </div>
    </div>
  </div>
</div>

  <div class="my-3 py-3 px-3 rounded-lg bg-white text-black shadow-sm" v-for="item in order[storeId]" :key="item" :class="{'!bg-black text-white border-2 border-white border-solid': userStore.isDarkTheme }">
  <div class="my-3 py-1 px-3 rounded-lg bg-white text-black"
  :class="{'!bg-black text-white': userStore.isDarkTheme }"
  >
      <p class="font-bold text-lg pb-2">{{ t('pay_method') }}</p>
      <p>{{ item.payMethod }}</p>
  </div>
  <div class="my-3 py-1 px-3 rounded-lg bg-white text-black"
  :class="{'!bg-black text-white': userStore.isDarkTheme }">
      <p class="font-bold text-lg pb-2">{{ t('pickup_method') }}</p>
      <p>{{ item.getMethod }}</p>
  </div>
  </div>
  <div class="flex justify-between items-center shadow-md my-3 py-4 px-3 rounded-lg bg-white text-black" v-for="(item, id) in order[storeId]" :key="id"
  :class="{'!bg-black text-white border-2 border-white border-solid': userStore.isDarkTheme }">
      <p class="font-bold text-lg pb-2">{{ t('total') }} $ {{ item.totalPrice }}</p>
      <div class="flex">
        <div class="font-bold bg-white text-black border-2 border-blue-200 border-solid w-28 text-center rounded-lg text-md">
          <button class="h-10" disabled>{{ t('checked_out') }}</button>
        </div>
      </div>
  </div>
  </div>
</div>
</template>

<style scope></style>