<template>
  <div id="editCategory" class="editCategory">
    <top-bar />
    <van-divider
      :style="{ color: '#fb7272', borderColor: '#fb7272', padding: '0 16px' }"
      dashed
    >
      已选分类
    </van-divider>
    <ul class="category-selected">
      <li v-for="(item, index) in selectedCategory" :key="index" @click="deleteItem(index)">
        {{ item.title }}
      </li>
    </ul>
    <van-divider
      :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
      dashed
    >
      未选分类
    </van-divider>
    <ul class="category-deleted">
      <li v-for="(item, index) in deletedCategory" :key="index" @click="addItem(index)">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
const TopBar = () => import("components/content/topbar/TopBar");

import request from "network/request";

export default {
  name: "EditCategory",
  data() {
    return {
      selectedCategory: [],
      deletedCategory: []
    };
  },
  components: {
    TopBar
  },
  methods: {
    getCategory() {
      request.get("/category").then(res => {
        this.selectedCategory = res.data;
      });
    },
    deleteItem(index) {
        // console.log(index);
        if(this.selectedCategory.length < 4 ){
            return
        }
        this.deletedCategory.push(this.selectedCategory[index])
        this.selectedCategory.splice(index,1)
    },
    addItem(index) {
        this.selectedCategory.push(this.deletedCategory[index])
        this.deletedCategory.splice(index,1)
    }
  },
  watch:{
      selectedCategory() {
          localStorage.setItem('selectedCategory',JSON.stringify(this.selectedCategory))
      },
      deletedCategory() {
          localStorage.setItem('deletedCategory',JSON.stringify(this.deletedCategory))
      }
  },
  created() {
      if(localStorage.getItem('selectedCategory')&&localStorage.getItem('deletedCategory')){
          this.selectedCategory = JSON.parse(localStorage.getItem('selectedCategory')) 
          this.deletedCategory = JSON.parse(localStorage.getItem('deletedCategory')) 
          return 
      }
      this.getCategory();
  }
};
</script>

<style lang="less">
.category-selected {
  display: flex;
  flex-wrap: wrap;
  padding: 0 3.2vw;
  li {
    display: inline-block;
    border: 1px solid #fb7272;
    color: #fb7272;
    text-align: center;
    vertical-align: middle;
    width: 20%;
    line-height: 8vw;
    margin: 0 2.5% 2vw 2.5%;
  }
}
.category-deleted {
  display: flex;
  flex-wrap: wrap;
  padding: 0 3.2vw;
  li {
    display: inline-block;
    border: 1px solid #1989fa;
    color: #1989fa;
    text-align: center;
    vertical-align: middle;
    width: 20%;
    line-height: 8vw;
    margin: 0 2.5% 2vw 2.5%;
  }
}
</style>
