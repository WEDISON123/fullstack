<template>
    <div>
      <!-- <el-auto-resizer>
        <template #default="{ height, width }">
          <el-table-v2
            :columns="columns"
            :data="store.user"
            :width="width"
            :height="height"
            fixed
          />
        </template>
      </el-auto-resizer> -->
      <el-table :data="store.user" style="width: 100%" height="450">
        <el-table-column prop="_id" label="_id" width="230%"/>
        <el-table-column prop="name" label="用户名" width="100%"/>
        <el-table-column prop="password" label="密码"/>
        <el-table-column label="操作" width="100%">
          <template #default="scope">
            <el-button @click="deleteUser(scope.row.name)" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
  </div>
</template>

<script setup lang="ts">
import {  userStore } from '../store/index'
import { removeUser } from '../api/user'
// import type { Column } from 'element-plus'

const store = userStore()
store.getUser()

const deleteUser = async (name:any) => {
  // console.log(name)
  const result = await removeUser(name)
  if(result === 'success') {
    store.getUser()
  }
}
// const columns:Column<any>[] = [
//     {
//         key: '0',
//         dataKey: '_id',
//         title: '_id',
//         width: 150,
//     },
//     {
//         key: '1',
//         dataKey: 'name',
//         title: 'name',
//         width: 150,
//     },
//     {
//         key: '2',
//         dataKey: 'password',
//         title: 'password',
//         width: 500,
//     }
// ]

</script>

<style scoped>

</style>