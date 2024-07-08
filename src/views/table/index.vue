<template>
  <div class="container">
    <el-form ref="ruleFormRef" style="max-width: 600px" :model="ruleForm" status-icon :rules="rules" label-width="auto"
      class="demo-ruleForm">
      <el-form-item label="pass" prop="pass">
        <el-input v-model="ruleForm.pass" type="text" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          Submit
        </el-button>
        <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="tableData" :default-sort="{ prop: 'id', order: 'ascending' }"
      style="width: 48%; border-radius: 10px;">
      <el-table-column prop="id" label="id" sortable width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" :formatter="formatter" />
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue';
import type { FormInstance, FormRules, TableColumnCtx } from 'element-plus';

interface User {
  id: number;
  name: string;
  address: string;
}

const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  pass: '',
});

const rules = reactive<FormRules<typeof ruleForm>>({
  pass: [{
    validator: (rule: any, value: any, callback: any) => {
      if (value === '') {
        callback(new Error('不能为空'));
      } else {
        if (ruleForm.checkPass !== '') {
          if (!ruleFormRef.value) return;
          ruleFormRef.value.validateField('checkPass');
        }
        callback();
      }
    }, trigger: 'blur'
  }],
});

// 提交表单
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!');
    } else {
      console.log('error submit!');
    }
  });
};

// 清空表单
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

const formatter = (row: User, column: TableColumnCtx<User>) => {
  return row.address;
};

const tableData: User[] = ref([]);
onMounted(() => {
  tableData.value = [
    {
      id: 1,
      name: '111111',
      address: '1111111111111',
    }, {
      id: 6,
      name: '66666',
      address: '6666666666',
    }, {
      id: 3,
      name: '333333',
      address: '3333333333333',
    }, {
      id: 5,
      name: '555555',
      address: '5555555555555555',
    }
  ];
});
</script>

<style scope>
.container {
  background: rgba(0, 0, 0, 0.3);
  height: 100vh;
  padding: 5%;
  box-sizing: border-box;
}

.demo-ruleForm {
  padding: 2%;
  background-color: #fff;
  border: #fff solid 3px;
  border-radius: 10px
}
</style>