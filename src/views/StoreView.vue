<template>
  <div>
    <el-row class="ctrl-container">
      <el-col :span="24">
        <el-button :icon="Search" circle class="ctrl-button"></el-button>
        <el-button
          type="primary"
          :icon="Edit"
          @click="changeFilter('installed')"
          class="ctrl-button"
          >已安装优先</el-button
        >
        <el-button
          type="success"
          :icon="Check"
          @click="changeFilter('uninstalled')"
          class="ctrl-button"
          >未安装优先</el-button
        >
        <el-button
          type="info"
          :icon="Message"
          @click="changeFilter('script')"
          class="ctrl-button"
          >仅脚本</el-button
        >
        <el-button
          type="warning"
          :icon="Star"
          @click="changeFilter('app')"
          class="ctrl-button"
          >仅应用</el-button
        >
        <el-button
          type="danger"
          :icon="Delete"
          @click="changeFilter('opensource')"
          class="ctrl-button"
          >仅开源</el-button
        >
      </el-col>
    </el-row>
    <!-- <el-radio-group v-model="isScript" style="margin-bottom: 20px">
      <el-radio-button label="app">应用程序</el-radio-button>
      <el-radio-button label="script">脚本文件</el-radio-button>
    </el-radio-group> -->
    <HorizontalList :list="appList"></HorizontalList>
  </div>
</template>

<script lang="ts" setup>
import HorizontalList from "@/components/store/HorizontalList.vue";
import Application from "@/type/Application";
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from "@element-plus/icons-vue";
import { reactive } from "vue";
// import { ref } from "vue";
// let appList: Array<Application> = [];
let appList = reactive(Array<Application>());
// const filter = ref("none");

const changeFilter = (filter: string) => {
  appList.length = 0;
  const app:Application ={
    name: "打开行",
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
    state:"uninstalled"
  }
  appList.push(app);
  // console.log(filter);
};
</script>
<style>
.ctrl-button {
  margin-bottom: 10px;
}
.ctrl-container {
  margin-bottom: 25px;
  border-bottom: 1px solid rgb(221, 221, 221);
}
</style>
