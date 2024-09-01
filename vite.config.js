import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/meal-public/',
  plugins: [vue()],
  resolve: {
      alias: { // 2. 新增別名
      "@": path.resolve(__dirname, "./src"), },
  },
   css: { // 2. 配置 Tailwind
    postcss: {
      plugins: [tailwindcss()]
    }
  }
})
