import axios from 'axios'
/**
 * 封装axios，对不同请求进行封装
 * @param {*} method :String
 * @param {*} config :Array,必须含有且第一项为url，当method为post时第二项必须为data
 */
export default function request(method,config){
    const instance = axios.create({
        baseURL:'http://112.74.99.5:3000/web/api',
        timeout:5000
    })
    if(method == 'GET') {
        return instance.get(config[0])
    }else if(method == 'POST') {
        return instance.post(config[0],config[1])
    }
}