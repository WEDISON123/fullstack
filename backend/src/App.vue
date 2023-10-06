<template>
  <div class="w-full h-full">
    <el-container class="w-full h-full">
      <el-header class="w-full bg-[#001528]">
        <Header/>
      </el-header>
      <el-container class="w-full">
        <el-aside v-if="store.manuKey" width="max(170px,15vw)">
          <Aside/>
        </el-aside>
        <el-main class="bg-blue-100">
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script setup lang="ts">
import Header from './components/Header.vue';
import Aside from './components/Aside.vue'
import { layoutStore } from './store';

const store = layoutStore()
</script>

<style scoped>

</style>