<template>
    <div class="container">
        <div class="nav" @click="goBack">
            <div class="back">
                <img src="src/assets/back.svg" alt="">
            </div>
            <div class="title">
                用户登入
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
                <button type="submit">登录</button>
            </form>
            <div class="link">
                <router-link to="sign">注册</router-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { FormData } from '../types/index' 
import { loginIn } from '../api/user';
import bcrypt from 'bcryptjs'
import { showNotify } from 'vant'
import { useRouter, Router } from 'vue-router'

const router = useRouter()

const formData = reactive({
    name: '',
    password: ''
} as FormData)

const submitForm = async () => {
    // loginIn(formData)
    const result: FormData | null = await loginIn(formData)
    if(!result) {
        showNotify({ type: 'danger', message: '用户名错误', duration: 1000});
    } else {
        await bcrypt.compare(formData.password, result.password, (err, isMatch) => {
            if (err) {
                // 处理错误
                console.error(err);
            } else if (isMatch) {
                // 密码匹配
                showNotify({ type: 'success', message: '登入成功', duration: 1000});
                router.go(-1)
            } else {
                // 密码不匹配
                showNotify({ type: 'danger', message: '密码错误', duration: 1000});
            }
        });
    }
};

const goBack = () => {
    router.go(-1)
}
</script>

<style lang="stylus" scoped>
.container
    height 100%;
    width 100%;
    margin 0
    padding 0
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
        .link
            width 10vw
            position relative
            left 15vw
            top 1vh
</style>