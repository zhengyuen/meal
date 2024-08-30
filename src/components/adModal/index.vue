<script setup>
import { defineProps,ref, onMounted } from 'vue';

const props = defineProps ({
  isShow: {
    type: Boolean,
    default: true
  }
})
const showAd = ref(props.isShow)
const closeAd = () => {
  showAd.value = false;
  localStorage.setItem("hasSeenAd", true);
}

onMounted(() => {
  if (JSON.parse(localStorage.getItem("hasSeenAd"))) {
    closeAd()
  }
})
</script>


<template>
<div v-if="showAd" class="fixed top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.3)] z-[100]">
  <div>
    <img src="https://shinemood2006.com/source/113-0528-%E5%B0%8F%E6%9C%A8%E5%B1%8B%E8%B2%BC%E6%96%87-01.jpg" alt="image" class="absolute top-1/2 -translate-y-1/2 p-2">
    <button @click="closeAd" class="absolute z-[100] right-10 translate-x-6 top-1/4 translate-y-6">
      <i class="fa-solid fa-xmark text-2xl"></i>
    </button>
  </div>
</div>
</template>


<style scope></style>