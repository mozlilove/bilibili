<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name:'Tabbar'
}
</script>

<style>
.tabbar{
    display: flex;
    position: fixed;
    justify-content: space-around;
    bottom: 0;
    left: 0;
    background-color: #f6f6f6;
    box-shadow: 0 -1px 1px rgb(100, 100, 100,.2);
    width: 100%;
    height: 49px;
}
</style>