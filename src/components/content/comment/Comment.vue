<template>
  <div class="comment">
    <div class="title">
      <span>评论</span>
      <span
        >({{count}})</span
      >
    </div>

    <div class="input">
      <div class="userimg">
        <img v-if="userInfo.user_img" :src="userInfo.user_img" />
        <img v-else src="~assets/img/default_img.jpg" alt="" />
      </div>
      <div class="input-box">
        <input v-model="content" type="text" placeholder="说点什么" @focus="judgeUser" />
      </div>
      <button @click="submitComment">发表</button>
    </div>

    <ul class="comment-detail">
      <li v-for="(item, index) in comment" :key="index" class="first-li">
        <span class="comment_userimg">
          <img v-if="item.userinfo.user_img" :src="item.userinfo.user_img" />
          <img v-else src="~assets/img/default_img.jpg" alt="" />
        </span>
        <div class="comment-title">
          <span class="comment_username">{{
            item.userinfo.name ? item.userinfo.name : "匿名用户"
          }}</span>
          <p class="comment_date">{{ item.comment_date }}</p>
        </div>
        <div class="comment-content">
          {{ item.comment_content }}
        </div>
        <reply-comment :replyComment="item.child"></reply-comment>
      </li>
    </ul>
  </div>
</template>

<script>
import ReplyComment from "./ReplyComment";
import request from "network/request";
export default {
  name: "Comment",
  data() {
    return {
      userInfo: {},
      comment: [],
      count:0,
      content:''
    };
  },
  props: ["article"],
  components: {
    ReplyComment
  },
  methods: {
    getUseInfo() {
      request
        .get("/user/" + localStorage.getItem("id"))
        .then(res => {
          this.userInfo = res.data[0];
        })
        .catch(err => {
          console.log(err);
        });
    },
    judgeUser() {
      if (
        !this.userInfo &&
        !localStorage.getItem("token") &&
        !localStorage.getItem("id")
      ) {
        this.$toast.fail("请先登录");
      }
    },
    submitComment() {
          if (
        !this.userInfo &&
        !localStorage.getItem("token") &&
        !localStorage.getItem("id")
      ) {
        this.$toast.fail("请先登录");
      } else {
        this.$emit('submitComment',this.content)
      }
    },
    getCommentInfo() {
      request
        .get("/comment/" + this.$route.params.id)
        .then(res => {
          let resArr = res.data;
          //对返回来的数据进行数据结构处理
          function dealComment(temp) {
            let arr = [];
            for (let item of resArr) {
              //如果是评论的回复就push到对应评论的回复数组中
              if (item.parent_id == temp) {
                arr.push(item);
                item.child = dealComment(item.comment_id);
              }
            }
            return arr;
          }
          this.comment = dealComment(null);
          console.log(this.comment);
          this.countComment()
        })
        .catch(err => {
          console.log(err);
        });
    },
    //计算评论数
    countComment() {
        let len = this.comment.length
        for(let item of this.comment){
            len += item.child.length
            let childArr =item.child
            for(let item of childArr){
                len += item.child.length
            }
        }
        this.count = len
    }
  },
  created() {
    if (localStorage.getItem("id") && localStorage.getItem("token")) {
      this.getUseInfo();
      this.getCommentInfo();
    } else {
      this.getCommentInfo();
    }
  }
};
</script>

<style lang="less">
.comment {
  margin-top: 4vw;
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
  .comment-detail {
    position: relative;
    margin-top: 2vw;
    clear: both;
    .first-li{
      display: block;
      padding: 3.2vw 0;
      border-top: 1px solid #eee;
      .comment_userimg {
        position: absolute;
        text-align: center;
        width: 8vw;
        height: 8vw;
        float: left;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .comment-title {
        margin-left: 12vw;
        .comment_username {
          color: #757575;
          font-size: 3.46667vw;
          flex: 1;
          vertical-align: middle;
        }
        .comment_date {
          margin-top: 1.8vw;
          font-size: 3.2vw;
          height: 3.2vw;
          line-height: 3.2vw;
          color: #999;
        }
      }
      .comment-content {
        margin-left: 12vw;
        margin-top: 2.4vw;
        font-size: 3.46667vw;
        color: #212121;
        white-space: pre-line;
        word-break: break-word;
      }
    }
  }
}
</style>
