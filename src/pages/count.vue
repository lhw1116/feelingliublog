<template>
  <div>
    <nav-header></nav-header>
    <pic-plug></pic-plug>
    <articles></articles>
  </div>
</template>

<script>
import NavHeader from "../components/NavHeader";
import PicPlug from "../components/PicPlug";
import Articles from "../components/Articles";

export default {
  name: "leetcode",
  components: {
    PicPlug,
    NavHeader,
    Articles,
  },
};
</script>

<style scoped>
</style>