<template>
  <div>
    <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="true" @open="handleOpen" @close="handleClose">
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

<script lang="ts" setup>

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

</script>
