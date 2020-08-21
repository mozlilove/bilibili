<template>
  <div class="comment">
    <div class="title">
      <span>评论</span>
      <span
        >({{ article.commentlen * Math.floor(Math.random() * 1000 + 2) }})</span>
    </div>

    <div class="input">
        <div class="userimg">
            <img v-if="userInfo.user_img" :src="userInfo.user_img">
            <img v-else src="~assets/img/default_img.jpg">
        </div>
        <div class="input-box">
            <input type="text" placeholder="说点什么" @focus="judgeUser" />
        </div>
        <button @click="judgeUser">发表</button>
    </div>
  </div>
</template>

<script>
import request from 'network/request'
export default {
  name: "Comment",
  data() {
    return {
        userInfo:{}
    };
  },
  props: ["article"],
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
        judgeUser() {
          if(!this.userInfo && !localStorage.getItem('token') && localStorage.getItem('id')){
              this.$toast.fail('请先登录')
          }else{
              console.log('已登录');
          }
      }
  },
  created() {
        if(localStorage.getItem('id') && localStorage.getItem('token')){
            this.getUseInfo()
        }
    }
};
</script>

<style lang="less">
.comment {
  margin: 4vw 0;
  padding: 0 3.2vw;
  .title {
      margin-bottom: 2vw;
    span:nth-child(1) {
      display: inline-block;
      font-size: 3.2vw;
      margin-right: 2vw;
    }
    span:nth-child(2) {
      color: #999;
    }
  }
  .input {
      display: flex;
      width: 100%;
      padding-bottom: 2vw;
      .userimg {
          width: 6vw;
          height: 6vw;
          margin-right: 2vw;
          img {
              width: 100%;
              height: 100%;
              border-radius: 50%;
          }
      }
      .input-box {
          flex: 1;
          input {
              background-color: #eee;
              border-radius: 3vw;
              padding-left: 2vw;
              border: none;
              width: 100%;
              height: 100%;
          }
      }
      button {
          border: none;
          background-color: #fb7299;
          color: #fff;
          width: 16vw;
          border-radius: 1vw;
          margin-left: 2vw;
      }
  }
}
</style>
