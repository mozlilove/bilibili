import Vue from "vue";
import Router from "vue-router";

import Register from "views/register/Register";
import Login from "views/login/Login";
import Profile from "views/profile/Profile";
import Edit from "views/profile/Edit";
import Home from "views/home/Home"
//安装插件
Vue.use(Router);
//创建路由实例
const routes = [
  {
    path: "",
    redirect: "/login"
  },
  {
    path: "/register",
    component: Register
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/profile",
    component: Profile,
    meta: {
      needToken: true
    }
  },
  {
    path: "/edit",
    component: Edit,
    meta: {
      needToken: true
    }
  },
  {
    path:"/home",
    component:Home
  }
];

const router = new Router({
  routes,
  mode: "history"
});
/**
 * 设置路由跳转重复的处理
 */
const originalPush = Router.prototype.push;
  Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};
/**
 * 设置前置路由守卫，判断跳转的路由页面是否需要登录（token）
 */
router.beforeEach((to, from, next) => {
  if (!
    localStorage.getItem("id") &&
    localStorage.getItem("token") &&
    to.meta.needToken == true
  ) {
    router.push("/login");
    Vue.prototype.$toast.fail("请重新登录");
  }
  next();
});

export default router;
