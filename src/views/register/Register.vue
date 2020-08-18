<template>
  <div id="register" class="register">
    <nav-bar>
      <div slot="center">注册BiliBili</div>
    </nav-bar>
    <text-input
      label="昵称"
      type="text"
      placeholder="请输入昵称"
      rule="^.{6,16}$"
      style="margin:3vw 0"
      @inputChange="res => this.userInfo.name = res"
    />
    <text-input
      label="账号"
      type="text"
      placeholder="请输入账号"
      rule="^.{6,16}$"
      @inputChange="res => this.userInfo.username = res"
    />
    <text-input
      label="密码"
      type="password"
      placeholder="请输入密码"
      rule="^.{6,16}$"
      @inputChange="res => this.userInfo.password =res"
    />
    <diy-button @click.native="RegisterSubmit" class="register-btn" width="100%" height="12.5vw" btnText="注册"/>
    <div class="change" @click="$router.push('/login')">切换到登录</div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TextInput from "components/common/input/TextInput";
import DiyButton from "components/common/button/Button";

import request from 'network/request';
export default {
  name: "Register",
  data() {
      return {
          userInfo:{
              name:'',
              username:'',
              password:''
          }
      }
  },
  components: {
    NavBar,
    TextInput,
    DiyButton
  },
  methods:{
      RegisterSubmit() {
          //再次检验输入是否合法以及全部填写，并提交数据
          let rule = /^.{6,16}$/
          if(rule.test(this.userInfo.name) 
            && rule.test(this.userInfo.username) 
            && rule.test(this.userInfo.password)){
              // console.log('success');
              request.post(
                  '/register',
                  this.userInfo     
              ).then(res => {
                  console.log(res);
                  this.$toast.fail(res.data.msg)
                  localStorage.setItem('id',res.data.id)
                  localStorage.setItem('token',res.data.objtoken)
                  setTimeout( () => {
                    this.$router.push('/login')
                  },1000)
              }).catch(err => {
                  console.log(err);
              })
          }else{
              this.$toast.fail('输入不合法')
          }
      }
  }
};
</script>

<style>
.register-btn{
    padding: 4.16vw 2.778vw;
    
}
.change {
    text-align: center;
    font-size: 3.61vw;
}
</style>
