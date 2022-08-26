<template>
  <div>
    <el-radio-group v-model="isScript" style="margin-bottom: 20px">
      <el-radio-button label="app">应用程序</el-radio-button>
      <el-radio-button label="script">脚本文件</el-radio-button>
    </el-radio-group>
    <HorizontalList :list="appList"></HorizontalList>
  </div>
</template>

<script lang="ts" setup>
import HorizontalList from "@/components/store/HorizontalList.vue";
import Application from "@/type/Application";
import { ref } from "vue";
let appList: Array<Application> = [];
const isScript = ref("app");

appList.push({
  name: "打开命令行",
  type: "script",
  description: "一个简单的脚本",
  author: "aine",
  updateTime: new Date(),
  downloadCount: 0,
  grade: 0,
  picture: [],
  size: "1220kb",
  language: "zh-CN",
  cost: "0￥",
});

</script>
