<template>
  <div class="article" v-if="article">
    <top-bar/>

    <div class="video">
      <video width="100%" controls="controls" :src="article.content" />
    </div>
    <div class="article-Info">
      <div class="title">
        <div class="left">
          <span class="category">{{ article.category.title }}</span>
          <span class="name">{{ article.name }}</span>
        </div>
        <div class="right">
          <van-icon name="arrow-down" />
        </div>
      </div>

      <div class="data">
        <span class="user">{{ article.userinfo.name }}</span>
        <span class="play">2549.5w观看</span>
        <span class="dmcount">{{
          article.commentlen * Math.floor(Math.random()*10000+1)
        }}弹幕</span>
        <span class="date">{{ article.date }}</span>
      </div>
    </div>

    

    <div class="recommend">
        <detail class="detail" v-for="(item ,index) in recommend"  :key="index" :detailItem="item" />
    </div>

    <comment :article="article"></comment>
  </div>
</template>

<script>
import TopBar from "components/content/topbar/TopBar";
import Comment from "components/content/comment/Comment";
import Detail from 'views/home/Detail'

import request from "network/request";
export default {
  name: "Article",
  data() {
    return {
      article: null,
      recommend:[]
    };
  },
  components: {
    TopBar,
    Detail,
    Comment
  },
  methods: {
    //获取信息
    getArticle() {
      request
        .get("/article/" + this.$route.params.id)
        .then(res => {
          console.log(res.data[0]);
          this.article = res.data[0];
        })
        .catch(err => {});
    },
    getRecommend() {
        request.get(
            '/commend'
        ).then(res => {
            this.recommend = res.data
        }).then(err => {

        })
    }
  },
  watch:{
      $route() {
          this.getArticle();
          this.getRecommend();
      }
  },
  created() {
    this.getArticle();
    this.getRecommend();
  }
}
</script>

<style lang="less">
.article {
  background-color: #fff;
}
.video {
  width: 100%;
}
.article-Info {
  margin-top: 4vw;
  padding: 0 3.2vw;
  .title {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding-bottom: 2vw;
    .left {
      display: flex;
      justify-content: space-around;
      width: 80%;
    }
    .category::before {
      display: inline-block;
      content: "";
      height: 100%;
      vertical-align: middle;
    }
    .category {
      display: inline-block;
      line-height: 3vw;
      padding: 0 1.6vw;
      margin-right: 2vw;
      border-radius: 3.2vw;
      font-size: 3vw;
      color: #fb7299;
      background-color: #f4f4f4;
    }
    .name {
      font-size: 4.26667vw;
      font-weight: 400;
      display: inline-block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      color: #212121;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 80%;
      height: 6.4vw;
      line-height: 6.4vw;
    }
  }
  .data {
    display: flex;
    justify-content: space-around;
    font-size: 3.2vw;
    color: #999;
    padding-bottom: 2vw;
  }
}
.recommend{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
     .detail {
        width: 45%;
        margin-top: 3.2vw;
    }
}
</style>
