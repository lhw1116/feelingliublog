<template>
  <div class="article">
    <a-list
      item-layout="vertical"
      size="default"
      :pagination="pagination"
      :data-source="listData"
    >
      <a-list-item slot="renderItem" key="item.title" slot-scope="item">
        <span class="art-title"
          ><router-link
            :to="{
              path: '/articles',
              query: { id: item.id },
            }"
          >
            {{ item.title }}
          </router-link></span
        >
        <img slot="extra" width="222" alt="logo" src="../assets/gopher.png" />
        <span class="zhengwen">{{ item.introduce + "..." }}</span>
        <span class="ctime"
          ><a-icon type="clock-circle" /> 创建时间：{{
            item.created_time
          }}</span
        >
      </a-list-item>
    </a-list>
  </div>
</template>
<script>
import { fetchArticlebytype } from "../api/index";
export default {
  data() {
    return {
      listData: [],
      pagination: {
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 10,
      },
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      fetchArticlebytype("golang").then((response) => {
        this.listData = response.data;
      });
    },
  },
};
</script>
<style lang="scss">
.article {
  width: 60%;
  margin: 0 auto;
}

.ant-list-pagination {
  text-align: center;
  margin: 50px;
}
.art-title {
  display: block;
  line-height: 60px;
  font-size: 28px;
  text-align: left;
  a {
    color: #000;
  }
}
.zhengwen {
  display: block;
  text-align: left;
  line-height: 25px;
  color: #8c8c8c;
  margin-top: 15px;
}
.ctime {
  display: block;
  text-align: left;
  color: #8c8c8c;
  margin-top: 15px;
  font-size: 12px;
  position: absolute;
  color: #595959;
  bottom: 0;
}
.ant-layout-content {
  background-color: #fff;
}
.ant-list-item-main {
  position: relative;
}

.ant-list-item.ant-list-item-no-flex {
  height: 300px;
}
.ant-list-bordered.ant-list-item {
  padding-left: 50px;
}
.ant-list-item {
  padding-left: 20px;
}
</style>