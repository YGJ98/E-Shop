<template>
  <div>
    <div class="card" @click="cardItem">
      <img :src="item.uImg" alt="">
      <div class="title">{{item.title}}</div>
      <div class="label">
        <span>秒杀</span>
        <span>包邮</span>
      </div>
      <div class="price">
        <span>￥</span>
        <span>{{item.sale_price}}</span>
        <span>{{uID}}评论</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"card",
  props:{
    item:{
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      uID: this.item.uid
    }
  },
  methods: {
    cardItem() {
      console.log("122")
      this.$router.push({
        path:"/detail",
        query:{
          uid:this.item.uid
        }
      })
    }
  },
}
</script>
<style lang="scss">
  .card {
    width: 220px;
    background-color: #fff;
    border-radius: 15px;
    font-size: 18px;
    img {
      width: 100%;
      height: 100%;
    }
    .title {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
    .label {
      span {
        font-size: 16px;
        border: 1px solid #b42d29;
        border-radius: 5px;
        padding: 3px 5px;
        margin: 5px;
      }
    }
    .price {
      padding:15px 0;
      span {
        margin: 5px;
      }
      span:nth-child(1) {
        color: red;
        margin-right: 0;
      }
      span:nth-child(2) {
        font-size: 22px;
        color: red;
      }
      span:nth-child(3) {
        color: #ccc;
      }
    }
  }
</style>
