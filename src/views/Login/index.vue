<script setup>
import { reactive, ref, onMounted } from 'vue';
import { userApi } from '@/api/user'
import { useUserStore } from '@/store/user';
import { message } from 'ant-design-vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()


const userStore = useUserStore();
const inputData = reactive({
  username: '',
  password: ''
})
const token = ref(userStore.token)

const router = useRouter()
const goToHome = () => {
  router.push('/')
}
const changePage = (url) => {
  router.push(url)
}
const goToLogout = () => {
  router.push('/logout')
}

const submit = async(e) => {
	e.preventDefault()
	try {
		const { code, data } = await userApi.login(inputData.username, inputData.password)
		if (code === 200) {
			const { token } = data
			userStore.setToken(token)
			message.success('登入成功')
      goToHome()
		}
	} catch(err){
			message.error('使用者名稱或密碼失敗')
	}
}
onMounted (()=> {
	if (token.value) {
		goToLogout()
	}
})
</script>

<template>

  <mealLayout>
  <header>
    <div class="flex mt-3 justify-between mx-2">
      <i class="fa-solid fa-chevron-left" @click="changePage('/')"></i>
      <p>{{ t('help') }}</p>
    </div>
  </header>
  <div class="text-center mt-20" id="RwdModel">
    <p class="font-bold text-2xl mb-5">{{ t('member_login') }}</p>
    <form action="" @submit="submit">
      <input v-model.trim="inputData.username" type="username" :placeholder="$t('input_cellphone')" class="w-80 h-10 rounded-full bg-slate-200 pl-6 text-black" id="username">
      <input v-model.trim="inputData.password" type="password" :placeholder="$t('input_password')" class="w-80 h-10 rounded-full bg-slate-200 mt-3 pl-6 text-black" id="password">
      <button class="w-80 h-10 bg-orange-400 rounded-full mt-7 disabled:bg-orange-200" type="submit" :disabled="!inputData.username || !inputData.password">{{ t('login') }}</button>
    </form>
  </div>
</mealLayout>


</template>

<style scope>

@media screen and (min-width: 576px) {
#RwdModel {
    width: 50%;
    margin: auto
  }
}
</style>