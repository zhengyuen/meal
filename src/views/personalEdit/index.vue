<script setup>
import { reactive } from 'vue'
import { useUserStore } from '@/store/user';
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'

const route = useRoute()
const {name, user, phone} = route.query
const edit = reactive({
  name,
  user,
  phone
})
const router = useRouter()
const goPersonal = () => {
  router.push('/personal')
}
const useStore = useUserStore()

const submit = () => {
  const toEdit = useStore.formData
  const newToEdit = edit
  useStore.setFormData(newToEdit)
  goPersonal()
}
const prePage = () => {
  router.push('/personal')
}
</script>

<template>
<header>
    <div class="flex mt-3 mx-2">
      <i class="fa-solid fa-chevron-left cursor-pointer" @click="prePage"></i>
      <p class="w-full text-center">編輯個人檔案</p>
    </div>
  </header>
  <div class="flex items-center mt-2 px-5">
    <div class=" mt-3 w-full">
    <img src="https://d3l76hx23vw40a.cloudfront.net/recipe/yb17-013.jpg" alt="image" class="w-16 h-16 rounded-full mx-auto">
    </div>
  </div>
  <form action="" class=" text-center mt-5">
    <div>
      <div >
        <label for="">姓名</label>
        <input v-model.trim="edit.name" type="text" class="border-2 border-gray rounded-lg mt-3 ml-2 pl-2 text-black" id="name" >
      </div>
      <div>
        <label for="">帳號名 </label>
        <input v-model.trim="edit.user" type="text" class="border-2 border-gray rounded-lg mt-3 ml-2 pl-2 text-black" id="username">
      </div>
      <div>
        <label for="">手機號碼</label>
        <input v-model.trim="edit.phone" type="text" class="border-2 border-gray rounded-lg mt-3 ml-2 pl-2 text-black" id="phone">
      </div>
    </div>
  </form>
  <div class="text-center">
    <button class="mt-5 bg-orange-400 rounded-full w-32 text-center disabled:bg-orange-200" @click="submit" :disabled="!edit.name || !edit.user || !edit.phone"  type="submit">確定</button>
  </div>

</template>

<style scope></style>