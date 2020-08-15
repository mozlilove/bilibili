<template>
    <div id="recommond" class="recommond">
        <div v-for="item in recommond" class="recommond-item">
            <a :href="item.link">
                <div class="img">
                    <img :src="item.src" alt="">
                </div>
                <div class="title">{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name:'HomeRecommond',
    props:{
        recommond:{
            type:Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style>
.recommond{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: center;
    padding:10px 0 15px 0;
    border-bottom: 8px solid #eee;
}
.img{
    position:relative;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #aaa;
    text-align: center;
    vertical-align: middle;
    margin-bottom: 10px;
}
.recommond-item img{
    position: absolute;
    width: 40px;
    height: 40px;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}
</style>