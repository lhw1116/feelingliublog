<template>
  <div class="header">
    <div class="container">
      <div class="blog-order">
        <Menu></Menu>
      </div>
      <div class="blog-search">
        <Search></Search>
      </div>
    </div>
  </div>
</template>
<script>
import Menu from "./Menu";
import Search from "./Search";
export default {
  name: "nav-header",
  components: {
    Menu,
    Search,
  },
  data() {
    return {
      activeIndex: "1",
      inputs: "",
    };
  },
};
</script>

<style lang="scss">
.container {
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
}
.blog-order {
  width: 860px;
}
.search {
  width: 200px;
  height: 60px;
}
</style>