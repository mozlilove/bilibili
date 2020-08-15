<template>
    <Tabbar>
    <TabbarItem path="/home" activeColor="skyblue">
      <img slot="item-icon" src="~assets/img/tabbar/home-off.png" alt="">
      <img slot="item-icon-active" src="~@/assets/img/tabbar/home-on.png" alt="">
      <div slot="item-text">首页</div>
    </TabbarItem>
    <TabbarItem path="/category" activeColor="skyblue">
      <img slot="item-icon" src="~assets/img/tabbar/category-off.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/category-on.png" alt="">
      <div slot="item-text">分类</div>
    </TabbarItem>
    <TabbarItem path="/cart" activeColor="skyblue">
      <img slot="item-icon" src="~assets/img/tabbar/cart-off.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/cart-on.png" alt="">
      <div slot="item-text">购物车</div>
    </TabbarItem>
    <TabbarItem path="/profile" activeColor="skyblue">
      <img slot="item-icon" src="~assets/img/tabbar/user-off.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/user-on.png" alt="">
      <div slot="item-text">我的</div>
    </TabbarItem>
  </Tabbar>
</template>

<script>
import Tabbar from 'components/common/tabbar/Tabbar.vue';
import TabbarItem from 'components/common/tabbar/TabbarItem.vue';
export default {
    name:'MainTabbar',
    components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style>

</style>