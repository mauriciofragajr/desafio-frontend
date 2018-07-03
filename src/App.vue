<template>
  <div>
    <Header/>
    <Body/>
  </div>
</template>

<script>
import Header from "./components/Header";
import Body from "./components/Body";
import categoryService from "./services/categoryService";

import { mapActions } from "vuex";

export default {
  name: "app",
  components: {
    Header,
    Body
  },
  methods: {
    ...mapActions(["fetchCategories"])
  },
  created: function() {
    // categoryService.get().then(response => console.log(response.data));
    this.fetchCategories();
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>
