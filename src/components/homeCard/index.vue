<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';

defineProps({
  name: {
    type: String,
    default: ''
  },
  time: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  }
}
)
const emit = defineEmits(['goProducts'])
const goProduct = () => {
  emit('goProducts')
}
</script>

<template>
  <div>
    <div class="px-6" @click="goProduct">
      <div class="w-full bg-black h-48 rounded-lg">
      <img :src="image" alt="image" class="w-full object-cover h-48 rounded-lg">
      </div>
      <p class="font-bold text-lg">小木屋鬆餅 {{ name }}</p><span class="text-gray">{{ time }}</span>
    </div>
  </div>
</template>