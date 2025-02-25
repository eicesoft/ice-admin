<template>
  <div>
    <table>
      <thead>
        <tr>
          <th width="100">编号</th>
          <th width="100">Text</th>
          <th width="100">Age</th>
          <th width="100">Age</th>
          <th width="200">Score</th>
          <th width="300">Type</th>
        </tr>
      </thead>

      <tbody>
        <RecycleScroller :buffer="100" class="scroller" :items="list" :item-size="32" key-field="id" v-slot="{ item }">
          <tr>
            <td>{{ item.id }}</td>
            <td>{{ item.text }}</td>
            <td>{{ item.age }}</td>
            <td>{{ item.age }}</td>

            <td><el-input v-model="item.score" size="small" /></td>
            <td>
              <el-select
                filterable
                remote
                reserve-keyword
                placeholder="Please enter a keyword"
                :remote-method="remoteMethod"
                :loading="loading"
                size="small"
                v-model="item.type"
              >
                <el-option v-for="option in options" :key="option.value" :value="option.value" :label="option.label" />
              </el-select>
            </td>
          </tr>
        </RecycleScroller>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
  import { RecycleScroller } from 'vue-virtual-scroller'
  import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
  interface Options {
    value: number
    label: string
  }
  const loading = ref(false)
  const options = ref<Array<Options>>([])
  const remoteMethod = (query: string) => {
    if (query) {
      loading.value = true
      setTimeout(() => {
        loading.value = false
        options.value = Array.from({ length: 15 }, (_, i) => ({
          value: i,
          label: `Test ${i}`,
        }))
      }, 200)
    } else {
      options.value = []
    }
  }
  const list = ref(
    Array.from({ length: 200 }, (_, i) => ({
      id: i,
      text: `Item ${i}`,
      age: Math.round(Math.random() * 50),
      score: 0,
      type: 0,
    }))
  )
</script>

<style scoped>
  table tbody {
    display: block;
    height: 360px;
    overflow-y: scroll;
    overflow-x: scroll;
  }

  table tbody td {
    height: 32px;
    line-height: 32px;
    font-size: 12px;
    text-align: center;
    border-bottom: 1px solid #ececec;
  }

  table thead,
  tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;
  }

  table thead {
    width: calc(100% - 1em);
  }

  .scroller {
    width: 100%;
    height: 100%;
  }
</style>
