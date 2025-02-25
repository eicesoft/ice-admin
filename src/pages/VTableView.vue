<template>
  <ListTable :options="option" />
</template>

<script setup lang="ts">
  import { ListTable, VTable } from '@visactor/vue-vtable'

  const option = ref({
    header: [
      {
        field: 'isCheck',
        title: '',
        width: 60,
        headerType: 'checkbox',
        cellType: 'checkbox',
      },
      {
        field: '0',
        caption: '编号',
        sort: true,
      },
      {
        field: '1',
        caption: '名称',
      },
      {
        field: '2',
        caption: '年龄',
      },
      {
        field: '3',
        caption: '性别',
      },
      {
        field: '4',
        caption: '爱好',
      },
    ],
    select: {
      disableSelect: true,
      // highlightMode: 'cross'
    },
    transpose: false,
    widthMode: 'standard',
    theme: VTable.themes.BRIGHT,
    records: new Array(1000).fill([1, '张三', 18, '男', '🏀']),
  })
</script>
