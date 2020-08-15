import request from './request'

export function getHomeMultiData() {
    return request({
        url:'/getSwiper.php'
    })
}
export function getHomeRecommond() {
    return request({
        url:'/navList.php'
    })
}