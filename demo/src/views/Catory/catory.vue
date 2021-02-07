<template>
  <div>
    <div class="catory">
      <div class="catory-top">
        <div>全部分类</div>
        <div>
          <van-icon name="search" size="16" class="ico"/>
          <input type="text" placeholder="请输入商品" class="ipt">
        </div>
      </div>
      <div class="catory-sideBar">
        <div class="catory-left">
          <van-sidebar v-model="activeKey" class="sidebar" >
            <van-sidebar-item :title="item"  class="sidebar-item" v-for="(item,index) in catoryList" :key ="index"/>
          </van-sidebar>
        </div>
        <div class="catory-right">
          <div>
            <div class="catory-hot" v-if="list[activeKey]">
              <div class="catoryImg" v-if="list[activeKey].img">
                <img :src="list[activeKey].img" alt="">
              </div>
              <div class="catoryContent">
                <h5>{{list[activeKey].title}}</h5>
                <div>
                  <ul>
                    <li v-for="(m,n) in list[activeKey].listCard" :key="n" @click="handleAs">
                      <div>
                        <img :src="m.uimg" alt="">
                      </div>
                      <div>{{m.utitle}}</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div v-else class="noneContent">暂无内容</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeKey: 0,
      catoryList:['热门推荐','医疗健康','休闲零食','酒水饮料','生鲜蔬菜','护肤百货','图书音频','过年礼品','牛气冲天'],
      list:[
        {
          img:'http://image2.suning.cn/uimg/asbs/ad/1612455346158_app_wap_list.jpg',
          title:'热门推荐',
          listCard:[
            {
              utitle:"味精",
              uimg:"//imgservice.suning.cn/uimg1/b2c/image/Ivuj0RXMGAuejhfoOMI6ug.jpg_800w_800h_4e_100Q_is"
            },
            {
              utitle:"手机",
              uimg:"//uimgproxy.suning.cn/uimg1/pcpv/pcpv/2021/01/29/02/iwoghBannerPicture/KoBMaWaqNS1611858689592.png_800w_800h_4e_100Q_is"
            },
            {
              utitle:"口罩",
              uimg:"//imgservice.suning.cn/uimg1/b2c/image/aFYusETNJ6M1Pqw9nl7SQg.jpg_800w_800h_4e_100Q_is"
            },
            {
              utitle:"味精",
              uimg:"//imgservice.suning.cn/uimg1/b2c/image/Ivuj0RXMGAuejhfoOMI6ug.jpg_800w_800h_4e_100Q_is"
            },
            {
              utitle:"手机",
              uimg:"//uimgproxy.suning.cn/uimg1/pcpv/pcpv/2021/01/29/02/iwoghBannerPicture/KoBMaWaqNS1611858689592.png_800w_800h_4e_100Q_is"
            },
            {
              utitle:"口罩",
              uimg:"//imgservice.suning.cn/uimg1/b2c/image/aFYusETNJ6M1Pqw9nl7SQg.jpg_800w_800h_4e_100Q_is"
            },

          ]
        },{
          title:'医疗用品',
          listCard:[
            {
              utitle:"口罩",
              uimg:"//imgservice.suning.cn/uimg1/b2c/image/aFYusETNJ6M1Pqw9nl7SQg.jpg_800w_800h_4e_100Q_is"
            },
          ]
        },{
          title:'零食大礼包',
          listCard:[
            {
              utitle:"坚果",
              uimg:"//imgservice.suning.cn/uimg1/b2c/image/pwy2nYdUoLVUucIvXj0SgA.jpg_800w_800h_4e_100Q_is"
            },
          ]
        },{
          title:'白酒',
          listCard:[
            {
              utitle:"茅台",
              uimg:"//imgservice.suning.cn/uimg1/b2c/image/iNguMO_mD_njHN58QmPl4w.jpg_800w_800h_4e_100Q_is"
            },
          ]
        }
      ]
    }
  },
  methods: {
    handleAs() {
      this.$toast({
        message:"未开发，请耐心等待"
      })
    }
  },
}
</script>
<style lang="scss" scope>
  .catory {
    background-color: #fff;
    .catory-top {
      display: flex;
      height: 60px;
      align-items: center;
      padding: 0 5px;
      div:nth-child(1) {
        flex: 3;
        color: #666;
        font-size: 26px;
        text-align: center;
      }
      div:nth-child(2) {
        flex: 7;
        position: relative;
        display: flex;
        justify-content: center;
        .ico {
          position: absolute;
          left: 35px;
          top: 6px;
        }
        .ipt {
          width: 70%;
          background-color: #f7f7f7;
          border: 0 none;
          border-radius: 20px;
          padding: 5px;
          font-size: 18px;
          padding-left: 45px;
        }
      }
    }
    .catory-sideBar {
      display: flex;
      .catory-left {
        flex: 2;

        .sidebar {
          width: 100%;
          .sidebar-item {
            height: 85px;
            display: flex;
            align-items: center;
            font-size: 20px;
          }
        }
      }
      .catory-right {
        flex: 6;
        padding: 20px;
        .catory-hot {
          .catoryImg {
            img {
              width: 100%;
              height: 100%;
              border-radius: 20px;
            }
          }
          .catoryContent {
            font-size: 22px;
            padding-top: 50px;
            ul {
              display: flex;
              flex-wrap: wrap;
              li {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                width: 33.3%;
                padding-top: 20px;
                color: #666;
                font-size: 18px;
                img {
                  width: 80px;
                  height: 80px;
                }
              }
            }
          }
        }
        .noneContent {
          height: 500px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #666;
        }
      }
    }
  }
</style>
