<template>
  <div>
    <div class="detail">
      <div class="Dback" @click="vback" v-if="isTop">
        <van-icon name="arrow-left" color="#fff"/>
      </div>
      <div class="top" v-else>
        <div class="top_left" @click="Tback"><van-icon name="arrow-left" /></div>
        <div class="top_right">
          <div @click="handleShop">商品</div>
          <div @click="handleCommit">评论</div>
          <div @click="handleDetail">详情</div>
          <div @click="handleRec">推荐</div>
        </div>
      </div>
      <van-goods-action class="tab">
        <van-goods-action-icon icon="chat-o" text="客服" @click="customer"/>
        <van-goods-action-icon icon="cart-o" text="购物车" badge="5" @click="car"/>
        <van-goods-action-icon icon="shop-o" text="店铺" @click="shop"/>
        <van-goods-action-button type="warning" text="加入购物车" @click="addCar"/>
        <van-goods-action-button type="danger" text="立即购买" @click="payShop"/>
      </van-goods-action>
      <van-swipe @change="onChange" :loop="false">
        <van-swipe-item v-for="(item,index) in detailImg" :key="index" class="swiper">
          <img  v-lazy="item" />
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{ current + 1 }}/5</div>
        </template>
      </van-swipe>
      <div class="detail_nav" @click="Navigation">
        导航
      </div>
      <div class="main">
        <div class="title">
          <div class="price">
            <span>￥</span>
            <span>{{Sub}}</span>
          </div>
          <div class="big">{{tem}}</div>
          <div class="small">{{subItem}}</div>
        </div>
        <div class="discount">
          <div class="dtitle">
            <div class="dtitle_left">可以参加以下优惠活动</div>
            <div class="dtitle_right">查看更多></div>
          </div>
          <div class="promotion" @click="pro">
            <div class="p_left">促销</div>
            <div class="p_right">
              <div class="yun">
                <div>云促销</div>
                <div>普通会员预计返10钻</div>
              </div>
              <div class="yun">
                <div>实名领劵</div>
                <div>领10元无门槛支付劵</div>
              </div>
            </div>
          </div>
          <van-action-sheet v-model="show" title="优惠">
              <div class="content">
                <div>可以参加以下优惠活动</div>
                <div class="con_sale">促销</div>
                <div class="con_yun">
                  <div class="con_left">云促销</div>
                  <div class="con_right">
                    <div>普通会员预计返10钻</div>
                    <div>通过购物、评价、打卡、云钻游戏等获得的云钻，可兑换商品、券、玩游戏、还可购物抵现</div>
                  </div>
                </div>
                <div class="con_yun">
                  <div class="con_left">实名领劵</div>
                  <div class="con_right">领10元无门槛支付券</div>
                </div>
              </div>
          </van-action-sheet>
        </div>
        <div class="pay">
          <div class="pay_row" @click="payCount">
            <div class="pay_left">已选</div>
            <div class="pay_right">
              <div class="pay_acount">
                <span>{{Dgui}}</span>
                <span>{{payvalue}}件</span></div>
              <div class="pay_ico"><van-icon name="arrow" color="#999"/></div>
            </div>
          </div>
          <div class="row">
            <div class="left">付款</div>
            <div class="right">支付&nbsp;&nbsp;&nbsp;&nbsp;苏宁支付&nbsp;&nbsp;&nbsp;&nbsp;支付宝</div>
          </div>
          <div class="row">
            <div class="left">运费</div>
            <div class="right">免运费</div>
          </div>
          <div class="row">
            <div class="left">重量</div>
            <div class="right">{{weight}}</div>
          </div>
          <div class="row">
            <div class="left">服务</div>
            <div class="right">
              <div>
                <van-icon name="passed" color="#B32B27"/>
                <span>供应商发货</span>
              </div>
              <div>
                <van-icon name="passed" color="#B32B27"/>
                <span>免运费</span>
              </div>
              <div>
                <van-icon name="passed" color="#B32B27"/>
                <span>30天包退</span>
              </div>
            </div>
          </div>
          <van-action-sheet v-model="pay" title="规格">
            <div class="paySelect">
              <div class="pay_top">
                <div class="pay_left">
                  <img :src="uImg" alt="">
                </div>
                <div class="pay_right">
                  <div class="pay_price">￥{{gui}}</div>
                  <div class="pay_title">{{tem}}</div>
                </div>
              </div>
              <div class="norm">
                <div class="norm_text">规格</div>
                <div class="norm_list">
                  <ul>
                    <li ><span @click="handleguige(index)" :class="[typeIndex == index?'norm_active':'none']" v-for="(item,index) in guige" :key="index">{{item}}</span></li>
                  </ul>
                </div>
              </div>
              <div class="pay_a">
                <div class="pay_ben">购买数量</div>
                <div class="pay_per">
                  <span class="pay_limit">起购1件，限购99件</span>
                  <div class="pay_step">
                    <van-stepper v-model="payvalue" min="1" max="99" />
                  </div>
                </div>
              </div>
              <div class="btn">
                <button @click="addType">加入购物车</button>
                <button @click="payType">立即购买</button>
              </div>
            </div>
          </van-action-sheet>
        </div>
        <div class="comment">
          暂无评价
        </div>
        <div class="likes">
          <div class="likes_top"><span>猜你喜欢</span></div>
          <div class="likes_card">
            <ul>
              <li v-for="(item,index) in likeItem" :key="index" >
                <card :item="item" v-if="index <4"/>
              </li>
            </ul>
          </div>
        </div>
        <div class="suv" v-for="(a,b) in subImg" :key="b">
          <img v-lazy="a" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import card from "./detail_card/detail_card";
export default {
  name:"detail",
  components:{card},
  data() {
    return {
      uid:null,
      current: 0,
      detailImg:null,
      tem:null,
      subItem:null,
      Sub:null,
      subImg:null,
      weight:null,
      show:false,
      pay:false,
      isTop:true,
      likeItem:null,
      uImg:null,
      payMoney:null,
      payNorm:null,
      isactive:true,
      payvalue:1,
      guige:null,
      guiP:null,
      typeIndex:0,
      gui:null,
      Dgui:null
    }
  },
  created() {
    // console.log(localStorage.getItem("user"))
    this.uid = this.$route.query.uid
    this.$store.dispatch("detail/ProductDetail",this.uid).then(res=>{
      // console.log(res.data)
      const {title,Subtitle,sale_price,suvImg,weight,uImg} = res.data
      this.tem = title
      this.subItem = Subtitle
      this.Sub = sale_price
      this.subImg = suvImg
      this.detailImg = res.data.imgs
      this.weight = weight
      this.uImg = uImg
    })
    this.$store.dispatch("home/product").then(res=>{
      // console.log(res.data)
      this.likeItem = res.data
    })
    this.$store.dispatch("detail/ProductNorm",this.uid).then(res=>{
      // console.log(res.data.guige.a)

      let mn = res.data.guige.a
      let nm = res.data.guige.b
      this.guiP = nm.filter(item=>{
        if(item !== null) {
          return nm
        }
      })

      // console.log(this.guiP)
      this.guige = mn.filter(item=>{
        if(item !== null) {
          return item
        }
      })
      this.Dgui = this.guige[0]
      if(this.gui == null) {
        return this.gui = this.guiP[0]
      }
    })
  },
  mounted() {
    window.addEventListener("scroll",this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll",this.handleScroll)
  },
  methods: {
    addCar() {
      let m = JSON.parse(localStorage.getItem("user"))
      let product = {
        uid:this.uid,
        uImg:this.uImg,
        utitle:this.tem,
        norm:this.Dgui,
        num:this.payvalue,
        price: this.gui,
        user: m.user   // 购物车用户
      }
      this.$store.dispatch("car/addCar",product).then(res=>{
        console.log(res)
        this.$toast({
          message:"商品已成功加入购物车"
        })
      })
    },
    handleguige(index){
      // console.log(index)
      this.typeIndex = index
      // console.log(this.typeIndex)
      this.gui = this.guiP[index]
      this.Dgui = this.guige[index]
    },
    car(){
      this.$router.push({path:"/car"})
    },
    Navigation() {
      window.scrollTo(0,0)
    },
    handleShop() {
      window.scrollTo(0,0)
    },
    handleCommit(){
      window.scrollTo(0,700)
    },
    handleDetail(){
      window.scrollTo(0,1160)
    },
    handleRec(){
      window.scrollTo(0,800)
    },
    handleScroll() {
      let scroll_height =  document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;
      // console.log(scroll_height)
      scroll_height>10?this.isTop=false:this.isTop=true
    },
    onChange(index) {
      this.current = index;
    },
    Tback(){
      this.vback()
    },
    vback() {
      this.$router.push({path:"/home"})
    },
    pro() {
      this.show = true
    },
    payCount() {
      this.pay = true
    },
    customer() {
      this.$toast({
        message:"客服小姐姐还没上班，请耐心等待哦"
      })
    },
    shop() {
      this.$toast({
        message:"店铺还未搭建，已去One Piece寻找"
      })
    },
    payShop() {
      console.log(1111)
    },
    addType() {
      this.addCar()
    },
    payType() {
      this.payShop()
    },
  }
}
</script>
<style lang="scss">
  .detail {
    position: relative;
    z-index:99;
    background-color: #eee;
    .tab {
      height: 50px;
      border-top: 1px solid #999;
    }
    .top {
      position: fixed;
      top: 0;
      z-index:99;
      display: flex;
      width: 100%;
      height: 44px;
      background-color: #fff;
      padding: 0 15px;
      border-bottom: 1px solid #999;
      .top_left {
        flex:1;
      }
      .top_right {
        flex:9;
        display: flex;
        padding: 0 10px;
        font-size: 20px;
        div {
          width:25%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
    .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
    }
    .swiper {
      img {
        width: 100%;
        height: 100%px;
      }
    }
    .Dback {
      position: fixed;
      top: 0;
      left:0;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 6px;
      margin-left: 6px;
      border-radius: 50%;
      background-color: rgba($color: #7D7D7D, $alpha: .5);
      z-index: 99;
    }
    .detail_nav {
      position: fixed;
      right: 0;
      bottom: 200px;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background-color: #fff;
      box-shadow: 0px 2px 2px 2px rgba($color: #000000, $alpha: .3);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      z-index: 999;
    }
    .main {
      .title {
        background-color: #fff;
        font-size: 20px;
        padding: 15px;
        .price {
          color: red;
          font-size: 24px;
          span:nth-child(1) {
            font-size: 20px;
          }
        }
        .big {
          font-weight: 700;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        .small {
          padding-top: 10px;
          color: rgb(153, 153, 153);
        }
      }
      .discount {
        padding: 15px;
        font-size: 18px;
        background-color: #fff;
        margin-top: 10px;
        .dtitle {
          display: flex;
          justify-content: space-between;
          .dtitle_left {
            color: #333;
          }
          .dtitle_right {
            color: #999;
          }
        }
        .promotion {
          display: flex;
          padding-top: 20px;
          .p_left {
            margin-right: 15px;
            color: #999;
          }
          .p_right {
            color: #333;
            .yun {
              display: flex;
              margin-bottom: 10px;
              div:nth-child(1) {
                background-color: #FEFBEE;
                border: 1px solid #B33129;
                border-radius: 5px;
                padding: 2px 5px;
                font-size: 16px;
              }
              div:nth-child(2) {
                padding-left: 10px;
                padding-top: 2px;
              }
            }
          }
        }
        .content {
          padding: 16px 16px 460px;
          .con_sale {
            padding: 20px 0 10px 0;
          }
          .con_yun {
            display: flex;
            flex-shrink: 0;
            .con_left {
              flex:2;
            }
            .con_right {
              flex:8;
            }
          }
        }
      }
      .comment {
        background-color: #fff;
        margin-bottom:10px;
      }
      .pay {
        background-color: #fff;
        padding: 15px;
        margin: 10px 0;
        font-size: 18px;
        .pay_row {
          display: flex;
          margin: 10px 0;
          .pay_left {
            flex: 1;
            margin-right: 15px;
            color: #999;
          }
          .pay_right {
            flex: 9;
            display: flex;
            width: 100%;
            justify-content: space-between;
            padding-right: 15px;
            .pay_acount {
              span:nth-child(1) {
                margin-right: 10px;
              }
            }
          }
        }
        .row {
          display: flex;
          margin: 10px 0;
          .left {
            margin-right: 15px;
            color: #999;
          }
          .right {
            display: flex;
            div {
              margin: 0 10px;
            }
          }
        }
        .paySelect {
          padding: 16px 16px 460px;
          .pay_top {
            display: flex;
            .pay_left {
              img {
                width: 120px;
                height: 120px;
                border: 1px solid #999;
              }
            }
            .pay_right {
              padding-left: 20px;
              display: flex;
              flex-direction: column;
              .pay_price {
                flex: 1;
                display: flex;
                align-items: flex-end;
                color: red;
              }
              .pay_title {
                flex: 1;
                font-weight: 700;
                padding-top: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
              }
            }
          }
          .norm {
            .norm_text{
              color: #222;
            }
            .norm_list{
              li {
                margin: 10px;
                span {
                  background-color: #F6F6F6;
                  padding: 5px 15px;
                  border-radius: 10px;
                  margin: 10px;
                }
              }
            }
            .norm_active {
              background-color: #FFEDA2;
              border: 2px solid #FFCC00;
            }
          }
          .pay_a{
            height: 360px;
            display: flex;
            justify-content: space-between;
            .pay_ben{
              color: #333;
            }
            .pay_per{
              display: flex;
              .pay_limit{
              color: red;
              padding-right: 10px;
              }
            }

          }
          .btn {
            display: flex;
            color: #fff;
            button:nth-child(1) {
              flex: 1;
              border: 0 none;
              border-radius: 10px;
              margin-right: 10px;
              background-color: #FF6600;
            }
            button:nth-child(2) {
              flex: 1;
              border: 0 none;
              background-color: #B32C28;
              padding: 8px 15px;
              border-radius: 10px;
            }
          }
        }
      }
      .likes {
        background-color: #fff;
        margin-bottom: 10px;
        padding: 15px;
        .likes_top {
          text-align: center;
          font-size: 24px;
          span {
            padding-bottom: 10px;
            border-bottom: 5px solid #B32B27;
          }
        }
        .likes_card {
          ul {
            display: flex;
            flex-wrap: wrap;
            li {
              width: 48%;
            }
          }
        }
      }
      .suv {
        font-size:0;
        img {
          width:100%;
        }
      }
    }
  }
</style>
