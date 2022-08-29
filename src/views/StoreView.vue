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
import { requestSoftwareList } from "@/request";
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
let appList = reactive(Array<Application>());

const changeFilter = async (filter: string) => {
  // 清空旧数组
  appList.length = 0;
  console.log(filter);
  
  // 查询数据
  const res:Array<Application> = await requestSoftwareList(filter);
    console.log("-----==>",res);
    
    res.forEach((app:Application)=>{
      appList.push(app);
    });
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
