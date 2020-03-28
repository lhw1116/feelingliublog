<template>
  <div class="nav-footer">
    <div class="container">
      <div class="left">
        <a href="https://github.com/liuhanwen1996" target="_blank">
          <div class="logo1"></div>Github:https://github.com/liuhanwen1996
        </a>
      </div>
      <div class="left">
        <a>
          <div class="logo2"></div>备案/许可证编号为：冀ICP备19017112号
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-footer"
};
</script>

<style lang="scss">
.nav-footer {
  margin-top: 100px;
  .container {
    height: 50px;
    width: 1560px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
  }
  display: flex;
  height: 48px;
  background-color: black;
  border-top: 1px solid #ff6600;
  //text-align: center;
  //font-weight: bold;
  font-size: 12px;
  color: white;
  text-align: center;
  .left {
    a {
      text-align: center;
      height: 48px;
      line-height: 48px;
      font-size: 13px;
      color: #f5f5f5;
      .logo1 {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url("../assets/github.png");
        background-size: 20px 20px;
        margin-right: 5px;
      }
      .logo2 {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url("../assets/beian.png");
        background-size: 20px 20px;
        margin-right: 5px;
      }
    }
    p {
      font-size: 13px;
    }
  }
}
</style>