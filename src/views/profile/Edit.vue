<template>
  <div class="edit">
    <top-bar :userInfo="userInfo"/>
    <div class="edit-part">
      <div class="uploaderFile">
        <van-uploader
          class="uploaderImg"
          preview-size="100vw"
          :after-read="afterRead"
        />
        <edit-input>
          <span slot="left">头像</span>
          <img slot="right" v-if="userInfo.user_img" :src="userInfo.user_img" />
          <img slot="right" v-else src="~assets/img/default_img.jpg" />
        </edit-input>
      </div>

      <edit-input @InputClick="nickNameShow = true">
        <span slot="left">昵称 </span>
        <span slot="right">{{ userInfo.name }}</span>
      </edit-input>

      <edit-input>
        <span slot="left">账号</span>
        <span slot="right">{{ userInfo.username }}</span>
      </edit-input>

      <edit-input @InputClick="genderShow = true">
        <span slot="left">性别</span>
        <span 
        v-if="userInfo.gender" 
        slot="right">
        {{ userInfo.gender == 1?'男':'女' }}
        </span>
        <span v-else slot="right">未设置</span>
      </edit-input>

      <edit-input @InputClick="mottoShow = true">
        <span slot="left">个性签名</span>
        <span v-if="userInfo.user_desc" slot="right">{{
          userInfo.user_desc
        }}</span>
        <span v-else slot="right">未设置</span>
      </edit-input>
    </div>

    <div class="back" @click="$router.back()">
      返回个人中心
    </div>

    <van-dialog 
    v-model="nickNameShow" 
    title="昵称" 
    show-cancel-button 
    @confirm="NameConfirm"
    >
      <van-field v-model="nickName" autofocus="" />
    </van-dialog>

    <van-action-sheet 
    v-model="genderShow" 
    :actions="gender"
    cancel-text="取消" 
    @select="onSelect" />

    <van-dialog 
    v-model="mottoShow" 
    title="个性签名" 
    show-cancel-button 
    @confirm="MottoConfirm"
    >
      <van-field v-model="motto" type="textarea" autofocus="" />
    </van-dialog>
  </div>
</template>

<script>
import TopBar from "components/content/topbar/TopBar";
import EditInput from "components/common/input/EditInput";

import request from "network/request";

export default {
  name: "Edit",
  data() {
    return {
      userInfo: {},
      mottoShow:false,
      genderShow:false,
      nickNameShow:false,
      nickName:'',
      gender: [{ name: '男' ,val: 1}, { name: '女' ,val: 2}],
      motto:''
    };
  },
  components: {
    TopBar,
    EditInput
  },
  methods: {
    getInfo() {
      request.get("/user/" + localStorage.getItem("id")).then(res => {
        this.userInfo = res.data[0];
      });
    },
    afterRead(file) {
      const formData = new FormData();
      formData.append("file", file.file);
      //发送头像图片
      request
        .post("/upload", formData)
        .then(res => {
          //返回图片地址
          this.userInfo.user_img = res.data.url;
          this.updateData();
        })
        .catch(err => {});
    },
    //更新用户信息
    updateData() {
      request
        .post("/update/" + localStorage.getItem("id"), this.userInfo)
        .then(res => {
          if(res.data.code == 200){
            this.$toast.fail('修改成功')
          }else{
            this.$toast.fail('修改失败')
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //用户输入昵称后点击确认
    NameConfirm() {
      this.userInfo.name = this.nickName
      this.updateData()
    },
    //用户输入签名后点击确认
    MottoConfirm() {
      this.userInfo.user_desc = this.motto
      this.updateData()
    },
    //用户选择性别之后
    onSelect(data) {
      this.userInfo.gender = data.val
      this.updateData()
      this.genderShow = false
    }
  },
  created() {
    this.getInfo();
  }
};
</script>

<style spoced lang="less">
.edit-part {
  margin-top: 3vw;
}
.uploaderFile {
  position: relative;
  overflow: hidden;
  .uploaderImg {
    position: absolute;
    opacity: 0;
  }
}
.back{
  display: inline-block;
  width: 100%;
  text-align: center;
  background-color: #fff;
  padding: 5vw 0;
  margin-top: 3vw;
  border-bottom: 1px;
}
</style>
