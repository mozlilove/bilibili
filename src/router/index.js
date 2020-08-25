import Vue from "vue";
import Router from "vue-router";

const Register  = () => import ("views/register/Register")
const Login  = () => import ("views/login/Login")
const Profile  = () => import ("views/profile/Profile")
const Edit  = () => import ("views/profile/Edit")
const Home  = () => import ("views/home/Home")
const Article  = () => import ("views/article/Article")
const EditCategory = () => import ('views/home/EditCategory')
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
    component: Register,
  },
  {
    path: "/login",
    component: Login,
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
    component:Home,
    meta:{
      keepalive:true
    }
  },
  {
    path:'/article/:id',
    component:Article
  },
  {
    path:'/editCategory',
    component:EditCategory
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
