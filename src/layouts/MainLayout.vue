<template>
  <div class="layout">
    <MainSlide />
    <div class="layout-body">
      <MainHeader />
      <MainTabbar />
      <div class="layout-container">
        <div class="layout-container-body">
          <MainRouter />
          <el-backtop target=".layout-container-body" :right="40" :bottom="40" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import MainHeader from './components/MainHeader.vue'
  import MainSlide from './components/MainSlide.vue'
  import MainTabbar from './components/MainTabbar.vue'
  import MainRouter from './components/MainRouter.vue'
</script>

<style lang="scss" scoped>
  .layout {
    display: flex;
    height: 100%;
    &-body {
      width: calc(100% - $slide-width);
      display: flex;
      flex-direction: column;
    }
    &-container {
      padding: $body-padding;
      background-color: #f6f8f9;
      display: flex;
      flex-direction: column;
      height: calc(100% - $tabbar-height - $header-height - $body-padding * 2);
      &-body {
        background-color: #fff;
        border-radius: 6px;
        flex-grow: 1;
        overflow: auto;
        padding: 14px;
        box-shadow: 0 2px 8px rgba(20, 20, 20, 0.3);
      }
    }
  }
</style>
