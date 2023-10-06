import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from '../views/Home.vue';

const routes:RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/users',
        name: 'users',
        component: () => import('../views/User.vue')
    },
    {
        path: '/books',
        name: 'books',
        component: () => import('../views/Book.vue')
    },
    {
        path: '/swipers',
        name: 'swipers',
        component: () => import('../views/Swiper.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router