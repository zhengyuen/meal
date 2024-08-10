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
    const personal = ref('')
    const setPersonal = (newPersonal) => {
      personal.value = newPersonal
    }

    return {
      token,
      isDarkTheme,
      formData,
      personal,
      setToken,
      setIsDarkTheme,
      setFormData,
      setPersonal
    }
  },
  {
    persist: true
  }
)