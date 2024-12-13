<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import NProgress from 'nprogress'

  const $sub: any = inject('$sub')
  const $unsub: any = inject('$unsub')

  const route = useRoute()
  const routerKey = ref()

  onMounted(() => {
    $sub('page-refresh', () => {
      console.log('page-Refresh')
      routerKey.value = null
      NProgress.start()
      nextTick(() => {
        routerKey.value = route
        // NProgress.done()
      })
      setTimeout(() => {
        NProgress.done()
      }, 300)
    })
  })

  onUnmounted(() => {
    $unsub('page-refresh')
  })
</script>

<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" :key="routerKey" ref="componentRef" />
  </router-view>
</template>
