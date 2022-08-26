<template>
  <div>
    <el-row>
      <el-col :span="2">
        <el-menu
          default-active="system"
          class="el-menu-vertical-demo"
          :collapse="true"
          @select="handleSelect"
        >
          <el-menu-item index="system">
            <el-icon>
              <Operation />
            </el-icon>
            <template #title>系统</template>
          </el-menu-item>
          <el-menu-item index="network">
            <el-icon>
              <Connection />
            </el-icon>
            <template #title>网络</template>
          </el-menu-item>
          <el-menu-item index="security">
            <el-icon>
              <Key />
            </el-icon>
            <template #title>安全</template>
          </el-menu-item>
          <el-menu-item index="other">
            <el-icon>
              <setting />
            </el-icon>
            <template #title>其他</template>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="22">
        <div class="content">
          <!-- <router-view /> -->
          <systemConfigComponent v-if="selected=='system'"></systemConfigComponent>
          <networkConfigComponent v-if="selected=='network'"></networkConfigComponent>
          <securityConfigComponent v-if="selected=='security'"></securityConfigComponent>
          <otherConfigComponent v-if="selected=='other'"></otherConfigComponent>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import systemConfigComponent from "../components/configure/systemConfigComponent.vue";
import networkConfigComponent from "../components/configure/networkConfigComponent.vue";
import securityConfigComponent from "../components/configure/securityConfigComponent.vue";
import otherConfigComponent from "../components/configure/otherConfigComponent.vue";
import { ref } from "vue";

const selected = ref("system")

const handleSelect = (key: string) => {
  switch (key) {
    case "system":
      selected.value = "system";
      break;
    case "network":
      selected.value = "network";
      break;
    case "security":
      selected.value = "security";
      break;
    case "other":
      selected.value = "other";
      break;
  }
};
</script>
<style>
.content {
  /* background-color: azure; */
  height: 100%;
  margin-left: 30px;
}
</style>
