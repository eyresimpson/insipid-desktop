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
        <el-button type="default">部署</el-button>
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
  background: rgb(177, 213, 255);
  border: 1px solid rgb(78, 110, 255);
  padding-top: 25px;
  padding-bottom: 25px;
  margin: 5px;
}
.title {
  color: rgb(121, 121, 121);
}
.description {
  text-align: left;
}
</style>
