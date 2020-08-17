<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Register from 'views/register/Register';
import Login from 'views/login/Login'
import Profile from 'views/profile/Profile'
export default {
  name:'App',
  components:{
    Register,
    Login,
    Profile
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
