import { defineStore } from 'pinia';
export const useLayoutStore = defineStore('layout', {
    state: () => ({
        refresh: false,
        isCollapse: false,
    }),
    actions: {
        refreshPage() {
            this.refresh = true;
        },
        collapse() {
            this.isCollapse = !this.isCollapse;
        },
    },
});
