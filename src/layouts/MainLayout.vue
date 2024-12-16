<template>
  <div class="layout" :style="styleVar">
    <MainSlide />
    <MainSlideChild v-if="!store.isCollapse" />
    <div
      class="layout-body"
      :style="{
        width: !store.isCollapse
          ? 'calc(100% - var(--slide-width) - var(--slide-child-width))'
          : 'calc(100% - var(--slide-width))',
      }"
    >
      <MainHeader />
      <MainTabbar />
      <div class="layout-container">
        <div class="layout-container-body">
          <MainRouter />
          <el-backtop target=".layout-container" :right="40" :bottom="40" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  // import MainHeader from './components/MainHeader.vue'
  // import MainSlide from './components/MainSlide.vue'
  // import MainTabbar from './components/MainTabbar.vue'
  // import MainSlideChild from './components/MainSlideChild.vue'
  // import MainRouter from './components/MainRouter.vue'
  import { useLayoutStore } from '@/stores/layout'
  import { useMenuStore } from '@/stores/menus'
  const menuStore = useMenuStore()
  const store = useLayoutStore()
  menuStore.init()
  const styleVar = ref({
    '--slide-width': '68px',
    '--slide-child-width': '240px',
  })
</script>

<style lang="scss" scoped>
  .layout {
    display: flex;
    height: 100%;
    &-body {
      display: flex;
      flex-direction: column;
    }
    &-container {
      padding: $body-padding;
      background-color: #f6f8f9;
      display: flex;
      flex-direction: column;
      height: calc(100% - $tabbar-height - $header-height - $body-padding * 2);
      overflow: auto;

      &-body {
        background-color: #fff;
        border-radius: 6px;
        flex-grow: 1;
        padding: 14px;
        box-shadow: 0 2px 4px rgba(20, 20, 20, 0.2);
      }
    }
  }
</style>
