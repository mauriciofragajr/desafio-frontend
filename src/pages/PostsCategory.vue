<template>
  <div>
    <h2 class="mb-3">Categoria: {{$route.params.slug}} </h2>
    <div class="row">
      <Post v-for="post in posts" :key="post._id" :post="post"/>
    </div>
  </div>
</template>

<script>
import Post from "../components/Post";
import postService from "../services/postService";

export default {
  name: "posts-category-desafio",
  components: {
    Post
  },
  created: function() {
    const slug = this.$route.params.slug;
    // console.log(slug);

    if (slug) {
      this.fetchPosts(slug, this.currentPage);
    }

    // Parte que vai disparar uma ação quando estiver no fim da página, independente do tamanho da tela
    window.onscroll = () => {
      let bottomOfWindow =
        document.documentElement.scrollTop + window.innerHeight >=
        document.documentElement.offsetHeight - 1;
      if (bottomOfWindow) {
        if (!this.isLoading) {
          this.currentPage++;
          this.fetchPosts(slug);
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
  methods: {
    fetchPosts(slug) {
      this.isLoading = true;
      postService
        .getByCategory(slug, this.currentPage)
        .then(response => {
          this.posts.push(...response.data.posts);
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
