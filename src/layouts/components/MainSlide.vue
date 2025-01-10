<script setup lang="ts">
import RawMdiAlarmOff from '~icons/mdi/alarm-off'
import { useMenuStore } from '@/stores/menus'

const menuStore = useMenuStore()
menuStore.init()
</script>

<template>
  <div class="slide">
    <div class="logo">
      <el-icon size="32" color="#fff"><RawMdiAlarmOff /></el-icon>
    </div>
    <div class="menus">
      <div class="menu" v-for="menu in menuStore.menus">
        <el-icon :size="18">
          <component :is="menu.meta?.icon" />
        </el-icon>
        <div class="menu-title">{{ menu.meta?.title }}</div>
      </div>
    </div>
    <div class="slide-tool">
      <el-icon size="20" color="#ececec"><V-DArrowLeft /></el-icon>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slide {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  width: var(--slide-width);
  background-color: #282c34;
  user-select: none;
  .logo {
    // height: 50px;
    padding: 8px 0;
    display: flex;
    justify-content: center;
  }
  .menus {
    flex-grow: 1;
    overflow-y: auto;
    color: #fff;
    display: flex;
    flex-direction: column;
    .menu {
      margin: 12px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      &-title {
        font-size: 12px;
      }
    }
  }
  .slide-tool {
    padding: 6px 0;
    align-items: center;
    display: flex;
    justify-content: center;
    :deep(.el-icon) {
      cursor: pointer;
      &:hover {
        color: #366cd8;
      }
    }
  }
}
</style>
