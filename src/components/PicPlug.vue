<template>
  <div class="pic-plug">
    <div class="container-photo">
      <div class="toper">
        <pre>星 空 不 问 赶 路 人 ，岁 月 不 负 有 心 人</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PicPlug",
};
</script>

<style lang="scss">
.pic-plug {
  height: 150px;
  background-image: url("./../assets/background.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  .container-photo {
    display: inline-block;
    font-size: 30px;
    color: #f5f5f5;
    pre {
      margin: 0px;
    }
  }
}
</style>