import axios from "axios";
import router from "@/router";
import Vue from 'vue'
/**
 * 创建实例
 */
const request = axios.create({
  baseURL: "http://112.74.99.5:3000/web/api",
  timeout: 5000
});
/**
 * 请求前拦截
 */
request.interceptors.request.use(config => {
  if (localStorage.getItem("id") && localStorage.getItem("token")) {
        config.headers.Authorization = 'Bearer ' + localStorage.getItem("token")
  }
    return config;
},error => {
    return Promise.reject(error)
})
/**
 * 接受响应前拦截
 */
request.interceptors.response.use(response => {
    console.log(response);
    return response
},error => {
    if(error.response.status == 401 || error.response.status ==402) {
        Vue.prototype.$toast.fail(error.response.data.message)
        router.push('/login')
    }
    return Promise.reject(error)
})
export default request
