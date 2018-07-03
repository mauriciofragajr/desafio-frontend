<template>
  <div class="container-fluid">
    <div class="row">
        <Content/>
        <Sidebar/>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar';
import Content from './Content';

export default {
  name: "body-desafio",
  components: {
    Sidebar,
    Content,
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>
