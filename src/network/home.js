import request from './request'

export function getHomeMultiData() {
    return request({
        url:'/getSwiper.php'
    })
}