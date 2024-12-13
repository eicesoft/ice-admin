import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainLayout,
      children: [
        {
          path: '/',
          name: 'Home',
          component: () => import('@/pages/HomeView.vue'),
        },
        {
          path: '/issues',
          name: 'issues',
          component: () => import('@/pages/IssuesView.vue'),
        },
        {
          path: '/setting',
          name: 'setting',
          component: () => import('@/pages/SettingView.vue'),
        },
        {
          path: '/test',
          name: 'test',
          component: () => import('@/pages/TestView.vue'),
        },
      ],
    },
  ],
})

export default router
