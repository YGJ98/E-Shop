<template>
  <div class="forget">
      <h5>重置密码</h5>
      <div class="ipt">
        <span>重置密码</span>
        <input type="password" placeholder="请输入账号名" v-model="text"></div>
      <button @click="btn" :class="{Abtn:text}" :disabled="text?false:true" class="btn">提交</button>
  </div>
</template>
<script>
export default {
  name:"phone",
  data() {
    return {
      text:""
    }
  },
  methods: {
    btn() {
      const updateCode = {
        phone:this.$store.state.user.phone,
        uCode:this.text
      }
      this.$store.dispatch("user/rest",updateCode).then((res)=>{
        this.$toast({
          message:"修改成功"
        })
        this.$router.push({name:"login"})
      })
    }
  },

}
</script>
<style lang="scss">
body {
  background-color: #fff;
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
    }
    input {
      flex:7;
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
    background-color:  #b42d29;
  }
}
}
</style>
