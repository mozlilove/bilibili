<template>
  <nav-bar color="white">
          <div slot="left" class="logo" @click="$router.push('/home')">
              <img  src="~assets/img/logo.svg" alt="">
          </div>
          <div slot="right" class="right">
              <img style="margin-right:5vw" src="~assets/img/search.svg" alt="" @click="$router.push('/search')">
              <img v-if="userInfo.user_img" :src="userInfo.user_img" alt="" @click="judge">
              <img v-else src="~assets/img/default_img.jpg" alt="" @click="judge">
              <div class="openApp">下载 App</div>
          </div>
      </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import request from 'network/request'
export default {
    name:'TopBar',
    data() {
        return {
            userInfo:{}
        }
    },
    components:{
        NavBar
    },
    methods:{
        getUseInfo() {
            request.get(
                '/user/' + localStorage.getItem('id')
            ).then(res => {
                this.userInfo = res.data[0]
            }).catch(err => {
                console.log(err);
            })
        },
        judge() {
            if(this.userInfo){
                this.$router.push('/profile')
            }else{
                this.$router.push('/login')
            }
        }
    },
    created() {
        if(localStorage.getItem('id') && localStorage.getItem('token')){
            this.getUseInfo()
        }
    }
}
</script>

<style>
.logo {
    padding: 0.533vw 0;
    padding-left: 4.8vw;
    margin-right: 2vw;
}
.logo img{
    width: 17vw;
    height: 8vw;
}
.center p {
    display: flex;
    position: relative;
    background-color: #f4f4f4;
    padding: 0.667vw 0;
    border-radius: 1.333vw;
}
.center p .search{
    margin-left: 0.8vw;
}
.center p  span {
    font-size: 1.6vw;
    text-align: center;
    vertical-align: bottom;
    margin-left: 0.8vw;
}
.right{
    display: flex;
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