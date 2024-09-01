<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
const changePage = (url) => {
  router.push(url)
}

</script>

<template>
  <div class="RwdModel">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUSBgvWJbCWrYZZS2_OkBODPHFwpIw6IqhPQ&s" alt="image" class="mx-auto">
  </div>
  <div class="text-center">
    <h1 class="text-lg mb-4">抱歉~沒有這個頁面哦</h1>
    <button class="bg-brown text-white rounded w-40 mb-6" @click="changePage('/')">回首頁</button>
  </div>
</template>

<style scope>
@media screen and (min-width: 576px) {
.RwdModel {
    width: 20%;
    margin: 10px auto
  }
}
</style>