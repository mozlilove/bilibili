<template>
  <div class="topBar" :style="{'background-color':color}">
      <div class="left">
            <slot name="left"></slot>
      </div>
      <div class="center">
            <slot name="center"></slot>
      </div>
      <div class="right">
            <slot name="right"></slot>
      </div>
  </div>
</template>

<script>
export default {
    name:'TopBar',
    props:{
        color:{
            type:String,
            default() {
                return 'pink'
            }
        }
    }
}
</script>

<style>
.topBar{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    font-size: 16px/360*100;
}
.left .right{
    width: 60px;
}
.center {
    flex: 1;
}
</style>