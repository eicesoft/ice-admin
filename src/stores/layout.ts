import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    refresh: false,
  }),
  actions: {
    refreshPage() {
      this.refresh = true
    },
  },
})
