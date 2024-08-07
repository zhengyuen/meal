import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductStore = defineStore(
  'product',
  () => {
    const products = ref([])
    const setProducts = (newProducts) => {
      products.value = newProducts
    }
    const cart = ref([])
    const setCart = (newCart) => {
      cart.value = newCart
    }
    return {
      products,
      cart,
      setProducts,
      setCart
    }
  },
  {
    persist: true
  }
)