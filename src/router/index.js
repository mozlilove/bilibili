import Vue from 'vue';
import Router from 'vue-router';

import Register from 'views/register/Register'
import Login from 'views/login/Login'
import Profile from 'views/profile/Profile'
//安装插件
Vue.use(Router);
//创建路由实例
const routes = [
    {
        path:'',
        redirect:'/login'
    },
    {
        path:'/register',
        component:Register

    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/profile',
        component:Profile
    },
]

const router = new Router({
    routes,
    mode:'history'
})

export default router