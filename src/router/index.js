import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('@/views/Products/index.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('@/views/Product/index.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/Cart/index.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('@/views/Checkout/index.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('@/views/Order/index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login/index.vue')
    },
    {
      path: '/logout',
      name: 'logout',
      component: () => import('@/views/Logout/index.vue')
    },
    {
      path: '/personal',
      name: 'personal',
      component: () => import('@/views/Personal/index.vue')
    },
    {
      path: '/personalEdit',
      name: 'personalEdit',
      component: () => import('@/views/personalEdit/index.vue')
    },
    {
      path: '/store',
      name: 'store',
      component: () => import('@/views/Store/index.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/Search/index.vue')
    },
    {
      path: '/result',
      name: 'result',
      component: () => import('@/views/Result/index.vue')
    }
    ]
})

export default router