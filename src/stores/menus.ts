import { defineStore } from 'pinia'
import { type RouteRecordRaw } from 'vue-router'
import { MenuRouters } from '@/router/menus'

interface MenuState {
  menus: RouteRecordRaw[]
}

export const useMenuStore = defineStore('menus', {
  state: (): MenuState => ({
    menus: [],
  }),
  actions: {
    init() {
      this.menus = MenuRouters
    },
  },
})
