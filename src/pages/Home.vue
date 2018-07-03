<template>
  <div>
    <div class="jumbotron p-3 p-md-5 text-white rounded bg-dark">
      <div class="col-md-6 px-0">
        <h1 class="display-4 font-italic">{{lastPost.title}}</h1>
        <p class="lead my-3">{{lastPost.body}}</p>
        <p class="lead mb-0"><a href="#" class="text-white font-weight-bold">Continuar lendo...</a></p>
      </div>
    </div>
    <div class="row">
      <Post v-for="post in posts" :key="post._id" :post="post"/>
    </div>
  </div>
</template>

<script>
import Post from "../components/Post";
import postService from "../services/postService";

export default {
  name: "home-desafio",
  components: {
    Post
  },
  created: function() {
    postService.get().then(response => {
      console.log(response.data);
      this.posts = response.data.posts;
      this.lastPost = this.posts.shift();
    });
  },
  data() {
    return {
      posts: [],
      lastPost: {}
    };
  }
};
</script>

<style>
</style>
