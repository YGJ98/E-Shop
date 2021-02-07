<template>
  <div class="sheetCard">
    <div class="sheetImg">
      <img src="@/assets/logo.png" alt="">
      <span>人气榜</span>
    </div>
    <div class="sheet-title">
      <p>美味方便面</p>
      <p>卖爆xx件</p>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
  .sheetCard {
    width: 130px;
    height: 153px;
    border-radius: 15px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .sheetImg {
      position: relative;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
      width: 30px;
      height: 30px;
      }
      span {
        position: absolute;
        top: 60px;
        border: 1px solid #E5C4A5;
        border-radius: 20px;
        padding: 1px 10px;
        font-size: 12px;
        color: #D9A87A;
        background-color: #fff;
      }
    }
    .sheet-title {
      flex: 1;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(to right, #E8B58C , #E1A36E);
      font-size: 14px;
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 10px;
      p:nth-child(2) {
        color: #FAEFE5;
      }
    }
  }
</style>
