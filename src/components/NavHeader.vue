<template>
  <div class="header">
    <div class="container">
      <div class="blog-title">
        <a href="/">长情驿站</a>
      </div>
      <!-- <div class="header-search">
        <el-input placeholder="请输入内容" v-model="inputs">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>-->
      <div class="blog-order">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router="true">
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/docker">Docker系列</el-menu-item>
          <el-menu-item index="/network">计算机网络</el-menu-item>
          <el-menu-item index="/leetcode">Leetcode</el-menu-item>
          <el-submenu index="4">
            <template slot="title">更多分类</template>
            <el-menu-item index="/data">数据结构</el-menu-item>
            <el-menu-item index="/nginx">Nginx</el-menu-item>
            <el-menu-item index="/k8s">K8S</el-menu-item>
            <el-menu-item index="/linux">Linux</el-menu-item>
          </el-submenu>
          <el-menu-item index="/about">关于</el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "nav-header",
  data() {
    return {
      activeIndex: "1",
      inputs: ""
    };
  }
};
</script>

<style lang="scss">
.header {
  height: 60px;
  border-bottom: #e5e5e5 solid 1px;
  background: #fff;
  padding-right: 5000px;
  padding-left: 200px;
  position: fixed;
  .container {
    width: 1440px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .blog-order {
      margin-left: 500px;
    }
    .blog-title {
      a {
        font-size: 22px;
        height: 60px;
        line-height: 60px;
        color: #333333;
      }
    }
  }
}
</style>