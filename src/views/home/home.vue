<template>
  <div id="home" class="home">
    <nav-bar class="homenav">
      <div slot="center">游戏商城</div>
    </nav-bar>
    <home-swiper :swiper="swiper"></home-swiper>
    <home-recommond :recommond="recommond"></home-recommond>
    <tab-control :titles="titles" class="tab-control"></tab-control>
    <ul>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表11</li>
      <li>列表12</li>
      <li>列表13</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
      <li>列表20</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
      <li>列表20</li>
       <li>列表19</li>
      <li>列表20</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
      <li>列表20</li>
    </ul>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';

import TabControl from 'components/content/tabcontrol/TabControl.vue'

import {getHomeMultiData,getHomeRecommond} from 'network/home.js'

import  HomeSwiper from './childComps/HomeSwiper'
import HomeRecommond from './childComps/HomeRecommond'

export default {
    name:'Home',
    components:{
      NavBar,
      HomeSwiper,
      HomeRecommond,
      TabControl
    },
    data(){
      return {
        swiper:null,
        recommond:null,
        titles:['新游','精选','流行']
      }
    },
    created() {
      getHomeMultiData().then(res => {
        //console.log(res.data);
        this.swiper = res.data;
      }),
      getHomeRecommond().then(res => {
        this.recommond = res.data;
      })
    }
}
</script>

<style>
.home{
  padding-top: 44px;
}
.homenav{
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 9999;
  background-color: var(--color-tint);
  color: #fff;
}
.tab-control{
  position: sticky;
  top: 44px;
  background-color: #fff;
}
</style>