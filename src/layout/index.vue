<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header><nav-header></nav-header></a-layout-header>
      <a-layout-content><PicPlug></PicPlug></a-layout-content>
      <a-layout-content><BlogMain></BlogMain></a-layout-content>
      <a-layout-footer
        >备 案 / 许 可 证 编 号 为 ：冀 ICP 备 19017112 号</a-layout-footer
      >
    </a-layout>
  </div>
</template>

<script>
import NavHeader from "../components/NavHeader";
import PicPlug from "../components/PicPlug";
import BlogMain from "../components/BlogMain";

export default {
  name: "nav-home",
  components: {
    PicPlug,
    NavHeader,
    BlogMain,
  },
};
</script>

<style>
#components-layout-demo-basic {
  text-align: center;
}
#components-layout-demo-basic .ant-layout-header {
  background: #fff;
  color: #fff;
}
#components-layout-demo-basic .ant-layout-footer {
  background: #959da3;
  color: #fff;
  line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-content {
  color: rgb(223, 203, 203);
  min-height: 120px;
  line-height: 120px;
}
#components-layout-demo-basic > .ant-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}
</style>
