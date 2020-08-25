<template>
  <div class="search">
    <div class="search-bar">
      <form class="input-area">
        <img src="~assets/img/search.svg" />
        <input type="search" placeholder="你想找些什么呐?" />
      </form>
      <span class="cancle" @click="$router.back()">取消</span>
    </div>

    <div class="hot-search">
      <h2 class="title">大家都在搜</h2>
      <ul class="hot-search-items">
        <li v-for="(item,index) in hotwords" :key="index">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchPage",
  data() {
    return {
      hotwords:['七夕青蛙','恋爱循环','测试数据1','测试数据2','测试','测试数','测试数据word']
    }
  }
};
</script>

<style lang="less">
.search-bar {
  height: 11.73333vw;
  padding: 0 3.2vw;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  .input-area {
    margin-top: 1.86667vw;
    height: 8vw;
    width: 88%;
    line-height: 8vw;
    padding: 0 3.2vw;
    background: #f4f4f4;
    border-radius: 0.53333vw;
    display: inline-block;
    img {
      width: 6vw;
      height: 6vw;
      vertical-align: middle;
      margin-right: 2vw;
    }
    input {
      font-size: 3.46667vw;
      color: #505050;
      border: none;
      background: transparent;
      width: fit-content;
    }
  }
  .cancle {
    font-size: 4vw;
    color: #fb7299;
    float: right;
    line-height: 11.73333vw;
  }
}
.hot-search{
  margin-top: 11.73333vw;
  padding: 2vw 3.2vw;
  background: #fff;
  h2{
    color: #999;
    font-size: 3.73333vw;
    font-weight: 400;
  }
  .hot-search-items{
    display: flex;
    flex-wrap: wrap;
    li{
      display: inline-block;
      font-size: 3.46667vw;
      line-height: 8.8vw;
      height: 9vw;
      color: #505050;
      border: 1px solid #ccc;
      border-radius: 4.5vw;
      margin-right: 2.66667vw;
    margin-top: 3.2vw;
    padding: 0 3.2vw;
    }
  }
}
</style>
