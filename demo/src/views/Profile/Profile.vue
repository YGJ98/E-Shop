<template >
  <div>
    <div class="bc">
      <h4>个人中心</h4>
      <div class="bc-ico"><van-icon name="setting-o" size="22"/></div>
      <div class="userInfo">
        <div class="userImg"></div>
        <div class="user-right">
          <div class="userTep">177*****455</div>
          <div class="userText">升级权益></div>
        </div>
      </div>
    </div>
    <div class="pcard">
      <div class="pmember">
        银行卡联名卡，办卡得Super
      </div>
      <div class="porder">
        <div class="porder-title">
          <div>我的订单</div>
          <div>查看更多></div>
        </div>
        <ul>
          <li>
            <div class="porder-ico"><van-icon name="credit-pay" size="22" /></div>
            <div>待发货</div>
          </li>
          <li>
            <div class="porder-ico"><van-icon name="logistics" size="22"/></div>
            <div>待收货</div>
          </li>
          <li>
            <div class="porder-ico"><van-icon name="refund-o" size="22"/></div>
            <div>退换货</div>
          </li>
          <li>
            <div class="porder-ico"><van-icon name="completed" size="22"/></div>
            <div>历史清单</div>
          </li>
        </ul>
      </div>
      <div class="btn">
        <button @click="out">退出登录</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      token: localStorage.getItem("token")
    }
  },
  created() {
    if(!this.token) {
      this.$router.replace({path:"/login"})
    }
  },
  methods: {
    out() {
      this.$store.dispatch("user/Loginout").then(()=>{
        this.$toast({
          message:"退出成功"
        })
        this.$router.push({path:"name"})
      })
    }
  },

}
</script>
<style lang="scss">
  .bc {
    position: relative;
    height: 300px;
    background-color: #B42F2B;
    .bc-ico {
      position: absolute;
      right: 10px;
      top: 10px;
    }
    h4{
      text-align: center;
      padding-top: 10px;
      font-size: 24px;
    }
    .userInfo {
      display: flex;
      padding: 15px;
      .userImg {
        width: 80px;
        height: 80px;
        background-color: #fff;
        border-radius: 50%;
        padding-left: 10px;
      }
      .user-right{
        display: flex;
        flex-direction: column;
        font-size: 22px;
        padding-left: 25px;
        .userTep {
          flex: 1;
        }
        .userText{
          flex: 1;
          background-color: rgba($color: #000000, $alpha: .15);
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          border-radius: 20px;
          font-size: 16px;
        }
      }
    }
  }
  .pcard {
    padding: 20px;
    .pmember {
      position: relative;
      bottom: 40px;
      width: 100%;
      height: 70px;
      background-color: #fff;
      border-radius: 10px;
      text-align: center;
      line-height: 70px;
      font-size: 20px;
    }
    .porder {
      height: 250px;
      background-color: #fff;
      border-radius: 10px;
      .porder-title {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        font-size: 20px;
      }
      ul {
        display: flex;
        padding: 25px;
        font-size: 20px;
        li {
          width: 25%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          div:nth-child(1) {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 15px;
          }
        }
      }
    }
  }
  .btn {
    display: flex;
    justify-content: center;
    padding: 20px;
    button {
      width: 100%;
      background-color: #B42F2B;
      color: #fff;
      border: 0 none;
      margin-top: 20px;
      border-radius: 10px;
      font-size: 20px;
      padding: 10px 15px;
      margin: 20px auto;
    }
    button:hover {
      background-color: red;
      color: #fff;
    }
  }
</style>
