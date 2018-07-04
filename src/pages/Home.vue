<template>
  <div>
    <div class="jumbotron p-3 p-md-5 text-white rounded bg-dark" v-if="lastPost">
      <div class="col-md-6 px-0">
        <h1 class="display-4 font-italic">{{lastPost.title}}</h1>
        <p class="lead my-3" v-html="lastPost.body"></p>
        <p class="lead mb-0"><router-link :to="{ path: '/posts/' + lastPost.slug }" class="text-white font-weight-bold">Continuar lendo...</router-link></p>
      </div>
    </div>
    <div class="row">
      <Post v-for="post in posts" :key="post._id" :post="post"/>
    </div>
    <div v-if="!lastPost">
      Nenhuma postagem.
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
    this.fetchPosts(this.currentPage);

    // Parte que vai disparar uma ação quando estiver no fim da página, independente do tamanho da tela
    window.onscroll = () => {
      let bottomOfWindow =
        document.documentElement.scrollTop + window.innerHeight >=
        document.documentElement.offsetHeight - 1;
      if (bottomOfWindow) {
        if (!this.isLoading) {
          this.currentPage++;
          this.fetchPosts();
        }
      }
    };
  },
  data() {
    return {
      posts: [],
      lastPost: null,
      currentPage: 1,
      isLoading: false
    };
  },
  methods: {
    fetchPosts() {
      this.isLoading = true;
      postService
        .get(this.currentPage)
        .then(response => {
          this.posts.push(...response.data.posts);
          if (this.currentPage == 1) {
            this.lastPost = this.posts.shift();
          }
          this.isLoading = false;
        })
        .catch(err => {
          console.log(err);
          this.isLoading = false;
        });
    }
  }
};
</script>

<style>
</style>
