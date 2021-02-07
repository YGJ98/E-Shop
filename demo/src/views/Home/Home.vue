<template>
  <div ref="m">
    <search :isScroll="isScroll"/>
    <div class="swiper">
      <van-swipe :autoplay="3000" class="van">
        <van-swipe-item v-for="(image, index) in images" :key="index" :loop="false">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div v-if="isBack" @click="back" class="back">
      <van-icon name="back-top" size="24"/>
    </div>
    <div class="list">
      <ul>
        <li v-for="(item,index) in tabList" :key="index" @click="tabItem">
          <img :src="item.tabImg" alt="">
          <div>{{item.tabName}}</div>
        </li>
      </ul>
    </div>
    <div class="recommend">
      <h5 class="sheet">推荐榜单</h5>
      <div class="sheet-card">
        <ul>
          <li><sheet/></li>
          <li><sheet/></li>
          <li><sheet/></li>
        </ul>
      </div>
    </div>
    <likes />
  </div>
</template>
<script>
import search from "@/components/search/search"
import likes from "@/components/likes/likes"
import sheet from "./sheet/sheet"
export default {
  name:"home",
  data() {
    return {
      isScroll:false,
      isBack: false,
      images: [
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2620454139,3148326731&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1275594965,342116707&fm=26&gp=0.jpg',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg10.360buyimg.com%2Fcms%2Fg12%2FM00%2F08%2F18%2FrBEQYVNOJ0oIAAAAAALMc9nMRXEAAEiLQOoykoAAsyL924.jpg&refer=http%3A%2F%2Fimg10.360buyimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613742026&t=e8532d4f10f4721fd9d9a40e13168b9b'
      ],
      tabList:[]
    }
  },
  components: {
    search,
    likes,
    sheet
  },
  created() {
    this.$store.dispatch("home/tab").then(res=>{
      this.tabList = res.data
    })
  },
  mounted() {
    window.addEventListener("scroll",this.handlScroll)
  },
  destroyed() {
    window.removeEventListener("scroll",this.handlScroll)
  },
  methods: {
    tabItem() {
      this.$toast({
        message:"功能未开发，请联系开发人员"
      })
    },
    handlScroll() {
      const that = this
      let scroll_height =  document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;
      // console.log(scroll_height)
      scroll_height > 300? this.isScroll = true:this.isScroll=false
      scroll_height > 450? this.isBack= true:this.isBack=false
    },
    back() {
      const that = this
      document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop
    }
  },
}
</script>
<style lang="scss">
  body {
    background-color: #f7f7f7;
    box-sizing: border-box;
    .swiper {
      .van .van-swipe-item {
        width: 100%;
        height: 184px;
        img {
          width: 100%;
        }
      }
    }
    .back {
      position: fixed;
      bottom: 100px;
      right: 0;
      width: 60px;
      height: 60px;
      background-color: #fff;
      border-radius: 50%;
      padding: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0px 2px 2px 2px rgba($color: #000000, $alpha: .3);
      z-index: 99;
    }
    .list {
      padding: 0 15px 15px;
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        border-radius: 10px;
        li {
          width: 25%;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 18px;
          padding: 10px 0;
          img {
            width: 42px;
            height: 42px;
            padding: 10px 0;
          }
        }
      }
    }
    .recommend{
      padding: 15px;
      .sheet {
        text-align: left;
        color: #454545;
        font-size: 26px;
      }
      .sheet-card {
        ul {
          display: flex;
          justify-content: center;
          align-items: center;
          li {
            margin: 10px;
          }
        }
      }
    }
  }
</style>
