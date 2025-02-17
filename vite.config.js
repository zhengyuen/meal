import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
  // base:'/meal_public/',
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      },
    },
    css: {
      postcss: {
        plugins: [tailwindcss()]
    }
  }
})
