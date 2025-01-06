import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import { type RouteRecordRaw } from 'vue-router'
import { merge } from 'lodash'
import { MenuRouters } from './menus'

const baseRouters: RouteRecordRaw[] = [
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
]

const generateRouters = (menus: RouteRecordRaw[]) => {
  const result: RouteRecordRaw[] = []
  menus.forEach((item) => {
    if (item.meta?.component) {
      item.component = () => import('@/layouts/' + item.meta?.component + '.vue')
    }
  })
  return menus;
}
const generateMenuRouters = generateRouters(MenuRouters)
const allRouter = [...baseRouters, ...generateMenuRouters]
console.error(allRouter)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: allRouter,
})

export default router
