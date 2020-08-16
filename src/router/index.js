import Vue from 'vue';
import Router from 'vue-router';

const Register = () => import('views/register/Register.vue')
//安装插件
Vue.use(Router);
//创建路由实例
const routes = [
    {
        path:'',
        redirect:'/register'
    },
    {
        path:'/register',
        component:Register

    }
]

const router = new Router({
    routes,
    mode:'history'
})

export default router