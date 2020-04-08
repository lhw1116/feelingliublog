-<template>
  <div class="main-articles">
    <div class="layout1">
      <div class="l-articles"></div>
      <div class="pagination">
        <el-pagination background layout="prev, pager, next" :total="50"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Articles"
};
</script>

<style lang="scss">
.main-articles {
  background: #e4e1e1;
  .layout1 {
    padding-top: 50px;
    padding-bottom: 50px;
    background: #e4e1e1;
    .l-articles {
      width: 1440px;
      margin: 0 auto;
      //background: gainsboro;
      margin-bottom: 50px;
      padding-top: 35px;
      padding-bottom: 35px;
      background: white;
      .title {
        width: 800px;
        margin: 0 auto;
        font-size: 30px;
        text-align: center;
        font-weight: bold;
      }
      .info {
        width: 800px;
        font-size: 17px;
        display: flex;
        margin: 0 auto;
        justify-content: space-between;
        align-items: center;
        p {
          display: inline-block;
        }
      }
      .line {
        width: 800px;
        margin: 0 auto;
        margin-top: 18px;
        margin-bottom: 18px;

        height: 2px;
        background: chartreuse;
      }
      .content {
        width: 800px;
        margin: 0 auto;
        font-size: 18px;
        line-height: 35px;
        .getmore {
          width: 72px;
          margin: 0 auto;
          margin-top: 25px;
          text-align: center;
          a {
            display: inline-block;
            font-size: 18px;
            color: black;
            border-bottom: 2px solid #000;
          }
        }
      }
    }
    .pagination {
      width: 300px;
      margin: 0 auto;
      margin-top: 50px;
    }
  }
}
</style>