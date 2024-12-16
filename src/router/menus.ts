import { type RouteRecordRaw } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'

export const MenuRouters: RouteRecordRaw[] = [
  {
    name: 'dashboard',
    path: '/dashboard',
    component: MainLayout,
    redirect: '/dashboard/index',
    meta: {
      title: '工作台',
    },
    children: [
      {
        name: 'dashboard_main',
        path: 'index',
        meta: {
          title: '工作台首页',
        },
        component: () => import('@/pages/dashboard/index.vue'),
      },
    ],
  },
  {
    name: 'system',
    path: '/system',
    component: MainLayout,
    redirect: '/system/index',
    meta: {
      title: '系统配置',
      icon: '',
    },
    children: [
      {
        name: 'user_index',
        path: 'index',
        meta: {
          title: '用户配置',
        },
        component: () => import('@/pages/dashboard/index.vue'),
      },
    ],
  },
]
