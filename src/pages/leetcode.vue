<template>
  <div>
    <nav-header></nav-header>
    <pic-plug></pic-plug>
    <articles></articles>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from "../components/NavHeader";
import NavFooter from "../components/NavFooter";
import PicPlug from "../components/PicPlug";
import Articles from "../components/Articles";

export default {
  name: "leetcode",
  components: {
    PicPlug,
    NavHeader,
    NavFooter,
    Articles
  }
};
</script>

<style scoped>
</style>