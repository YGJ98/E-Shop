<template>
  <div>
    <router-view/>
    <tab>
      <tab-item path="/home">
        <van-icon name="wap-home-o" slot="icon" size="22"/>
        <van-icon name="wap-home-o" slot="iconActive" size="22" color="#b42d29"/>
        <div slot="text">首页</div>
      </tab-item>
      <tab-item path="/catory">
        <van-icon name="qr" slot="icon" size="22"/>
        <van-icon name="qr" slot="iconActive" size="22" color="#b42d29"/>
        <div slot="text">分类</div>
      </tab-item>
      <tab-item path="/car">
        <van-icon name="shopping-cart-o" slot="icon" size="22"/>
        <van-icon name="shopping-cart-o" slot="iconActive" size="22" color="#b42d29"/>
        <div slot="text">购物车</div>
      </tab-item>
      <tab-item path="/profile">
        <van-icon name="friends-o" slot="icon" size="22"/>
        <van-icon name="friends-o" slot="iconActive" size="22" color="#b42d29"/>
        <div slot="text">个人中心</div>
      </tab-item>
    </tab>
  </div>
</template>
<script>
import tab from "@/components/tab/tab";
import tabItem from "@/components/tab/tabItem";
export default {
  name: "App",
  components: {
    tab,
    tabItem
  },
};
</script>
<style lang="scss"></style>
