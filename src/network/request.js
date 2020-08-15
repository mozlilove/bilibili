import axios from 'axios'

export default function request(config){
    const instance = axios.create({
        baseURL:'https://www.lichenbin.top',
        timeout:5000
    })

    return instance(config)
}