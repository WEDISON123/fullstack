<template>
    <div class="container">

        <div class="nav">
            <div class="back" @click="goBack">
                <img src="src/assets/back.svg" alt="">
            </div>
            <div class="title">
                用户注册
            </div>
        </div>
        <div class="form">
            <form @submit.prevent="submitForm">
                <div class="userName">
                    <input type="text" placeholder="请输入用户名" v-model="formData.name" autocomplete="username">
                </div>
                <div class="password">
                    <input type="password" placeholder="请输入密码" v-model="formData.password" autocomplete="current-password">
                </div>
                <button type="submit">注册</button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { FormData } from '../types/index';
import { signUp } from '../api/user';
import { showNotify } from 'vant'
import { useRouter, Router } from 'vue-router';

// 实例化路由对象
const router = useRouter() as Router;

const formData = {
    name: '',
    password: ''
} as FormData

// 收集表单数据并登入
const submitForm = async () => {
    // 异步调用登录请求函数，返回状态码
    const status = await signUp(formData)
    if(status === 201) {
        showNotify({ type: 'success', message: '注册成功', duration: 1000});
        // router.go(-1);
    }else if (status === 200) {
        showNotify({ type: 'danger', message: '用户名已存在', duration: 1000});
    }
};
const goBack = () => {
    // 回到上一页
    router.go(-1);
}
</script>

<style lang="stylus" scoped>
.container
    height 100%;
    width 100%;
    .nav
        background-color #00A8FF
        height 10vh
        width 100%;
        color #fff
        font-size 18pt
        text-align center
        display flex
        .back
            height 4vh
            width 4vh
            position relative
            top 3vh
            left 2vh
            img
                max-width 100%
                max-height 100%
        .title
            height 6vh
            width 30vw
            position relative
            top 3vh
            left 28vw
    .form
        height 40vh
        width 100%
        margin-top 10vh
        .userName
            height 10vh
            width 80vw
            margin 1vh 0 4vh 10vw
            input
                height 8vh
                width 68vw
                margin-left 4vw
                margin-top 1vh
                font-size 16pt
                padding-left 2vw
                border-radius 5px
                border 2px solid #00A8FF
                outline-color #39D7B8
        .password
            height 10vh
            width 80vw
            margin 0 0 4vh 10vw
            input
                height 8vh
                width 68vw
                margin 1vh 0 0 4vw
                font-size 16pt
                padding-left 2vw
                border-radius 5px
                border 2px solid #00A8FF
                outline-color #39D7B8
        button
            height 8vh
            width 70vw
            margin 0 0 0 14vw
            color #fff
            font-size 16pt
            background-color #39D7B8
            border-radius 5px
            border 0px solid #fff
</style>