<script setup lang="ts">
  import { DArrowLeft, FullScreen, Refresh, ArrowDown } from '@element-plus/icons-vue'
  import { useFullscreen } from '@vueuse/core'
  import { useLayoutStore } from '@/stores/layout'

  const store = useLayoutStore()
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
      <el-icon
        :style="{ transform: !store.isCollapse ? 'rotate(0deg)' : 'rotate(180deg)' }"
        :class="{ rotate: store.isCollapse, rotate180: !store.isCollapse }"
        @click="store.collapse"
      >
        <DArrowLeft />
      </el-icon>

      <el-breadcrumb separator=">">
        <el-breadcrumb-item>消息中心</el-breadcrumb-item>
        <el-breadcrumb-item>消息列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div>
      <nav>
        <RouterLink to="/">home</RouterLink>
        <RouterLink to="/issues">issues</RouterLink>
        <RouterLink to="/setting">setting</RouterLink>
        <RouterLink to="/test">test</RouterLink>
        <RouterLink to="/dashboard/index">DashBoard</RouterLink>
        <RouterLink to="/vtable">VTable</RouterLink>

      </nav>
    </div>
    <div class="header-right">
      <el-icon @click="handleFullScreen" :size="20" color="#282c34"><FullScreen /></el-icon>
      <el-icon @click="handleRefresh" :size="20" color="#282c34">
        <Refresh />
      </el-icon>
      <el-avatar :size="34" :src="circleUrl" />
      <el-dropdown>
        <div class="dropdown">
          管理员
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </div>
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
      color: #a53030;
    }
  }
  .rotate {
    animation: rotate 0.3s linear;
  }
  .rotate180 {
    animation: rotate180 0.3s linear;
  }
  @keyframes rotate180 {
    from {
      transform: rotate(180deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(180deg);
    }
  }
  .header {
    height: $header-height;
    max-height: $header-height;
    min-height: $header-height;
    background-color: #f8f8f8;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ececec;
    user-select: none;
    padding: 0 10px;
    &-left {
      display: flex;
      align-items: center;
      gap: 12px;
      min-width: 140px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &-right {
      display: flex;
      gap: 12px;
      align-items: center;
      .dropdown {
        display: flex;
        cursor: pointer;
      }
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
