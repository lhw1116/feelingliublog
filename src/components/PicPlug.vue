<template>
  <div class="pic-plug">
    <div class="container">
      <div class="toper">
        <pre>星 空 不 问 赶 路 人 ，岁 月 不 负 有 心 人</pre>
      </div>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PicPlug"
};
</script>

<style lang="scss">
.pic-plug {
  height: 380px;
  background-image: url("./../assets/background.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    display: inline-block;
    font-size: 36px;
    color: #f5f5f5;
    .line {
      width: 800px;
      height: 1px;
      background: #f5f5f5;
    }
  }
}
</style>