<template>
  <div>
      <div>
        <h4>猜你喜欢</h4>
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list
              v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad"
            >

            <ul class="vlist">
              <li v-for="item in listProduct" :key="item.id">
                <card :item ="item"/>
              </li>
            </ul>
          </van-list>
          </van-pull-refresh>
      </div>
  </div>
</template>
<script>
import card from "@/components/card/card";
export default {
  name:"likes",
  components:{card},
  data() {
    return {
      list: [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10],
      loading: false,
      finished: false,
      refreshing: false,
      listProduct:[]
    };
  },
  created() {
    this.$store.dispatch("home/product").then(res=>{
         this.listProduct = res.data
       })
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }
        this.loading = false;

        if (this.list.length >= 20) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      this.finished = false;
      this.loading = true;
      this.onLoad();
    },
  },
}
</script>
<style lang="scss">
  h4 {
    text-align: center;
    padding: 15px 0;
    color: #383838;
  }
  .vlist {
    display: flex;
    flex-wrap: wrap;
    li {
      flex: 1;
      display: flex;
      justify-content: center;
      margin-bottom: 15px;
    }
  }
</style>
