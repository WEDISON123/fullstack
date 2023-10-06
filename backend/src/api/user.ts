import axios from "./config";

export const getAllUsers = ():Promise<any> => {
    return axios.get('/user')
    .then((response) => {
        const { data } = response;
        return data;
    })
}

export const removeUser = (name:string):Promise<any> => {
    return  axios.delete(`/user/${name}`)
    .then((response) => {
        console.log("删除成功", response)
        // const { data } = response
        return 'success'
    })
    .catch((err) => {
        return err.message
    })
}