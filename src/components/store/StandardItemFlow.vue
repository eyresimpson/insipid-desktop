<template>
  <div class="item">
    <!-- 软件卡片 -->
    <el-row>
      <el-col :span="6">
        <div class="title">{{ (app as Application).name }}</div>
      </el-col>
      <el-col class="description" :span="12">{{
        (app as Application).description
      }}</el-col>
      
      <el-col :span="4">
        <el-button type="default">{{(app as Application).state == "uninstalled" ? "安装" : "管理"}}</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import Application from "@/type/Application";
import { defineProps } from "vue";

defineProps({
  app: Application,
});
</script>
<style>
.item {
  background: rgb(247, 247, 247);
  border: 1px solid rgb(214, 214, 214);
  padding-top: 25px;
  padding-bottom: 25px;
  margin: 5px;
}
.title {
  color: rgb(77, 77, 77);
}
.description {
  text-align: left;
}
</style>
