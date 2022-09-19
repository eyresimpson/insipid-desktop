<template>
  <div class="item">
    <!-- 软件卡片 -->
    <el-row>
      <el-col>
        <el-image :src="(app as Application).icon" fit="fill"></el-image>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div class="title">{{ (app as Application).name }}</div>
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
  /* border: 1px solid rgb(214, 214, 214); */
  padding-top: 25px;
  padding-bottom: 25px;
  margin: 5px;
  width: 20%;
}
.title {
  color: rgb(77, 77, 77);
  padding-top: 15px;
}
.description {
  text-align: left;
}
</style>
