<template>
  <div class="replyComment">
    <ul class="reply-comment-detail">
      <li v-for="(item, index) in replyComment" :key="index" class="second-li">
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
          {{ item.comment_content }}
        </div>
        <!--三级评论-->
        <ul class="third-reply-comment">
          <li
            v-for="(thirditem, index) in item.child"
            :key="index"
            class="third-li"
          >
            <span class="reply-comment_userimg">
              <img
                v-if="thirditem.userinfo.user_img"
                :src="thirditem.userinfo.user_img"
              />
              <img v-else src="~assets/img/default_img.jpg" alt="" />
            </span>
            <div class="reply-comment-title">
              <span class="reply-comment_username">{{
                thirditem.userinfo.name ? thirditem.userinfo.name : "匿名用户"
              }}</span>
              <p class="reply-comment_date">{{ thirditem.comment_date }}</p>
            </div>
            <div class="thidr-reply-comment-content">
              <span class="reply-target">
                回复
                <p>{{ thirditem.parent_user_info.name }}</p>
                :
              </span>
              <span class="content">{{ thirditem.comment_content }}</span>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ReplyComment",
  props: ["replyComment"]
};
</script>

<style lang="less">
.replyComment {
  margin-left: 12vw;
  .reply-comment-detail {
    position: relative;
    margin-top: 2vw;
    clear: both;
    .second-li {
      display: block;
      padding: 3.2vw 0;
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
      }
      .third-reply-comment {
        .third-li {
          padding-top: 3.2vw;
          border-top: 1px solid #eee;
          .thidr-reply-comment-content {
            display: flex;
            flex-direction: row;
            margin-top: 2.4vw;
            font-size: 3.46667vw;
            color: #212121;
            white-space: pre-line;
            word-break: break-word;
            .reply-target {
              display: flex;
              flex-direction: row;
              color: #757575;
              font-size: 3.46667vw;
              p {
                padding: 0 1vw;
                color: #5090cc;
              }
            }
            .content {
              padding-left: 2vw;
              white-space: pre-line;
               word-break: break-word;
            }
          }
        }
      }
    }
  }
}
</style>
