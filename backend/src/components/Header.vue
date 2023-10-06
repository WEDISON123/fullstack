<template>
  <div class="flex w-full">
    <div class="absolute left-5 top-4 text-2xl text-white">
      <el-icon @click="turn">
        <Expand v-if="!store.manuKey"/>
        <Fold v-if="store.manuKey"/>
      </el-icon>
    </div>
    <div class="flex-auto text-2xl text-white text-center mt-3">
      趣读书城后台管理系统
    </div>
    <div class="absolute right-5 top-4">
      <el-dropdown trigger="click">
        <el-avatar
        class=""
        :size="32"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        <template #dropdown>
          <el-dropdown-item><el-icon><Switch /></el-icon>修改密码</el-dropdown-item>
          <el-dropdown-item><el-icon><CloseBold /></el-icon>退出</el-dropdown-item>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { layoutStore } from '../store';

const store = layoutStore()

const turn = () => {
  store.changeKey()
}
</script>

<style scoped>

</style>