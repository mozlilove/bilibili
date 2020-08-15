<template>
  <swiper>
      <slide v-for="(item,key) in swiper">
          <a :href="item.id">
              <img :src="item.src" alt="">
          </a>
      </slide>
  </swiper>
</template>

<script>
import {Swiper,Slide} from 'components/common/swiper/index.js';
export default {
    name:'HomeSwiper',
    props:{
        swiper:{
            type:Array,
            default() {
                return []
            }
        }
    },
    components:{
        Swiper,
        Slide
    }
}
</script>

<style>

</style>