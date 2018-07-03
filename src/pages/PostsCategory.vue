<template>
  <div>
    <h2 class="mb-3">Categoria: </h2>

    <div class="row">
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  </div>
</template>

<script>
import Post from '../components/Post';

export default {
  name: "posts-category-desafio",
  components: {
      Post,
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>
