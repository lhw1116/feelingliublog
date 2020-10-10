<template>
  <div id="components-menu-demo-basic">
    <a-menu mode="horizontal">
      <a-menu-item
        v-for="(item, key) in navOptions"
        :key="key"
        :index="item.index"
        @click="goto(item.index)"
      >
        <a-icon :type="item.ptype" />
        {{ item.label }}
      </a-menu-item>
      <a-menu-item key="github">
        <a-icon type="github" /><a
          href="https://github.com/lhw1116"
          target="_blank"
          rel="noopener noreferrer"
          style="float: right"
          >Github</a
        >
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navOptions: [
        { label: "主页", index: "home", ptype: "home" },
        { label: "Golang", index: "golang", ptype: "smile" },
        { label: "Docker", index: "docker", ptype: "cloud" },
        { label: "K8S", index: "k8s", ptype: "setting" },
        { label: "算法", index: "count", ptype: "fire" },
        { label: "操作系统", index: "pc", ptype: "desktop" },
        { label: "关于", index: "about", ptype: "heart" },
      ],
    };
  },
  methods: {
    goto: function (r) {
      this.$router.push(r);
    },
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