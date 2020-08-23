<template>
  <div class="replyComment">
    <ul class="reply-comment-detail">
      <li v-for="(item, index) in replyComment" :key="index" class="second-li">
        <!--二级评论-->
        <div
          class="second-li-block"
          @click="replyClick(item.comment_id, item.userinfo.name)"
        >
          <span class="reply-comment_userimg">
            <img v-if="item.userinfo.user_img" :src="item.userinfo.user_img" />
            <img v-else src="~assets/img/default_img.jpg" alt="" />
          </span>
          <div class="reply-comment-title">
            <span class="reply-comment_username">{{
              item.userinfo.name ? item.userinfo.name : "匿名用户"
            }}</span>
            <p class="reply-comment_date">{{ item.comment_date }}</p>
          </div>
          <div class="reply-comment-content">
            <span v-if="temp">
              <span class="reply-target">
                回复
                <p>{{ item.parent_user_info.name }}</p>
                :
              </span>
              <span class="content">{{ item.comment_content }}</span>
            </span>
            <span v-else>
              <span class="content">{{ item.comment_content }}</span>
            </span>
          </div>
        </div>
         <!--递归调用自身，显示二级一下评论-->
          <reply-comment
            :replyComment="item.child"
            @childCommentId="getChildCommentId"
            :temp="true"
            style="padding-left:0"
          ></reply-comment>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ReplyComment",
  props: ["replyComment",'temp'],
  methods: {
    replyClick(id, name) {
      // console.log(id,name);
      this.$emit("replyCommentId", id, name);
      this.$emit('childCommentId',id,name)
    },
    getChildCommentId(id,name) {
      this.replyClick(id,name)
    }
  }
};
</script>

<style lang="less">
.replyComment {
  padding-left: 12vw;
  .reply-comment-detail {
    position: relative;
    margin-top: 2vw;
    clear: both;
    .second-li {
      display: block;
      width: 100%;
      padding-top: 3.2vw;
      border-top: 1px solid #eee;
      .reply-comment_userimg {
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
      .reply-comment-title {
        margin-left: 12vw;
        .reply-comment_username {
          color: #757575;
          font-size: 3.46667vw;
          flex: 1;
          vertical-align: middle;
        }
        .reply-comment_date {
          margin-top: 1.8vw;
          font-size: 3.2vw;
          height: 3.2vw;
          line-height: 3.2vw;
          color: #999;
        }
      }
      .reply-comment-content {
        margin: 2.4vw 0 3.2vw 12vw;
        font-size: 3.46667vw;
        color: #212121;
        white-space: pre-line;
        word-break: break-word;
            .reply-target {
              float: left;
              display: flex;
              flex-direction: row;
              color: #757575;
              font-size: 3.46667vw;
              p {
                padding: 0 1vw;
                color: #5090cc;
              }
            }
      }
    }
  }
}
</style>
