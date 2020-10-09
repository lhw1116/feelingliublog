<template>
  <div id="app">
    <router-view />
    <Backtop></Backtop>
  </div>
</template>

<script>
import Backtop from "./components/Backtop";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    Backtop,
  },
  mounted() {},
};
</script>
