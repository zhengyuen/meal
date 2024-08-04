<script setup>
import { useUserStore } from '@/store/user';
import { computed, onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const userStore = useUserStore()
const formData = ref(userStore.formData)
const isDarkTheme = computed(() => userStore.isDarkTheme)
const changeTheme = (isDark) => {
  userStore.setIsDarkTheme(isDark)
}

const goToEdit = () => {
  router.push(`/personalEdit?name=${formData.value.name}&user=${formData.value.user}&phone=${formData.value.phone}`)
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
      <i class="fa-solid fa-chevron-left"></i>
      <p class="w-full text-center">個人檔案</p>
    </div>
  </header>
  <div class="flex items-center mt-2 px-5">
    <div class=" mt-3 w-full">
    <img src="https://d3l76hx23vw40a.cloudfront.net/recipe/yb17-013.jpg" alt="image" class="w-16 rounded-full mx-auto">
    </div>
        <div @click="changeTheme(false)" v-if="isDarkTheme" class="text-white flex flex-col items-center cursor-pointer" >
          <i class="fa-solid fa-gears text-2xl px-2"></i><span>主題</span>
        </div>
        <div @click="changeTheme(true)" v-else class="text-black flex flex-col items-center cursor-pointer">
          <i class="fa-solid fa-gears text-2xl px-2"></i><span>主題</span>
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
  </div>
  <div class="text-center">
    <button class="mt-5 bg-orange-400 rounded-full w-32">確定</button>
  </div>
</template>

<style scope></style>