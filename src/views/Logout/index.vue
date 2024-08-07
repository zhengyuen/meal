<script setup>
import { useUserStore } from '@/store/user';
import { useRouter } from 'vue-router';
import { message } from 'ant-design-vue';
import { computed } from 'vue';


const isDarkTheme = computed(() => userStore.isDarkTheme)

const router = useRouter()
const goToLogin = () => {
  router.push('/login')
}
const userStore = useUserStore()
const formData = userStore.formData
const logout = () => {
	userStore.setToken('')
	message.success('登出成功')
  goToLogin()
}
const goToEdit = () => {
  router.push('/personal')
}
</script>

<template>
  <header v-if="isDarkTheme" class="text-white">
    <div class="flex mx-2 text-white">
      <p><i class="fa-solid fa-chevron-left"></i></p><p class="w-full text-center">帳戶設置</p>
    </div>
  </header>
  <header v-else>
    <div class="flex mx-2">
      <p><i class="fa-solid fa-chevron-left"></i></p><p class="w-full text-center">帳戶設置</p>
    </div>
  </header>
  <div v-if="isDarkTheme" class="flex px-5 w-full items-center bg-black text-white">
  <img src="https://d3l76hx23vw40a.cloudfront.net/recipe/yb17-013.jpg" alt="image" class="w-14 h-14 rounded-full">
  <div class="ml-3 mt-2 w-full">
    <span>{{ formData.name }}</span><br>
    <small>帳號名:{{ formData.user }}</small>
  </div>
  <div class="flex flex-col items-center cursor-pointer" @click="goToEdit">
    <i class="fa-solid fa-gear text-2xl px-2 "></i><span>編輯</span>
  </div>
</div>
  <div v-else class="flex px-5 w-full items-center fixed bg-white">
  <img src="https://d3l76hx23vw40a.cloudfront.net/recipe/yb17-013.jpg" alt="image" class="w-14 h-14 rounded-full">
  <div class="ml-3 mt-2 w-full">
    <span>{{ formData.name }}</span><br>
    <small>帳號名:{{ formData.user }}</small>
  </div>
  <div class="flex flex-col items-center cursor-pointer" @click="goToEdit">
    <i class="fa-solid fa-gear text-2xl px-2"></i><span>編輯</span>
  </div>
</div>

<div v-if="isDarkTheme" class="h-[730px] bg-black text-center">
<button class="w-80 h-10 bg-orange-200 rounded-full mt-64" type="submit" @click="logout">登出</button>
</div>
<div v-else class="h-[730px] bg-slate-100 text-center">
<button class="w-80 h-10 bg-orange-200 rounded-full mt-64" type="submit" @click="logout">登出</button>
</div>


</template>

<style scope></style>