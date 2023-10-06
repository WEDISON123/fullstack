import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3333/api'

// axios.interceptors.response.use(res => {
//     // code,
//     // message,
//     // data: {
//     //     data:
//     // }
//     return res.data
// })

export default axios