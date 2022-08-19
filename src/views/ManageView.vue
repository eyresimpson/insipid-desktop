<template>
  <div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">expand</el-radio-button>
      <el-radio-button :label="true">collapse</el-radio-button>
    </el-radio-group>
    <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
      @close="handleClose">
      <el-menu-item index="1">
        <el-icon>
          <Operation />
        </el-icon>
        <template #title>系统</template>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon>
          <Connection />
        </el-icon>
        <template #title>网络</template>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon>
          <Key />
        </el-icon>
        <template #title>安全</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon>
          <setting />
        </el-icon>
        <template #title>其他</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>import { ref } from 'vue';


const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

</script>
