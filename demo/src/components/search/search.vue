<template>
  <div>
    <div :class="{s:isScroll}" class="search">
      <div class="fenlei" @click="fenlei">
        <van-icon name="qr" size="22"/>
        <div>分类</div>
      </div>
      <div class="van">
        <van-search v-model="value" shape="round" background="#b42d29" placeholder="请输入搜索关键词" class="van-s" @focus="onFocus"/>
      </div>
      <div class="login" @click="login">
        <van-icon name="contact" size="22"/>
        <div>{{token?`我的`:`登录`}}</div>
      </div>
    </div>
    <div v-if="isScroll
    " :style="{height:52 + 'px'}"></div>
  </div>
</template>
<script>
export default {
  name:"search",
  props: {
    isScroll: {
      type: Boolean
    }
  },
  data() {
    return {
      value: "",
      token: localStorage.getItem("token")
    }
  },
 methods: {
   onFocus() {
     this.$router.push({name:"search"})
   },
   fenlei() {
     this.$router.push({name:"catory"})
   },
   login() {
     console.log("wwww")
     if(this.token) {
       this.$router.push({name: "profile"})
     } else {
       this.$router.push({name: "login"})
     }
   }
},
}
</script>
<style lang="scss">
  body {
    background-color: #fff;
    .s{
      position: fixed;
      top: 0;
    }
    .search {

      width: 100%;
      height: 50px;
      z-index: 99;
      display: flex;
      background-color: #b42d29;
      font-size: 18px;
      padding: 10px 0;
      .fenlei,.login{
        flex:1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
      }
      .van {
        flex: 8;
        display: flex;
        align-items: center;
        .van-s {
          width: 100%;
          height: 50px;
        }
      }
    }
  }
</style>
