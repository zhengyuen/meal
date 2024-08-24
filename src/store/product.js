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
    const order = ref([])
    const setOrder = (newOrder) => {
      order.value = newOrder
    }
    return {
      stores,
      cart,
      order,
      setStores,
      setCart,
      setOrder
    }
  },
  {
    persist: true
  }
)