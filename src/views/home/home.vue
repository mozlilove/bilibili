<template>
  <div id="home">
    <nav-bar class="homenav">
      <div slot="center">游戏商城</div>
    </nav-bar>
    <home-swiper :swiper="swiper"></home-swiper>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';
import {getHomeMultiData} from 'network/home.js'
import  HomeSwiper from './childComps/HomeSwiper'
export default {
    name:'Home',
    components:{
      NavBar,
      HomeSwiper
    },
    data(){
      return {
        swiper:null
      }
    },
    created() {
      getHomeMultiData().then(res => {
        //console.log(res.data);
        this.swiper = res.data;
      })
    }
}
</script>

<style>
.homenav{
  background-color: var(--color-tint);
  color: #fff;
}
</style>