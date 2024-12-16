<script setup lang="ts">
  // import { useMenuStore } from '@/stores/menus'
  // const menuStore = useMenuStore()
</script>

<template>
  <div class="slide">
    <div class="logo">Logo</div>
    <div class="menu">
      Menu1
      <br />
      menu2
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
      height: 50px;
    }
    .menu {
      flex-grow: 1;
      overflow-y: auto;
      color: #fff;
    }
  }
</style>
