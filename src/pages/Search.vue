<template>
  <div>
    <h2 class="mb-3">Resultados para: {{$route.query.q}}</h2>
    <div class="row" v-if="posts.length > 0">
      <Post v-for="post in posts" :key="post._id" :post="post"/>
    </div>
    <div v-if="posts.length == 0">
      Nenhum resultado para a busca.
    </div>
  </div>
</template>

<script>
import Post from "../components/Post";
import postService from "../services/postService";

export default {
  name: "search-desafio",
  components: {
    Post
  },
  created: function() {
    const q = this.$route.query.q;
    // console.log(q);

    if (q) {
      this.fetchPosts(q);
    }

    // Parte que vai disparar uma ação quando estiver no fim da página, independente do tamanho da tela
    window.onscroll = () => {
      let bottomOfWindow =
        document.documentElement.scrollTop + window.innerHeight >=
        document.documentElement.offsetHeight - 1;
      if (bottomOfWindow) {
        if (!this.isLoading) {
          this.currentPage++;
          this.fetchPosts(q);
        }
      }
    };
  },
  data() {
    return {
      posts: [],
      currentPage: 1,
      isLoading: false
    };
  },
  watch: {
    $route: function() {
      this.posts = [];
      this.fetchPosts(this.$route.query.q);
    }
  },
  methods: {
    fetchPosts(q) {
      this.isLoading = true;
      postService
        .get(this.currentPage, q)
        .then(response => {
          this.posts.push(...response.data.posts);
          this.isLoading = false;
          // console.log(response.data);
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
