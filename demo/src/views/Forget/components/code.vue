<template>
  <div class="forget">
      <h5>验证手机</h5>
      <div class="msg">短信验证码已发送至：{{a}}</div>
      <div class="ipt">
        <span>验证码</span>
        <input type="tel" placeholder="请输入账号名" v-model="text">
        <div @click="send">{{CO?`${num}s`:`获取验证码`}}</div>
      </div>

      <button @click="btn" :class="{Abtn:text}" :disabled="text?false:true" class="btn">下一步</button>
  </div>
</template>
<script>
export default {
  name:"forget",
  data() {
    return {
      text:"",
      aa:this.$store.state.user.phone,
      num: 3,
      CO:false
    }
  },
  computed:{
    a:function() {
      // const a = aa.replace(/(\d{3})\d{4}(\d{2})/, '$1****$2')
      return this.aa.replace(/(.{3}).*(.{2})/, '$1******$2')
    }
  },
  methods: {
    btn() {
      this.$store.dispatch("user/verifyCode",this.text).then((res)=>{
        this.$router.push({name:"rest"})
      }).catch(()=>{
        this.text = ""
        this.$toast({
          message:"验证码错误，请重新输入"
        })
      })
    },
    send() {
      this.$store.dispatch("user/sendCode", this.aa).then(res => {
        if (parseInt(res.code) !== 200) {
          this.$toast({
            message: "网络繁忙，请稍后再试"
          });
          return;
        }
        console.log(res.data.text);
      });
      this.CO = true;
      let Timer = setInterval(() => {
        this.num--;
        if (this.num === 0) {
          clearInterval(Timer);
          this.CO = false;
          this.num = 60;
          return;
        }
      }, 1000);
    }
  },

}
</script>
<style lang="scss">
body {
  // background-color: #fff;
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
  .msg{
    font-size: 20px;
    padding-top: 20px;
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
      // text-align: center;
      font-size: 22px;
    }
    input {
      flex:5;
      width: 80%;
      padding-left: 10px;
      border: none;
      outline: none;
      vertical-align: middle;
    }
    div {
      flex:4;
      font-size: 20px;
      text-align: center;
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
}
</style>
