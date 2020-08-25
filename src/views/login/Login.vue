<template>
  <div id="register" class="register">
    <nav-bar>
      <div slot="center">登录BiliBili</div>
    </nav-bar>
    <text-input
      label="账号"
      type="text"
      placeholder="请输入账号"
      style="margin: 4vw 0"
      rule="^.{6,16}$"
      @inputChange="res => (this.userInfo.username = res)"
    />
    <text-input
      label="密码"
      type="password"
      placeholder="请输入密码"
      style="margin: 4vw 0"
      rule="^.{6,16}$"
      @inputChange="res => (this.userInfo.password = res)"
    />
    <diy-button
      @click.native="LoginSubmit"
      class="login-btn"
      width="100%"
      height="12.5vw"
      btnText="登录"
    />
    <div class="change" @click="$router.push('/register')">切换到注册</div>
  </div>
</template>

<script>
const NavBar = () => import ("components/common/navbar/NavBar")
const TextInput = () => import ("components/common/input/TextInput")
const DiyButton = () => import ("components/common/button/Button")

import request from "network/request"

export default {
  name: "Login",
  data() {
    return {
      userInfo: {
        username: "",
        password: ""
      }
    };
  },
  components: {
    NavBar,
    TextInput,
    DiyButton
  },
  methods: {
    LoginSubmit() {
      //再次检验输入是否合法以及全部填写，并提交数据
      let rule = /^.{6,16}$/;
      if (
        rule.test(this.userInfo.username) &&
        rule.test(this.userInfo.password)
      ) {
        // console.log('success');
        request
          .post("/login", this.userInfo)
          .then(res => {
            if (res.data.code === 200) {
              this.$toast.fail(res.data.msg);
              localStorage.setItem("token", res.data.token);
              localStorage.setItem("id", res.data.id);
              setTimeout(() => {
                this.$router.push("/home");
              }, 1000);
            } else {
              this.$toast.fail(res.data.msg);
              return
            }
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.$toast.fail("输入不合法");
      }
    }
  }
};
</script>

<style>
.login-btn {
  padding: 4.16vw 2.778vw;
}
.change {
  text-align: center;
  font-size: 3.61vw;
}
</style>
