<template>
  <div>
    <nav-header></nav-header>
    <pic-plug></pic-plug>
  </div>
</template>

<script>
import NavHeader from "../components/NavHeader";
import PicPlug from "../components/PicPlug";

export default {
  name: "docker",
  components: {
    PicPlug,
    NavHeader
  }
};
</script>

<style scoped>
</style>