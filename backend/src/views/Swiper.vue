<template>
    <div>
      <div class="reletive top-2">
        <el-button type="primary" @click="addSwiper">添加轮播图</el-button>
      </div>
      <br>
      <el-table :data="store.swiper" style="width: 100%" height="70vh">
        <el-table-column prop="title" label="标题" width="150%"/>
        <el-table-column prop="img" label="图片地址" width="200%"/>
        <el-table-column prop="img" label="图片">
            <template #default="scope">
                <div class="flex items-center">
                    <img :src="scope.row.img" alt="">
                </div>
            </template>
        </el-table-column>
        <el-table-column label="操作" width="100%">
            <template #default="scope">
                <el-button @click="deleteSwiper(scope.row.title)" type="danger">删除</el-button>
            </template>
        </el-table-column>
      </el-table>
  </div>
  <el-dialog
      v-model="state.showDialog"
      title="添加轮播图"
      width="400px"
  >
    <el-form 
        :model="state.swiperFrom"
        :rules="state.rules"
        ref="formRef"
        label-width="100px"
        class-good="goods-form"
    >
        <el-form-item label="跳转链接" prop="img">
            <el-input type="text" v-model="state.swiperFrom.img"></el-input>
        </el-form-item>
        <el-form-item label="title" prop="title">
            <el-input type="text" v-model="state.swiperFrom.title"></el-input>
        </el-form-item>
    </el-form>
    <template #footer>
        <span class="dialog-footer">
            <el-button @click="state.showDialog=false">取消</el-button>
            <el-button type="primary" @click="submitForm">确定</el-button>
        </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import {  swiperStore } from '../store/index'
import { removeSwiper, creatSwiper } from '../api/swiper'
import { reactive } from 'vue';
// import type { Column } from 'element-plus'

const store = swiperStore()
store.getSwiper()

const deleteSwiper = async (title:string) => {
  console.log(title)
  const result = await removeSwiper(title)
  if(result === 'success') {
    store.getSwiper()
  }
}

// 轮播图添加对话框
const state = reactive({
  showDialog: false,
  swiperFrom: {
    title: '',
    img: '',
  },
  rules: {
    img: [
        { required: true, message: '图片链接不能为空或前缀错误', trigger: ['blur'],
        pattern: /^((ht|f)tps?):\/\//
        }
    ],
    title: [
        { required: true, message: '标题不能为空', trigger: ['blur'] }
    ]
  }
})

const addSwiper = () => {
  state.showDialog = true
}

const submitForm = async () => {
  console.log(state.swiperFrom)
  const result = await creatSwiper(state.swiperFrom)
  if (result === 201) {
    store.getSwiper()
    console.log('Created success')
    state.showDialog = false
  } else {
    alert(result)
  }
}
</script>

<style scoped>

</style>