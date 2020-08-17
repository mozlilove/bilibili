<template>
  <div id="profile" class="profile">
      <top-bar/>
      <img src="~assets/img/bannerTop_new.png" alt="" class="background">
      <profile-details/>
  </div>
</template>

<script>
import TopBar from 'components/content/topbar/TopBar'
import ProfileDetails from './ProfileDetails'

import request from 'network/request'

export default {
    components:{
        TopBar,
        ProfileDetails
    },
    methods:{
        getUserInfo() {
            request('GET',[
                '/user/',
                {
                    params:{
                        id:localStorage.getItem('id')
                    }
                }   
            ]).then(res => {
                console.log(res);
            })
        }
    },
    created() {
        this.getUserInfo()
    }
}
</script>

<style>
.profile .background{
    width: 100%;
    height: 24vw;
    overflow: hidden;
}
</style>