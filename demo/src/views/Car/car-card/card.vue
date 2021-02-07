<template>
  <div>

    <div class="car-card">

      <div class="car-card-top">
        <van-swipe-cell>
          <div class=" ma">
              <span>
                <van-checkbox v-model="checked" @click="handleCheck"></van-checkbox>
              </span>
            </div>
          <div class="swipe">
            <div class="swipe-left">
              <img :src="item.uImg" alt="">
            </div>
            <div class="swipe-right">
              <div class="swipe-right-title">{{item.utitle}}</div>
              <div class="swipe-right-ben">
                <span>{{item.norms}}</span>
              </div>
              <div class="swipe-right-text">最多可买99件</div>
              <div class="swipe-right-step">
                <div class="swipe-right-price">￥{{item.price}}</div>
                <div class="swipe-right-per">
                  <van-stepper v-model="value" min="1" max="99" />
                </div>
              </div>
            </div>
          </div>
          <template #right >
            <van-button square text="删除" type="danger" class="delete-button" @click="handleDetele"/>
          </template>
        </van-swipe-cell>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"car-card",
  props:{
    item:{
      type:Object,
      default:{}
    },
    itemSelected:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      value:'',
      itemStatus: false,
      checked:false
    }
  },
  watch: {
    itemSelected(newval,oldval) {
      // console.log(newval,oldval)
      // console.log(this.itemSelected)
      if(this.itemSelected) {
        this.checked = true
      } else {
        this.checked = false
      }
    }
  },
  methods: {
    handleCheck(){
      if(this.checked) {
        this.$emit('tab',{
          id: this.item.id,
          num: this.value,
          price: this.item.price
        })
      } else {
        this.$emit("deleteTab",this.item.id)
      }
    },
    handleOn(){
      // console.log("打开详情跳转")
      this.$router.push({
        path:"/detail",
        query:{
          uid:this.item.uid
        }
      })
    },
    handleDetele() {
      console.log(this.item.id)
      this.$store.dispatch("car/deleteCar",this.item.id).then(res=>{
        this.$toast({
          message:"删除商品成功"
        })
        location.reload()
      })
    },
  },
}
</script>
<style lang="scss">
  .addCar{
    display: flex;
    justify-content: center;
      align-items: center;
    background-color: #fff;
    height: 45px;
    font-size: 24px;
    div:nth-child(1) {
      flex:10;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    div:nth-child(2) {
      flex: 2;
      color: #3377FF;
    }
  }
  .car-card {
    background-color: #fff;
    margin: 15px;
    border-radius: 10px;

    .car-card-top {
      padding: 15px;
      .swipe{
        display: flex;
        .ma {
          flex: 1;
      span {
        position: relative;
        width: 18px;
        height: 18px;
        input {
          position: absolute;
          top:0;
          left:0;
          width: 18px;
          height: 18px;
          border: 0 none;
        }
      }
    }
        .swipe-left{
          flex:3;
          display: flex;
          justify-content: center;
          // align-items: center;
          img {
            width: 100px;
            height: 100px;
          }
        }
        .swipe-right{
          flex:7;
          font-size: 16px;
          padding-left: 15px;
          .swipe-right-title{
            font-weight: 700;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
          .swipe-right-ben{
            span {
              padding: 5px;
              background-color: #f7f7f7;
            }
            margin: 10px 0;
          }
          .swipe-right-text{
            color: red;
          }
          .swipe-right-step{
            display: flex;
            justify-content: space-between;
            padding-top: 25px;
            .swipe-right-price{
              font-size: 20px;
              color: red;
            }
          }
        }
      }
      .delete-button{
        height: 100%;
      }
    }
  }
</style>
