<template>
  <div>
    <a-input-search
      style="width: 200px"
      @search="onSearch"
      placeholder="搜索"
    />
  </div>
</template>

<script>
export default {
  name: "search",
  methods: {
    onSearch(value) {
      console.log(value);
    },
  },
};
</script>
