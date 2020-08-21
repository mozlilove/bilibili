<template>
  <div id="detail" @click="pathPush">
    <div class="card">
        <img :src="detailItem.img" alt="">
        <div class="count">
            <span class="icon">
            <van-icon  name="video-o" />
            262w
            </span>
            <span class="icon">
            <van-icon  name="comment-o" />
            1150
            </span>
        </div>
  
    </div>
      <span class="title">{{detailItem.name}}</span>
  </div>
</template>

<script>
export default {
    name:'Detail',
    props:['detailItem'],
    methods:{
        pathPush () {
            this.$router.push('/article/'+ this.detailItem.id)
        }
    }
}
</script>

<style lang="less">
.card{
    position: relative;
    .count {
    position: absolute;
    bottom: 0;
    display: flex;
    font-size: 3.2vw;
    color: #e7e7e7;
    padding: 1.333vw 1.6vw;
    width: 100%;
    justify-content: space-between;
    background: linear-gradient(0deg,rgba(0,0,0,.85),transparent);
        .icon{
            display: flex;
            justify-content: space-between;
            i{
                margin-right: 1vw;
            }
        }
    }
    
}
.card img{
    width: 100%;
    height: 100%;
    border-radius: 10%;
}
.title {
    font-size: 3.333vw;
}
</style>