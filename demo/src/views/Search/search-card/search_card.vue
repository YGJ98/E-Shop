<template>
  <div>
    <div class="searchList">
      <div class="search-left">
        <img :src="m.uImg" alt="">
      </div>
      <div class="search-right">
        <div class="search-title">{{m.title}}</div>
        <div class="search-price">￥{{m.sale_price}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    m:{
      type: Object,
      default: {}
    }
  },
  data() {
    return {

    }
  },
}
</script>
<style lang="scss">
  .searchList {
    display: flex;
    padding: 20px 0;
    margin: 15px 0;
    .search-left {
      flex: 4;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 120px;
        height: 120px;
      }
    }
    .search-right {
      flex: 6;
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid #ccc;
      padding:0  10px;
      .search-title {
        flex: 1;
        display: flex;
        align-items: center;
        font-size: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        font-weight: 700;
      }
      .search-price {
        flex: 1;
        display: flex;
        align-items: center;
        color: red;
        font-size: 20px;
      }
    }
  }
</style>
