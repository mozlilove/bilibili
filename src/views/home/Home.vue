<template>
  <div id="home" class="home">
    <top-bar style="position:sticky"/>
    <van-tabs v-model="active" title-active-color="#fb7299" color="#fb7299" swipeable sticky>
      <van-tab
        v-for="(item, index) in category"
        :key="index"
        :title="item.title"
      >
      <van-list
        v-model="item.loading"
       :finished="item.finished"
       finished-text="我也是有底线的(゜-゜)つロ"
       @load="onLoad"
       immediate-check
      >
        <div class="detailPart">
          <detail class="detail"
            v-for="(categoryItem, categoryIndex) in item.list"
            :key="categoryIndex"
            :detailItem="categoryItem"
        />
        </div>
      </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import TopBar from "components/content/topbar/TopBar";
import Detail from "./Detail";

import request from "network/request";
export default {
  name: "Home",
  data() {
    return {
      userInfo: {},
      category: [],
      active: 0
    };
  },
  components: {
    TopBar,
    Detail
  },
  methods: {
    getCategory() {
      request.get("/category").then(res => {
        this.changeCategory(res.data);
      });
    },
    changeCategory(data) {
      this.category = data.map((item, index) => {
        item.list = [];
        item.page = 0;
        item.pageSize = 10;
        item.finished =false
        item.loading = false
        return item;
      });
    },
    selectArticle() {
      const categoryItem = this.GetCategoryItem();
      request
        .get("/detail/" + categoryItem._id, {
          params: {
            page: categoryItem.page,
            pagesize: categoryItem.pageSize
          }
        })
        .then(res => {
          categoryItem.list.push(...res.data);
          categoryItem.loading = false
          if(res.data.length < categoryItem.pageSize) {
            categoryItem.finished = true
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    GetCategoryItem() {
      return this.category[this.active];
    },
    onLoad() {
      const categoryItem =  this.GetCategoryItem()
      setTimeout(() =>  {
        categoryItem.page += 1
      this.selectArticle()
      },1000)
    }
  },
  watch: {
    active() {
      this.selectArticle();
    }
  },
  created() {
    this.getCategory();
  }
};
</script>

<style lang="less">
.detailPart{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .detail {
        width: 45%;
        margin-top: 3.2vw;
    }
}
</style>
