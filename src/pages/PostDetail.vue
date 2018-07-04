<template>
  <div v-if="post">
    <h2>{{post.title}}</h2>
    <router-link v-if="getAdminMode" :to="{ path: '/dashboard/post-form/edit/' + post.slug }">Editar</router-link>
    <p>{{post.createdAt | formatDate}} Categorias: <router-link :to="{path: '/categories/' + cat.slug}" v-for="cat in post.categories" :key="cat._id">{{cat.name}}</router-link></p>
    <p v-html="post.body"></p>
  </div>
</template>

<script>
import Post from "../components/Post";
import postService from "../services/postService";

import { mapGetters } from "vuex";

export default {
  name: "post-detail-desafio",
  components: {
    Post
  },
  computed: {
    ...mapGetters(["getAdminMode"])
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
