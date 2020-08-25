<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepalive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepalive"/> 
    </div>
</template>

<script>
export default {
  name:'App'
}
</script>

<style>
@import "assets/css/base.css";
</style>
