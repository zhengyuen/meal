import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

export const useUserStore = defineStore(
  'user',
  () => {
    const loading = ref(false);
    const setLoading = (bool) => {
      if (bool) {
        loading.value = bool
      } else {
        setTimeout(() => {
          loading.value = bool;
        },2000);
      }
    }
    const token = ref('')
    const setToken = (newToken) => {
      token.value = newToken
    }
    const isDarkTheme = ref(false)
    const setIsDarkTheme = (bool) => {
      isDarkTheme.value = bool
    }
    const formData = reactive({
      name: 'Abby',
      user: 'jkfds',
      phone:'7389092390'
    })
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
      setPersonal,
      loading,
      setLoading
    }
  },
  {
    persist: true
  }
)