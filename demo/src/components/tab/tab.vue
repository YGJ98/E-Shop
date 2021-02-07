<template>
  <div>
    <div class="tab">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.tab {
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  font-size: 16px;
  background-color: #fff;
  border-top: 1px solid #eee;
  box-shadow: 0px 5px 5px rgba($color: #000000, $alpha: 0.3);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
