import { defineStore } from 'pinia'

export const useTabStore = defineStore('tabs', {
    state: () => ({
        tabs: [],
        activeTab: '',
    }),
    actions: {

    },
})
