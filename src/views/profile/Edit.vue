<template>
  <div class="edit">
    <top-bar />
    <div class="edit-part">
      <edit-input>
        <span slot="left">头像</span>
        <img slot="right" src="~assets/img/default_img.jpg" />
      </edit-input>
      <edit-input>
        <span slot="left">昵称 </span>
        <span slot="right">{{userInfo.name}}</span>
      </edit-input>
      <edit-input>
        <span slot="left">账号</span>
        <span slot="right">{{userInfo.username}}</span>
      </edit-input>
      <edit-input>
        <span slot="left">性别</span>
        <span v-if="userInfo.gender" slot="right">{{userInfo.gender}}</span>
        <span v-else slot="right">未设置</span>
      </edit-input>
      <edit-input>
        <span slot="left">个性签名</span>
        <span v-if="userInfo.user_desc" slot="right">{{userInfo.user_desc}}</span>
        <span slot="right">未设置</span>
      </edit-input>
    </div>
  </div>
</template>

<script>
import TopBar from "components/content/topbar/TopBar";
import EditInput from "components/common/input/EditInput";

import request from "network/request"

export default {
  name: "Edit",
  data() {
      return {
          userInfo:{}
      }
  },
  components: {
    TopBar,
    EditInput
  },
  methods:{
      getInfo() {
          request.get('/user/'+ localStorage.getItem('id'))
          .then(res => {
              this.userInfo  = res.data[0]
          })
      }
  },
  created() {
      this.getInfo()
  }
}
</script>

<style>
.edit-part{
    border-top: 3vw solid #eee;
}
</style>
