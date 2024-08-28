import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import router from './router'
import '@/assets/css/index.css'
import '@/mock/index.js'
import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'
import i18n from './i18n'

const pinia = createPinia()
pinia.use(persist)

createApp(App).use(router).use(pinia).use(Antd).use(i18n).mount('#app')
