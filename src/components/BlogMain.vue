<template>
  <div class="blog-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </div>
</template>

<style>
.blog-main {
  padding-top: 50px;
  background-color: #fff;
}
</style>
<script>
export default {
  name: "BlogMain",
  computed: {
    key() {
      return this.$route.fullPath;
    },
  },
};
</script>