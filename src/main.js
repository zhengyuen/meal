import { createApp } from 'vue'
import '@/assets/css/index.css'
import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/reset.css';
import Antd from 'ant-design-vue';
import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia() 
pinia.use(persist)

createApp(App).use(router).use(pinia).use(Antd).mount('#app')
