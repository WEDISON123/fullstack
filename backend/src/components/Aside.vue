<template>
    <div class="w-full h-full bg-[#304156]">
        <el-menu 
            @select="handleOpen"
            active-text-color="#409EFF"
            background-color="#304156"
            text-color="#BFCBD9"
            class="h-full"
        >
            <router-link to="/">
                <el-menu-item index="1">
                    <el-icon><document /></el-icon>
                    <span>首页</span>
                </el-menu-item>
            </router-link>
            <router-link to="users">
                <el-menu-item index="2">
                    <el-icon><document /></el-icon>
                    <span>用户管理</span>
                </el-menu-item>
            </router-link>
            <router-link to="books">
                <el-menu-item index="3">
                    <el-icon><setting /></el-icon>
                    <span>文章管理</span>
                </el-menu-item>
            </router-link>
            <router-link to="swipers">
                <el-menu-item index="4">
                    <el-icon><setting /></el-icon>
                    <span>轮播图管理</span>
                </el-menu-item>
            </router-link>
        </el-menu>
    </div>
</template>

<script setup lang="ts">
const handleOpen = (index:number) => {
  console.log(index)
}
</script>

<style scoped>

</style>