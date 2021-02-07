<template>
  <div class="forget">
      <h5>输入账号</h5>
      <div class="ipt">
        <span>手机号</span>
        <input type="tel" placeholder="请输入手机号" v-model="text"></div>
      <button @click="btn" :class="{Abtn:text}" :disabled="text?false:true" class="btn">下一步</button>
  </div>
</template>
<script>
export default {
  name:"phone",
  data() {
    return {
      text:"",
    }
  },
  computed:{

  },
  methods: {
    btn() {
      if (!/^1\d{10}$/.test(this.text)) {
        this.$toast({
          message: "请保证手机号正确"
        });
        return;
      }
      this.$store.dispatch("user/verifyPhone",this.text).then(()=>{
        this.$store.state.user.phone = this.text
        this.$router.push({name:"code"})
      }).catch(()=>{
        this.$toast({
          message:"手机号未注册，请先注册"
        })
      })
    }
  },

}
</script>
<style lang="scss">
.forget {
  position: relative;
  height: 1200px;
  z-index: 99;
  padding: 10px 20px;
  background-color: #fff;
  h5 {
    text-align: center;
    font-weight: 1000;
  }
  .ipt {
    width: 100%;
    height: 40px;
    border-bottom: 2px solid #eee;
    font-size: 24px;
    margin: 20px 0 30px;
    display: flex;
    span {
      flex: 3;
      flex-shrink: 0;
      // text-align: center;
    }
    input {
      flex:9;
      border: none;
      outline: none;
      vertical-align: middle;
    }
  }
  .btn {
    width: 100%;
    height: 50px;
    font-size: 24px;
    background-color: #eee;
    color: #ccc;
    border-radius: 10px;
    outline: none;
    border: none;
  }
  .Abtn {
    color: #fff;
    background-color: #b42d29;
  }
}
</style>
