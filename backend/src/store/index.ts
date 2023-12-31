import { defineStore } from 'pinia'
import { ref, Ref } from 'vue'
import { getAllUsers } from '../api/user'
import { getAllSwiper } from '../api/swiper'
import { User } from '../types'

export const layoutStore = defineStore('layout', () => {
    const manuKey:Ref<boolean> = ref(false)
    
    const changeKey = () => {
        manuKey.value = !manuKey.value
        console.log(manuKey.value);
        
    }

    return {
        manuKey,
        changeKey
    }
})

export const userStore = defineStore('user', () => {
    const user:Ref<User[]> = ref([])

    const getUser = async () => {
        user.value = await getAllUsers() 
    }

    return {
        user,
        getUser
    }
})

export const swiperStore = defineStore('swiper', () => {
    const swiper:Ref<User[]> = ref([])

    const getSwiper = async () => {
        swiper.value = await getAllSwiper()
    }

    return {
        swiper,
        getSwiper
    }
})