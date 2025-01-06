import { type RouteRecordRaw } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'

export const MenuRouters: RouteRecordRaw[] = [
  {
    name: 'dashboard',
    path: '/dashboard',
    redirect: '/dashboard/index',
    meta: {
      component: 'MainLayout',
      title: '工作台',
      icon: 'V-House',
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
    redirect: '/system/index',
    meta: {
      component: 'MainLayout',
      title: '系统配置',
      icon: 'V-Tools',
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
