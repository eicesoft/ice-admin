<script setup lang="ts">
  import { DArrowLeft, FullScreen, Refresh, ArrowDown } from '@element-plus/icons-vue'
  import { useFullscreen } from '@vueuse/core'
  const $pub = inject('$pub')
  const state = reactive({
    circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
  })
  const { toggle } = useFullscreen()

  const handleFullScreen = () => {
    console.log('toggle full screen')
    toggle()
  }

  const handleRefresh = () => {
    $pub('page-refresh')
  }

  const { circleUrl } = toRefs(state)
</script>

<template>
  <div class="header">
    <div class="header-left">
      <el-icon><DArrowLeft /></el-icon>
      <el-breadcrumb separator=">">
        <el-breadcrumb-item>消息中心</el-breadcrumb-item>
        <el-breadcrumb-item>消息列表</el-breadcrumb-item>
      </el-breadcrumb>

      <nav>
        <RouterLink to="/">home</RouterLink>
        <RouterLink to="/issues">issues</RouterLink>
        <RouterLink to="/setting">setting</RouterLink>
        <RouterLink to="/test">test</RouterLink>
      </nav>
    </div>
    <div class="header-right">
      <el-icon @click="handleFullScreen" :size="20" color="#282c34"><FullScreen /></el-icon>
      <el-icon @click="handleRefresh" :size="20" color="#282c34">
        <Refresh />
      </el-icon>
      <el-avatar :size="32" :src="circleUrl" />
      <el-dropdown>
        <span>
          管理员
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item disabled>Action 4</el-dropdown-item>
            <el-dropdown-item divided>Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  :deep(.el-icon) {
    cursor: pointer;
    &:hover {
      color: #dd2323;
    }
  }
  .header {
    height: $header-height;
    background-color: #f8f8f8;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ececec;
    user-select: none;
    padding: 0 10px;
    &-left {
      display: flex;
      gap: 12px;
    }
    &-right {
      display: flex;
      gap: 12px;
      align-items: center;
    }
    nav {
      display: flex;
      align-items: center;
      gap: 8px;
      background: #efefef;
      padding: 0 10px;
    }
  }
</style>
