<template>
  <div class="tabbarItem"  @click="itemClick" :style="activeStyle">
      <slot v-if="!isActive" name="item-icon"></slot>
      <slot v-else name="item-icon-active"></slot>
      <slot name="item-text"></slot>
  </div>
</template>

<script>
export default {
    name:'TabbarItem',
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'#1296da'
      }
    },
    data(){
      return {

      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) != -1;
      },
      activeStyle() {
        return this.isActive?{color:this.activeColor}:{}
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path).catch(err => err);
      }
    }
}
</script>

<style>
.tabbarItem{
    flex: 1;
    text-align: center;   
}
.tabbarItem img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
}
</style>