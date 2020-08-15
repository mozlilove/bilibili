<template>
  <div id="app">
    <router-view></router-view>
    <tabbar-main></tabbar-main>
  </div>
</template>

<script>
import TabbarMain from 'components/content/maintabbar/MainTabbar.vue';
export default {
  name:'App',
  components:{
    TabbarMain
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
