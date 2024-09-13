<script setup>
import { useUserStore } from '@/store/user';
import { useRouter } from 'vue-router';
import { message } from 'ant-design-vue';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n()

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
  <header>
    <div class="text-center mx-2" :class="[{ darkMode : isDarkTheme }]">
      <p>{{ t('set_profile') }}</p>
    </div>
  </header>
  <div class="flex px-5 w-full items-center fixed bg-white RwdModel" :class="{ 'bg-black text-white': isDarkTheme }">
  <img src="https://d3l76hx23vw40a.cloudfront.net/recipe/yb17-013.jpg" alt="image" class="w-14 h-14 rounded-full">
  <div class="ml-3 mt-2 w-full">
    <span>{{ formData.name }}</span><br>
    <small>{{ t('username') }}: {{ formData.user }}</small>
  </div>
  <div class="flex flex-col items-center cursor-pointer" @click="goToEdit">
    <i class="fa-solid fa-gear text-2xl px-2"></i><span>{{ t('edit') }}</span>
  </div>
</div>

<div class="h-[730px] bg-slate-100 text-center" :class="{ 'bg-black': isDarkTheme }">
<button class="w-80 h-10 bg-orange-200 rounded-full mt-64" type="submit" @click="logout">{{ t('logout') }}</button>
</div>


</template>

<style scope>
@media screen and (min-width: 576px) {
.RwdModel {
    width: 100%;
    margin: auto;
    padding: 2px 20%;
  }
}
</style>