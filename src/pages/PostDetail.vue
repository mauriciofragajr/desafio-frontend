<template>
  <div v-if="post">
    <h2>{{post.title}}</h2>
    <p>{{post.createdAt | formatDate}} Categorias: <router-link :to="{path: '/categories/' + cat.slug}" v-for="cat in post.categories" :key="cat._id">{{cat.name}}</router-link></p>
    <p v-html="post.body"></p>
  </div>
</template>

<script>
import Post from "../components/Post";
import postService from "../services/postService";

export default {
  name: "post-detail-desafio",
  components: {
    Post
  },
  data() {
    return {
      post: null
    };
  },
  created: function() {
    const slug = this.$route.params.slug;

    if (slug) {
      postService
        .getDetail(slug)
        .then(response => {
          console.log(response.data);
          this.post = response.data.post;
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style>
</style>
