<template>
  <div>
    <div class="button" :style="{width:width,height:height}">
      {{btnText}}
    </div>
  </div>
</template>

<script>
export default {
  name: "DiyButton",
  props: ['btnText','width','height'],
  methods:{
  }
};
</script>

<style>
.button {
  color: white;
  background-color: #ff9db5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4.444vw;
  border-radius: 6.25vw;
}
</style>
