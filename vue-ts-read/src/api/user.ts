import axios from "./config"
// import { AxiosRequestConfig } from "axios"
import { FormData } from "../types"
import bcrypt from 'bcryptjs'

export const loginIn = (params: FormData):Promise<any> => {
    const name = params.name
    return  axios.get(`/user/${name}`)
    .then((response) => {
        // console.log("成功", response)
        const { data } = response
        return data
    })
    .catch((err) => {
        return null
    })
}

export const signUp = async (params: FormData):Promise<any> => {
    // 确保用户信息安全 加密后传输
    const password = await hashde(params.password)    
    return axios.post(`/user`, {
        name: params.name,
        password: password
    })
    .then((response) => {
        // 返回状态码
        return response.status
    })
    .catch((err) => {console.log(err)})
}

// 加密函数
const hashde = async (password: string) => {
    const hashedPassword = await bcrypt.hash(password, 10)
    return hashedPassword
}