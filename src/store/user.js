import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref('')
    const setToken = (newToken) => {
      token.value = newToken
    }
    const isDarkTheme = ref(false)
    const setIsDarkTheme = (bool) => {
      isDarkTheme.value = bool
    }
    const formData = ref('')
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