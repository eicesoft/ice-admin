import { defineStore } from 'pinia';
import { MenuRouters } from '@/router/menus';
export const useMenuStore = defineStore('menus', {
    state: () => ({
        menus: [],
    }),
    actions: {
        init() {
            this.menus = MenuRouters;
        },
    },
});
