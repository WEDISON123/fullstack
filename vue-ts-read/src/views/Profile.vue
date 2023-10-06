<template>
    <div class="container">
        <router-link to="login">
            <div class="userInfo">
                <div class="avatar">
                    <img src="../assets/gril.jpg" alt="">
                </div>
                <div class="userName">登录</div>
            </div>
        </router-link>
        <div class="Func a">
            <UserFunc title="消息通知" icon="src/assets/loud.svg"/>
        </div>
        <div class="Func b">
            <UserFunc title="最近浏览" icon="src/assets/recent.svg"/>
            <UserFunc title="我的书单" icon="src/assets/job.svg"/>
        </div>
        <div class="Func c">
            <router-link to="chat">
                <UserFunc title="客服咨询" icon="src/assets/share.svg"/>
            </router-link>
            <UserFunc title="给个好评" icon="src/assets/judge.svg"/>
        </div>
        <div class="Func d">
            <UserFunc title="缓存管理" icon="src/assets/load.svg"/>
        </div>
        <div class="Func e">
            <UserFunc title="换肤" icon="src/assets/skin.svg"/>
            <UserFunc title="夜间模式" icon="src/assets/type.svg"/>
        </div>
        <div class="Func e">
            <UserFunc title="设置" icon="src/assets/set.svg"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import UserFunc from '../components/UserFunc.vue';
import { useRouter } from 'vue-router';

</script>

<style lang="stylus" scoped>
    .container
        height: 100vh;
        width: 100vw;
        background-color: #F1F1F1
        .userInfo
            height: 12vh;
            width: 100%;
            background-color: #fff;
            display: flex;
            align-items: center;
            // justify-content: center;
            .avatar
                height: 8vh;
                width: 8vh;
                border-radius: 50%;
                overflow: hidden;
                margin: 0 3vw 0 4vw;
                img
                    max-width: 100%;
                    max-height: 100%;
        .Func
            margin-top: 1vh
</style>