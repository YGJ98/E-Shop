<template>
  <div>
    <div class="nav">
      <div>
        <van-icon  name="arrow-left" size="24" color="#B0B3B6"/>
      </div>
      <div>
        <van-icon name="search" size="20" class="ico"/>
        <input type="text" placeholder="请输入搜索内容" v-model="value">
        <van-icon v-if="value"  name="cross" color="#fff" class="icos"/>
      </div>
      <div>1</div>
    </div>
    <div class="title">
      <ul>
        <li>
          <span>{{arr[tabIndex]}}</span>
          <ul class="a" v-if="isZong">
            <li @click="select(index)" v-for="(item,index) in arr" :key="index">
              <div :class="{active:tabIndex==index}">{{item}}</div>
              <van-icon v-if="tabIndex == index" name="success" color="red" class="icon"/>
            </li>
          </ul>
        </li>
        <li>
          <span @click="sales">销量</span>
        </li>
        <li>
          <span @click="screen">筛选</span>
          <van-icon name="filter-o" />
        </li>
      </ul>
    </div>
    <cell/>
  </div>
</template>
<script>
import cell from "@/components/Cell/cell"
export default {
  name:"list",
  components:{cell},
  data() {
    return {
      value:"",
      isZong: false,
      arr: ['综合','价格降序','价格升序'],
      tabArr:[],
      value1:0,
      tabIndex:0
    }
  },
  watch:{
    value1(newVal,oldVal) {
      // console.log(newVal,oldVal)
      this.tabIndex = newVal
    }
  },
  methods: {
    comprehensive() {
      console.log("111")
    },
    sales() {
      console.log("222")
    },
    screen() {
      console.log("333")
    },
    select(val) {
      this.value1 = val
      // console.log(val)
    }
  },
}
</script>
<style lang="scss">
  body {
    background-color: #fff;
    box-sizing: border-box;
    .nav {
      display: flex;
      font-size: 18px;
      height: 45px;
      padding: 10px 0;
      border-bottom: 2px solid #f2f2f2;
      div:nth-child(1),div:last-child {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      div:nth-child(2) {
        flex: 8;
        height: 95%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        input {
          width: 100%;
          height: 40px;
          background-color: #f2f2f2;
          border: none;
          padding-left: 50px;
        }
        .ico {
          position: absolute;
          left: 20px;
        }
        .icos {
          position: absolute;
          right: 20px;
          background-color: #ABABAB;
          border-radius: 50%;
          padding: 2px;
        }
      }
    }
    .title {
     ul {
        display: flex;
        font-size: 22px;
        height: 48px;
        border-bottom: 1px solid #eee;
        li {
          width: 33.3%;
          text-align: center;
          line-height: 48px;
          .a {
            display: flex;
            border: none;
            flex-direction: column;
            li {
              width: 100%;
              background-color: #eee;
              font-size: 22px;
              border: 1px solid #fff;
              display: flex;
              justify-content: space-between;
              padding: 0 5px;
              div,.icon {
                display: flex;
                justify-content: center;
                align-items: center;
              }
            }
          }
        }
        .active {
          color: red;
        }
     }
    }
  }
</style>
