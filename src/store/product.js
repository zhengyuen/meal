import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductStore = defineStore(
  'store',
  () => {
    const stores = ref([])
    const setStores = (newStores) => {
      stores.value = newStores
    }
    const cart = ref([])
    const setCart = (newCart) => {
      cart.value = newCart
    }
    const storeCart = ref([])
    const setStoreCart = (newStoreCard) => {
      storeCart.value = newStoreCard
    }
    const order = ref([])
    const setOrder = (newOrder) => {
      order.value = newOrder
    }
    return {
      stores,
      cart,
      order,
      storeCart,
      setStores,
      setCart,
      setOrder,
      setStoreCart
    }
  },
  {
    persist: true
  }
)