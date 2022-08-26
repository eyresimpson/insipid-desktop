<template>
  <el-form label-position="top" :model="form" label-width="120px">
    <el-form-item label="目标地址">
      <el-input v-model="form.name">
        <template #append>
          <el-button icon="FolderOpened" @click="selectTargetPath"></el-button>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item label="升级策略">
      <el-select
        v-model="form.region"
        placeholder="全局策略，不会覆盖软件升级策略"
      >
        <el-option label="自动升级" value="auto" />
        <el-option label="提升升级" value="alert" />
        <el-option label="提升升级且预下载" value="alertanddown" />
        <el-option label="不提醒" value="none" />
      </el-select>
    </el-form-item>
    <el-form-item label="开机自启动">
      <el-switch v-model="form.delivery" />
    </el-form-item>
    <el-form-item label="高级选项">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="不提示安全风险" name="type" />
        <el-checkbox label="允许Shell脚本" name="type" />
        <el-checkbox label="快速安装" name="type" />
        <el-checkbox label="自动更新软件源" name="type" />
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="安装方式">
      <el-radio-group v-model="form.resource">
        <el-radio label="最小化" />
        <el-radio label="默认安装" />
        <el-radio label="全功能安装" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="软件源">
      <el-input v-model="form.desc" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">保存</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

// do not use same name with ref
const form = reactive({
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
});

const onSubmit = () => {
  console.log("submit!");
};

const selectTargetPath = () => {
  console.log("selectTargetPath");
  
};
</script>
