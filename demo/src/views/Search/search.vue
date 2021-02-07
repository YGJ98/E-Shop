<template>
  <div>
    <div class="a">
      <div class="searchLoding">
      <div>
        <van-icon @click="back" name="arrow-left" size="24" color="#B0B3B6"/>
      </div>
      <div>
        <van-icon name="search" size="20" class="ico"/>
        <input type="text" placeholder="请输入搜索内容" v-model="value" @keyup.enter="m">
        <van-icon v-if="value" @click="clear" name="cross" color="#fff" class="icos"/>
      </div>
      <div @click="search">搜索</div>
      </div>
      <div v-if="isSearch" class="label" >
        <div class="hot">
          <h5>热门搜索</h5>
          <ul>
            <li v-for="(item,index) in hotList" :key="index" @click="clickHistory(item)">{{item}}</li>
          </ul>
        </div>
        <div class="history" v-if="isMark">
          <div class="history-titlt">
            <h5>历史记录</h5>
            <van-icon @click="clearLabel" name="delete-o" size="24" color="#B5B5B5"/>
          </div>
          <ul>
            <li v-for="(a,i) in historyList" :key="i" @click="clickHistory(a)">{{a}}</li>
          </ul>
        </div>
      </div>
      <div v-else>
        <searchCard v-for="(m,n) in searchList" :key="n" :m="m"/>
      </div>
    </div>
  </div>
</template>
<script>
import searchCard from "./search-card/search_card"
export default {
  components:{searchCard},
  data() {
    return {
      value: '',
      historyList: this.$store.state.search.historyList,
      isMark: false,
      hotList:['口罩','华为手机','茅台','零食','纸巾'],
      searchList: [],
      isSearch:true
    }
  },
  methods: {
    back() {
      this.$router.push({name:"home"})
    },
    clear() {
      this.value = ''
    },
    m() {
      this.search()
    },
    search() {
      if(this.value) {
        this.setHistory()
        this.$store.dispatch("search/search",this.value).then(res=>{
          this.searchList = res.data
          this.isSearch = false
          console.log(res.data)
        })
      } else {
        this.$toast({
          message:"请输入内容"
        })
      }
      // this.$router.push({name:"a"})
    },
    clickHistory(value){
      this.value = value
      this.search()
    },
    setHistory() {
      this.$store.dispatch("search/setHistory", this.value)
      this.isMark = true
    },
    clearLabel() {
      this.$store.dispatch("search/clearHistory").then(()=>{
        this.$toast({
          message: "清除完成"
        })
        this.isMark = false
      })
    }
  },
}
</script>
<style lang="scss">
  body {

    box-sizing: border-box;
    .a {
      height: 1500px;
      position: relative;
      background-color: #fff;
      z-index: 99;
      h5 {
        color: #999999;
        font-size: 24px;
        padding: 0 20px;
        }
        .searchLoding {
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
        .label {
          .hot,.history {
            ul {
              display: flex;
              flex-wrap: wrap;
              font-size: 22px;
              color: #333;
              padding: 0 20px;
              li {
                width: 30%;
                background-color: #f2f2f2;
                border-radius: 5px;
                padding: 3px 0;
                margin: 5px 6px;
                text-align: center;
              }
            }
          }
          .hot {
            border-bottom: 2px solid #dcdcdc;
            padding: 20px 0;
          }
          .history {
            .history-titlt {
              display: flex;
              justify-content: space-between;
              padding:20px 20px 5px 0;
            }
          }
        }
    }
  }
</style>
