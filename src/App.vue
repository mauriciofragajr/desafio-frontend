<template>
  <div>
    <Header/>
    <Body/>
  </div>
</template>

<script>
import Header from "./components/Header";
import Body from "./components/Body";

export default {
  name: "app",
  components: {
    Header,
    Body
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>
