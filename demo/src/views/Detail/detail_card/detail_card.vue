<template>
  <div @click="likesCard">
    <div class="detail_card">
      <div class="i">
        <img :src="item.uImg" alt="">
      </div>
      <div class="a">{{item.title}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    item:{
      type:Object,
      default:{}
    }
  },
  data() {
    return {

    }
  },
  methods: {
    likesCard(){
      // console.log(this.item.uid)
      this.$router.push({
        path:"/detail",
        query:{
          uid:this.item.uid
        }
      })
      location.reload()
      window.scrollTo(0,0)
    }
  },
}
</script>
<style lang="scss">
  .detail_card{
    font-size: 16px;
    margin: 20px 10px;
    .i {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
      width: 100px;
      height: 100px;
      }
    }
    .a {
      overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
    }
  }
</style>
