<template>
  <a-layout-content class="sys_container">
    <router-view class="mb10 content" />
  </a-layout-content>
</template>

<script>
export default {
  name: "DKContent",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less" scoped>
@import url("~@/assets/css/color.less");
.sys_container {
  position: relative;
  padding: 10px 10px 0 10px;
  // overflow-y: auto;
  // overflow-x: hidden;
  overflow: hidden;
  overflow-x: auto;
  min-height: calc(100vh - 104px);
  background: #fff;
  .content {
    // min-height: calc(100vh - 104px);
  }
}
</style>
