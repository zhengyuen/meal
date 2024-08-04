import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref('')
    const isDarkTheme = ref(false)
    const formData = ref('')
    const setToken = (newToken) => {
      token.value = newToken
    }
    const setIsDarkTheme = (bool) => {
      isDarkTheme.value = bool
    }
    const setFormData = (newFormData) => {
      formData.value = newFormData
    }

    return {
      token,
      isDarkTheme,
      formData,
      setToken,
      setIsDarkTheme,
      setFormData
    }
  },
  {
    persist: true
  }
)