<script setup lang="ts">
import { reactive, ref } from 'vue'
const formRef = ref()
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

const onSubmit = () => {
  console.log('submit!', d)
}
const tableData = ref([
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    val: '0',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    val: '0',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    val: '0',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    val: '0',
  },
])

const clearValidation = (field: string) => {
  if (formRef.value) {
    formRef.value?.clearValidate(field)
  }
}
const doValidtion = (field: string) => {
  formRef.value?.validateField(field)
}
</script>

<template>
  <div>测试222221</div>

  <el-form ref="formRef" width="100" :model="tableData" label-width="auto">
    <el-table size="small" border :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
      <el-table-column prop="action" width="210" label="Action">
        <template #default="scope">
          <el-form-item
            :rules="[{ min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }]"
            :prop="scope.$index + '.val'"
          >
            <el-input
              @blur="doValidtion(scope.$index + '.val')"
              @focus="clearValidation(scope.$index + '.val')"
              v-model="scope.row.val"
            />
          </el-form-item>
        </template>
      </el-table-column>
    </el-table>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">Test</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<style lang="scss" scoped>
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

:deep(.el-form-item) {
  &:focus {
    background-color: #d47979;
    .el-form-item__error {
      display: none;
    }
  }
}
</style>
