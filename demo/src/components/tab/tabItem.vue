<template>
  <div class="item" @click="btn">
    <div v-if="!isActive"><slot name="icon"></slot></div>
    <div v-else><slot name="iconActive"></slot></div>
    <div :style="activeStyle"><slot name="text"></slot></div>
  </div>
</template>
<script>
export default {
  props: {
    path: {
      type: String
    }
  },
  data() {
    return {
      // isActive: false
    };
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: "red" } : {};
    }
  },
  methods: {
    btn() {
      // console.log(this.path);
      this.$router.push(this.path);
      // console.log(this.$router);
    }
  }
};
</script>
<style lang="scss">
.item {
  flex: 1;
  text-align: center;
  img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-bottom: 2px;
    margin-top: 3px;
  }
}
</style>
