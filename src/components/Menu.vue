<template>
  <div id="components-menu-demo-basic">
    <a-menu v-model="current" mode="horizontal">
      <a-menu-item
        v-for="(item, key) in navOptions"
        :key="key"
        :index="item.index"
        @click="goto(item.index)"
        ><a-icon :type="item.ptype" />{{ item.label }}
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script>
//import axios from "axios";
export default {
  data() {
    return {
      current: ["mail"],
      navOptions: [
        { label: "首页", index: "/", ptype: "home" },
        { label: "Golang", index: "/golang", ptype: "smile" },
        { label: "Docker", index: "/docker", ptype: "cloud" },
        { label: "K8S", index: "/k8s", ptype: "setting" },
        { label: "算法", index: "/count", ptype: "fire" },
        { label: "操作系统", index: "/pc", ptype: "desktop" },
        {
          label: "Github",
          index: "https://github.com/lhw1116",
          ptype: "github",
        },
        { label: "关于", index: "/about", ptype: "heart" },
      ],
    };
  },
  methods: {
    goto: function (r) {
      this.$router.push(r);
    },
  },
  // created:vue生命周期中的钩子函数，在这个时间点，data中的数据已经注入到响应式系统中
  created() {
    const path = this.$route.path;
    if (path.indexOf("golang") !== -1) {
      this.activeIndex = "/category";
    } else if (path.indexOf("tag") !== -1) {
      this.activeIndex = "/tag";
    } else if (path.indexOf("about") !== -1) {
      this.activeIndex = "/about";
    } else {
      this.activeIndex = "/";
    }
    // axios
    //   .get("/mermaid/v1/article", {
    //     // 还可以直接把参数拼接在url后边
    //     // params: {
    //     //   title: "眼镜",
    //     // },
    //   })
    //   .then(function (res) {
    //     this.goodsList = res.data;
    //     console.log(111);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  },
};
</script>
<style lang="scss">
.a-menu-item {
  width: 100px;
}
</style>
<style>
#components-layout-demo-basic .ant-menu-horizontal {
  border: none;
}
</style>