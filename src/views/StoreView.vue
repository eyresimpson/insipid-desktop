<template>
  <div>
    <el-row class="ctrl-container">
      <el-col :span="24">
        
        <el-button
          type="primary"
          :icon="Edit"
          @click="changeFilter('installed')"
          class="ctrl-button"
          >已安装优先</el-button
        >
        <el-button :icon="Search" circle class="ctrl-button"></el-button>
      </el-col>
    </el-row>
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
  const res: Array<Application> = await requestSoftwareList(filter);
  console.log("-----==>", res);

  res.forEach((app: Application) => {
    appList.push(app);
  });
};
changeFilter("defalut");
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
