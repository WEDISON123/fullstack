import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/profile'
    },
    {
        path: "/profile",
        name: "profile",
        meta: {
            title: "用户主页"
        },
        component: () => import ('../views/Profile.vue')
    },
    {
        path: "/login",
        name: "login",
        meta: {
            title: "登录页"
        },
        component: () => import ('../views/Login.vue')
    },
    {
        path: "/sign",
        name: "sign",
        meta: {
            title: "注册页"
        },
        component: () => import ('../views/Sign.vue')
    },
    {
        path: "/chat",
        name: "chat",
        meta: {
            title: "客服"
        },
        component: () => import ('../views/Chat.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router