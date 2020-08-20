<template>
  <div id="home" class="home">
    <top-bar :userInfo="userInfo" style="position:sticky"/>
    <van-tabs v-model="active" title-active-color="#fb7299" color="#fb7299" swipeable sticky>
      <van-tab
        v-for="(item, index) in category"
        :key="index"
        :title="item.title"
      >
        <div class="detailPart">
          <detail class="detail"
            v-for="(categoryItem, categoryIndex) in item.list"
            :key="categoryIndex"
            :detailItem="categoryItem"
          />
        </div>
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
          categoryItem.list = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    GetCategoryItem() {
      return this.category[this.active];
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
