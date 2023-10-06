# 开发所遇问题
- AxiosResponse<any, any> 不存在属性 "xxx"
   AxiosResponse的默认字段为
   {
      data: T;
      status: number;
      statusText: string;
      headers: AxiosResponseHeaders;
      config: AxiosResponseConfig<D>;
      request: any;
   }
   由于在axiosapi封装时使用了
   axios.interceptors.response.use(res => {
      code,
      message,
      data: {
         data:
      }
      return res.data
   })
   解构出data导致报错，这里不能使用这个功能