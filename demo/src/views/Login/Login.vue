<template>
  <div class="user">
    <div class="login">
      <div class="logo">
        <img src="@/assets/img/logo.png" alt="" />
        <div>欢迎来到小E商城</div>
      </div>
      <div v-if="!loginType">
        <div class="users">
          <div class="user">
            <label>
              <input
                type="text"
                placeholder="请输入手机号/用户名"
                v-model="userName"
              />
            </label>
          </div>
          <div class="pwd">
            <label>
              <input
                type="password"
                placeholder="请输入密码"
                v-model="password"
              />
            </label>
          </div>
        </div>
        <div class="text"><span @click="forget">忘记密码</span> <span @click="rest">立即注册</span></div>
      </div>
      <div v-else>
        <div class="users">
          <div class="user">
            <label>
              <input type="tel" placeholder="请输入手机号" v-model="phone" />
            </label>
          </div>
          <div :class="{ pdd: loginType }">
            <input type="num" placeholder="请输入验证码" v-model="Mcode" />
            <div class="md" @click="handleNum">
              {{ isCode ? `${num}s` : `获取验证码` }}
            </div>
          </div>
        </div>
      </div>
      <button @click="login">登录</button>
      <div class="type" @click="handleType">
        {{ loginType ? `账号密码登录` : `验证码登录` }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      loginType: false,
      isCode: false,
      num: 60,
      phone: "",
      Mcode: "",
      userName: "",
      password: "",
    };
  },
  methods: {
    handleType() {
      this.loginType = !this.loginType;
    },
    handleNum() {
      if (!/^1\d{10}$/.test(this.phone)) {
        this.$toast({
          message: "请保证手机号正确"
        });
        return;
      }

      this.$store.dispatch("user/sendCode", this.phone).then(res => {
        if (parseInt(res.code) !== 200) {
          this.$toast({
            message: "网络繁忙，请稍后再试"
          });
          return;
        }
        console.log(res.data.text);
      });
      this.isCode = true;
      let Timer = setInterval(() => {
        this.num--;
        if (this.num === 0) {
          clearInterval(Timer);
          this.isCode = false;
          this.num = 60;
          return;
        }
      }, 1000);
    },
    login() {
      let userInfo = null;
      if (this.loginType) {
        if (!/^\d{4}$/.test(this.Mcode) || this.code == "") {
          this.$toast({
            message: "请点击验证码，获取验证码信息"
          });
          return;
        }
        if (this.phone && this.Mcode) {
          userInfo = {
            type: 2,
            phone: this.phone,
            Mcode: this.Mcode
          };
          this.$store.dispatch("user/isLogin", userInfo).then(res => {
            this.$router.push({name:"home"});
          });
        }
      } else {
        // 密码登录
        if (this.userName == "") {
          this.$toast({
            message: "请输入登录名"
          });
          return;
        } else if (!/^\d{6}$/.test(this.password) || this.password == "") {
          this.$toast({
            message: "密码必须6-20位"
          });
        } else {
          userInfo = {
            type: 1,
            userName: this.userName,
            password: this.password
          };
          this.$store.dispatch("user/isLogin", userInfo).then(res => {
            // console.log(res);
             this.$router.push({name: 'home'})

          });
        }
      }
    },
    forget(){
      this.$router.push("/forget");
    },
    rest(){
      console.log(123)

    }
  }
};
</script>
<style lang="scss">
.user {
  position: relative;
  z-index:99;
  height: 1200px;
  background-color: #fff;
  .login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .logo {
      width: 100%;
      height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-size: 24px;
      img {
        width: 150px;
        height: 150px;
        margin-bottom: 15px;
      }
    }
    .users {
      .user,
      .pwd {
        width: 400px;
        height: 50px;
        margin-bottom: 15px;
        input {
          width: 100%;
          height: 100%;
          padding-left: 20px;
          border: none;
          border-bottom: 1px solid #999;
          // border-radius: 15px;
          outline: none;
          // background-color: #eee;
        }
      }
      .pdd {
        width: 400px;
        height: 50px;
        margin-top: 50px;
        display: flex;
        justify-content: space-between;
        .md {
          flex: 3;
          font-size: 18px;
          border: 1px solid #999;
          padding: 3px 5px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 15px;
          border-radius: 15px;
        }
        input {
          flex: 7;
          width: 100%;
          height: 100%;
          padding-left: 20px;
          border: none;
          border-bottom: 1px solid #999;
          outline: none;
        }
      }
    }
    .text {
      width: 400px;
      font-size: 20px;
      display: flex;
      justify-content: space-between;
      padding-top: 30px;
      span:nth-child(1) {
        color: #999;
      }
    }
    button {
      width: 400px;
      height: 60px;
      background-color: #b42d29;
      border-radius: 15px;
      border: none;
      outline: none;
      margin: 20px 0;
      color: #fff;
    }
    .type {
      font-size: 20px;
      padding: 10px;
    }
  }
}
</style>
