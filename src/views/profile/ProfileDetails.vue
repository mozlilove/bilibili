<template>
  <div class="profileDetails">
    <div class="part1">
      <!--头像-->
      <div class="avatar">
        <img v-if="userInfo.user_img" :src="userInfo.user_img" alt=""/> 
        <img v-else src="~assets/img/head_img.jpg" alt="" />
      </div>
      <!--个人粉丝、关注和获赞，以及编辑按钮-->
      <div class="info">
        <div class="info-data">
          <span class="data-item" v-for="item in InfoData">
            <span class="count">{{ item.num }}</span>
            <span class="type">{{ item.type }}</span>
          </span>
        </div>
        <div class="follow-btn">
          <button class="info-edit" @click="$router.push('/edit')">
            编辑资料
          </button>
        </div>
      </div>
    </div>
    <div class="part2">
      <!--个人信息：昵称，性别，等级-->
      <div class="base">
        <span class="nickname">{{ userInfo.name }}</span>
        <span class="sex"></span>
        <span class="level"></span>
      </div>
      <!--签名-->
      <span class="motto" v-if="userInfo.user_desc">
        {{userInfo.user_desc}}
      </span>
      <span class="motto" v-else>
        这个人很神秘，神秘都没有写
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileDetails",
  data() {
    return {
      InfoData: [
        {
          num: 50,
          type: "粉丝"
        },
        {
          num: 1,
          type: "关注"
        },
        {
          num: 54050,
          type: "获赞"
        }
      ]
    };
  },
  props: ["userInfo"]
};
</script>

<style>
.part1 {
  display: flex;
  background-color: #fff;
  padding: 0 3.2vw;
}
.avatar {
  position: relative;
  width: 22.4vw;
  height: 22.4vw;
  margin-right: 3vw;
}
.avatar img {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  margin-top: -2vw;
}
.info {
  flex: 1;
  padding: 2vw 0 0 4vw;
  color: #e7e7e7;
}
.info-data {
  display: flex;
  margin-right: -0.133vw;
}
.data-item {
  display: inline-block;
  flex: 1;
  text-align: center;
  border-right: 1px solid #e7e7e7;
}
.count {
  font-size: 3.7vw;
  color: #212121;
  line-height: 3.4vw;
}
.type {
  display: block;
  font-size: 3vw;
  color: #999;
}
.follow-btn {
  display: block;
}
.follow-btn button {
  width: 100%;
  height: 8vw;
  border-radius: 1vw;
  font-size: 3.778vw;
  margin-top: 3.2vw;
  background-color: #fb7299;
  color: #fb7299;
  background: #fff;
  border: 0.133vw solid #fb7299;
}
.part2 {
  background-color: #fff;
  padding: 0 3.2vw;
  border-bottom: 1px solid #e7e7e7;
}
.base {
  display: block;
  margin-top: 2.8vw;
}
.nickname {
  display: inline-block;
  font-size: 4.8vw;
  color: #212121;
  vertical-align: middle;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.motto {
  display: inline-block;
  height: 4.5vw;
  margin: 2.2vw 0;
  color: #999;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
