<template>
  <div class="blog-main">
    <router-view :key="key" />
  </div>
</template>

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