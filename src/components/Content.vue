<template>
  <div class="col-md-9 p-4">
    <Home/>
    <!-- <PostDetail/> -->
    <!-- <Search/> -->
    <!-- <PostsCategory/> -->
  </div>
</template>

<script>
import Home from "../pages/Home";
import PostDetail from "../pages/PostDetail";
import Search from "../pages/Search";
import PostsCategory from "../pages/PostsCategory";

export default {
  name: "content-desafio",
  components: {
    Home,
    PostDetail,
    Search,
    PostsCategory,
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>
