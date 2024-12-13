<script setup lang="ts">
  import { reactive, ref } from 'vue'

  const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
  })
  const rules = ref({
    name: [
      { required: true, message: 'Please input Activity name', trigger: 'blur' },
      { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
  })
  const onSubmit = () => {
    console.log('submit!')
  }
  const tableData = ref([
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ])
</script>

<template>
  <div>test</div>

  <el-form width="100" :rules="rules" :model="form" label-width="auto">
    <el-table size="small" border :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
      <el-table-column prop="action" label="Action">
        <template #default="scope">
          <el-form-item prop="name">
            <el-input v-model="form.name" />
          </el-form-item>
        </template>
      </el-table-column>
    </el-table>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped>
  :deep(.el-form-item) {
    margin-bottom: 0px !important;
  }

  :deep(.el-form-item__error) {
    position: absolute;
    top: auto !important;
    left: auto !important;
    border: 1px solid #d47979;
    border-radius: 4px;
    padding: 4px 12px;
    background-color: #faebeb;
    right: 1px;
    bottom: 4px;
    font-weight: 800;
    z-index: 100;
  }
</style>
