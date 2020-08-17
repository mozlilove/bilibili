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
    text-align: center;
    align-items: center;
}
.left .right {
    width: 30vw;
    float: right;
}
.center {
    flex: 1;
}
</style>