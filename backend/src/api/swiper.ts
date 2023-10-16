import axios from "./config";
import { Swiper } from "../types";

export const getAllSwiper = ():Promise<any> => {
    return axios.get('/swiper')
    .then((response) => {
        const { data } = response;
        return data;
    })
}

export const creatSwiper = async (params:Swiper):Promise<any> => { 
    return axios.post(`/swiper`, {
        title: params.title,
        img: params.img
    })
    .then((response) => {
        // 返回状态码
        if (response.status === 200) {
            return response.data
        }
        return response.status
    })
    .catch((err) => {console.log(err)})
}

export const removeSwiper = (title:string):Promise<any> => {
    return  axios.delete(`/swiper/${title}`)
    .then((response) => {
        console.log("删除成功", response)
        // const { data } = response
        return 'success'
    })
    .catch((err) => {
        return err.message
    })
}