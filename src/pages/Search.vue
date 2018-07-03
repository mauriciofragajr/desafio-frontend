<template>
  <div>
    <h2 class="mb-3">Resultados para: {{$route.query.q}}</h2>
    <div class="row">
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  </div>
</template>

<script>
import Post from "../components/Post";

export default {
  name: "search-desafio",
  components: {
    Post
  },
  created: function () {
    console.log(this.$route.query.q);
  },
  data() {
    return {

    };
  }
};
</script>

<style>
</style>
