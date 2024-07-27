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
      path: '/edit',
      name: 'edit',
      component: () => import('@/views/Edit/index.vue')
    },
    ]
})

export default router