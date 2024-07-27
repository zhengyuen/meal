<script setup>
import MealLayout from '@/components/mealLayout/index.vue'
import { reactive, ref } from 'vue';
import { userApi } from '@/api/use'
import { useUserStore } from '@/store/user';
import { message } from 'ant-design-vue';


const userStore = useUserStore;
const inputData = reactive({
  username: '',
  password: ''
})
const token = ref(userStore.token)
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
</script>

<template>
<nav>
  <div class="flex mt-3 justify-between mx-2">
    <img src="https://cdn-icons-png.flaticon.com/128/3916/3916892.png" alt="image" class="w-5">
    <p>幫助</p>
  </div>
</nav>
<div class="text-center mt-20">
  <p class="font-bold text-2xl mb-5">會員登入</p>
  <form action="" @submit="submit">
    <input v-model.trim="inputData.username" type="username" placeholder="請輸入手機號碼" class="w-80 h-10 rounded-full bg-slate-200 pl-6" id="username">
    <input v-model.trim="inputData.password" type="password" placeholder="請輸入密碼" class="w-80 h-10 rounded-full bg-slate-200 mt-3 pl-6" id="password">
    <button class="w-80 h-10 bg-orange-400 rounded-full mt-7" type="submit">登入</button>
    <p class="text-center mt-3 underline">新用戶註冊</p>
  </form>
</div>


</template>

<style scope></style>