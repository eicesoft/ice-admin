<template>
  <div class="page">
    Dashboard 2012
    <div></div>
  </div>
</template>

<script setup lang="ts">
  const c1 = ref('#eeeeee')
  const p1 = ref('20px')
</script>

<style lang="scss" scoped>
  .page {
    margin: 10px;
    border-radius: 8px;
    padding: v-bind(p1);
    background-color: v-bind(c1);
  }
</style>
