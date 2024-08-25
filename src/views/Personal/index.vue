<script setup>
import { useUserStore } from '@/store/user';
import { computed, onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const userStore = useUserStore()
const formData = ref(userStore.formData)
const personal = ref(userStore.personal)
const isDarkTheme = computed(() => (userStore.isDarkTheme))
const changeTheme = () => {
  userStore.setIsDarkTheme(!isDarkTheme.value)
}

const goToEdit = () => {
  router.push(`/personalEdit?name=${formData.value.name}&user=${formData.value.user}&phone=${formData.value.phone}`)
}

const prePage = () => {
  router.push('/logout')
}

onMounted(() => {
  const dataDefault = {
    name: 'Abby',
    user: 'jkfds',
    phone:'7389092390'
    }
  if(!formData.value){
    formData.value = dataDefault
    userStore.setFormData(dataDefault)
  }
})
</script>

<template>
    <header>
    <div class="flex mt-3 mx-2">
      <i class="fa-solid fa-chevron-left cursor-pointer" @click="prePage"></i>
      <p class="w-full text-center">個人檔案</p>
    </div>
  </header>
  <div class="flex items-center mt-2 px-5">
    <div class=" mt-3 w-full">
    <img src="https://d3l76hx23vw40a.cloudfront.net/recipe/yb17-013.jpg" alt="image" class="w-16 h-16 rounded-full mx-auto">
    </div>
  </div>
  <div class="px-6 mt-3">
    <div class="w-full text-right cursor-pointer" @click="goToEdit">
    <i class="fa-solid fa-pen-to-square"></i>
    </div>
    <div class="flex mt-3 justify-between">
      <p class="font-bold">名稱</p>
      <p class="text-gray">{{ formData.name }}</p>
    </div>
    <div class="flex mt-3 justify-between">
      <p class="font-bold">帳號名</p>
      <p class="text-gray">{{ formData.user }}</p>
    </div>
    <div class="flex mt-3 justify-between">
      <p class="font-bold">手機號碼</p>
      <p class="text-gray">{{ formData.phone }}</p>
    </div>
    <div class="flex mt-3 justify-between">
      <p class="font-bold">暗黑模式</p>
      <a-switch v-model:checked="isDarkTheme" @change="changeTheme" />
    </div>
  </div>
  <div class="text-center">
  </div>
</template>

<style scope>
.ant-switch.ant-switch-checked .ant-switch-inner {
  @apply !bg-orange-400;
}
</style>