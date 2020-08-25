<template>
  <div id="home" class="home">
    <top-bar style="position:sticky" />

    <div class="category">
      <div class="categorySetting" @click="$router.push('/editCategory')">
        <img class="setting-ico" src="~assets/img/setting.svg" />
      </div>

      <van-tabs
        v-model="active"
        title-active-color="#fb7299"
        color="#fb7299"
        swipeable
        sticky
      >
        <van-tab
          v-for="(item, index) in category"
          :key="index"
          :title="item.title"
          style="padding: 0 3.2vw"
        >
          <van-list
            v-model="item.loading"
            :finished="item.finished"
            finished-text="我也是有底线的(゜-゜)つロ"
            @load="onLoad"
            immediate-check
          >
            <div class="detailPart">
              <detail
                class="detail"
                v-for="(categoryItem, categoryIndex) in item.list"
                :key="categoryIndex"
                :detailItem="categoryItem"
              />
            </div>
          </van-list>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
const TopBar = () => import("components/content/topbar/TopBar");
const Detail = () => import("./Detail");

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
      if (localStorage.getItem("selectedCategory")) {
        return;
      }
      request
        .get("/category")
        .then(res => {
          this.changeCategory(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    changeCategory(data) {
      this.category = data.map((item, index) => {
        item.list = [];
        item.page = 0;
        item.pageSize = 10;
        item.finished = false;
        item.loading = false;
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
          categoryItem.loading = false;
          if (res.data.length < categoryItem.pageSize) {
            categoryItem.finished = true;
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
      const categoryItem = this.GetCategoryItem();
      setTimeout(() => {
        categoryItem.page += 1;
        this.selectArticle();
      }, 1000);
    }
  },
  watch: {
    active() {
      this.selectArticle();
    }
  },
  created() {
    this.getCategory();
  },
  //由于首页使用了keep-alive缓存，首次创建后不再销毁，所以在activatied中判断
  activated() {
    if (localStorage.getItem("selectedCategory")) {
      this.changeCategory(JSON.parse(localStorage.getItem("selectedCategory")));
      console.log(this.category);
      this.selectArticle();
      return;
    }
  }
};
</script>

<style lang="less">
.category {
  position: relative;
  .categorySetting {
    position: absolute;
    width: 10vw;
    height: 8.89vw;
    text-align: right;
    align-content: center;
    right: 0;
    background-color: #fff;
    z-index: 999;
    padding-right: 3.2vw;
    img {
      width: 6vw;
      height: 6vw;
      vertical-align: middle;
      margin-top: 1vw;
    }
  }
  .detailPart {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .detail {
      width: 45%;
      margin-top: 3.2vw;
    }
  }
}
</style>
