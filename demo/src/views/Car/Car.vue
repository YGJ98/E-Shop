<template >
  <div>
    <div class="car-top">
      <div v-if="!isCar" class="car">
        <div>
          <img src="@/assets/car.png" alt="">
        </div>
        <div class="car-title">购物车空空如也，快来挑选好货吧</div>
        <div class="car-btn">
          <button @click="backHome">去逛逛</button>
        </div>
      </div>
      <div v-else v-for="(item,index) in cardList" :key="index">
        <card :item="item" @tab="tab" @deleteTab="deleteTab" :itemSelected="itemSelected"/>
      </div>
    </div>
    <div class="car-bottom">
      <likes/>
    </div>
    <div class="sub">
      <div class="sub_check">
        <van-checkbox v-model="allStatus" @click="selectAll">全选</van-checkbox>
      </div>
      <div class="sub_acount">
        <div class="acount">合计：{{AllList}}</div>
        <div>
          <button>计算</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import card from "./car-card/card";
import likes from "@/components/likes/likes";
export default {
  components:{
    card,
    likes,

  },
  data() {
    return {
      isCar:false,
      token: localStorage.getItem("token"),
      cardList:[],
      allStatus: false,
      price: 0,
      selectList:[],
      itemSelected:false
    }
  },
  created() {
    if(this.token) {
      const user = JSON.parse(localStorage.getItem("user")).user
      this.$store.dispatch("car/Car",user).then(res=>{
        this.cardList = res.data.carList
        this.cardList.length>0?this.isCar = true:this.isCar = false
        // console.log(this.cardList)
      })
    }
  },
  computed: {
    AllList() {
      let sum = 0
      this.selectList.map(item=>{
        if(item) {
          sum += item.price * item.num
        }
      })
      return sum
    }
  },
  watch: {
    selectList(newVal,oldVal) {
      if(this.selectList.length == this.cardList.length) {
        this.allStatus = true
      } else {
        this.allStatus = false
      }
    }
  },
  methods: {
    deleteTab(index){
      let a = this.selectList.findIndex(item=>{
        return item.id == index
      })
      // console.log(a)
      this.selectList.splice(a,1)
    },
    tab(mn) {
      this.selectList.push(mn)
    },
    selectAll(){
      console.log(this.allStatus)
      if(this.allStatus) {
        this.itemSelected = true
        this.cardList.map(item=>{
          this.selectList.push(item)
        })
      } else {
        this.itemSelected = false
        this.selectList = []
      }
    },
    backHome() {
      this.$router.push({path:"/home"})
    }
  },
}
</script>
<style lang="scss">
  .car-top {
    .car {
        height: 500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #666;
      img {
        width: 60px;
        height: 60px;
      }
      .car-title{
        font-size: 22px;
      }
      .car-btn {
        button {
          background-color: #fff;
          border:1px solid #E2E2E2;
          font-size: 18px;
          border-radius: 10px;
          padding: 3px 5px;
        }
      }
    }
  }
  .sub {
    position: fixed;
    bottom: 75px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    z-index: 99;
    width: 100%;
    height: 70px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .sub_check {
      padding-left: 20px;
      font-size: 18px;
    }
    .sub_acount {
      display: flex;
      padding-right: 20px;
      justify-content: center;
      align-items: center;
      .acount {
        font-size: 18px;
        padding-right: 15px;
      }
      button {
        background-color: red;
        border-radius: 15px;
        border:0;
        color: #fff;
        font-size: 18px;
        padding: 4px 15px;
        vertical-align: middle;
      }
    }
  }
</style>
