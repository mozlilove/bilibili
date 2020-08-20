<template>
  <nav-bar color="white">
          <div slot="left" class="logo">
              <img  src="~assets/img/logo.png" alt="">
          </div>
          <div slot="center" class="center">
              <p>
                  <van-icon name="search" class="search" />
                  <span>请输入内容</span>
              </p>
          </div>
          <div slot="right" class="right">
              <img v-if="userInfo.user_img" :src="userInfo.user_img" alt="" @click="$router.push('/profile')">
              <img v-else src="~assets/img/default_img.jpg" alt="">
              <div class="openApp">下载 App</div>
          </div>
      </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
export default {
    name:'TopBar',
    components:{
        NavBar
    },
    props:['userInfo']
}
</script>

<style>
.logo {
    padding: 4px 0;
}
.logo img{
    width: 90px;
}
.center p {
    display: flex;
    position: relative;
    background-color: #f4f4f4;
    padding: 5px 0;
    border-radius: 10px;
}
.center p .search{
    margin-left: 6px;
}
.center p  span {
    font-size: 12px;
    text-align: center;
    vertical-align: bottom;
    margin-left: 6px;
}
.right{
    display: flex;
    margin-left: 2vw;
}
.right img {
    width: 6.4vw;
    height: 6.4vw;
    border-radius: 50%;
    
}
.openApp{
    width: 21vw;
    line-height: 6.4vw;
    font-size: 3.46vw;
    margin-left: 3vw;
    background-color: #fb7299;
    color: #fff;
    border-radius: 0.533vw;
    text-align: center;
}
</style>